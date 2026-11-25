import { selectTickets } from './tickets.mjs';

export function listTickets(args, tickets) {
  if (args.length === 0) return selectTickets(tickets, 'all');

  if (args.length !== 2 || args[0] !== '--status') {
    throw new Error('Usage: tickets [--status all|open|closed]');
  }

  const status = args[1];
  if (!['all', 'open', 'closed'].includes(status.trim())) {
    throw new Error('Invalid status');
  }
  return selectTickets(tickets, status);
}
