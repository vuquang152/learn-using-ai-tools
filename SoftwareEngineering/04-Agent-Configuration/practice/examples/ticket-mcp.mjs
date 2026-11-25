import { createInterface } from 'node:readline';
import { sampleTickets } from '../data/sample.mjs';

const protocolVersion = '2025-11-25';
const getTicket = {
  name: 'get_ticket',
  description: 'Look up a fictional ticket by its ID in the local fixture.',
  inputSchema: {
    type: 'object',
    properties: { id: { type: 'string', pattern: '^T-[0-9]{3}$' } },
    required: ['id'],
    additionalProperties: false,
  },
  annotations: { readOnlyHint: true },
};

function lookup(args) {
  if (typeof args?.id !== 'string' || !/^T-[0-9]{3}$/.test(args.id) ||
      Object.keys(args).length !== 1) {
    return { isError: true, content: [{ type: 'text', text: 'Expected a ticket ID like T-101.' }] };
  }

  const ticket = sampleTickets.find(candidate => candidate.id === args.id);
  return { content: [{ type: 'text', text: JSON.stringify(ticket ?? { found: false }) }] };
}

const input = createInterface({ input: process.stdin, crlfDelay: Infinity });

for await (const line of input) {
  let request;
  try {
    request = JSON.parse(line);
  } catch {
    console.error('Ignoring invalid JSON in the lab transport.');
    continue;
  }
  if (request?.jsonrpc !== '2.0' || !Object.hasOwn(request, 'id')) continue;

  const response = { jsonrpc: '2.0', id: request.id };
  if (request.method === 'initialize') {
    response.result = { protocolVersion, capabilities: { tools: {} },
      serverInfo: { name: 'ticketlab', version: '1.0.0' } };
  } else if (request.method === 'ping') {
    response.result = {};
  } else if (request.method === 'tools/list') {
    response.result = { tools: [getTicket] };
  } else if (request.method === 'tools/call' && request.params?.name === getTicket.name) {
    response.result = lookup(request.params.arguments);
  } else {
    response.error = { code: -32601, message: 'Unsupported lab method or tool' };
  }
  console.log(JSON.stringify(response));
}
