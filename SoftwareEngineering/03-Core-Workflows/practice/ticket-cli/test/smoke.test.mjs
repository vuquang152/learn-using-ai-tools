import assert from 'node:assert/strict';
import { test } from 'node:test';
import { sampleTickets } from '../data/sample.mjs';
import { listTickets } from '../src/cli.mjs';

test('lists all tickets by default in fixture order', () => {
  assert.deepEqual(listTickets([], sampleTickets), sampleTickets);
});

test('selects closed tickets in fixture order', () => {
  const result = listTickets(['--status', 'closed'], sampleTickets);
  assert.deepEqual(result.map(ticket => ticket.id), ['T-102', 'T-104']);
});

test('rejects an unknown status', () => {
  assert.throws(() => listTickets(['--status', 'paused'], sampleTickets), /Invalid status/);
});
