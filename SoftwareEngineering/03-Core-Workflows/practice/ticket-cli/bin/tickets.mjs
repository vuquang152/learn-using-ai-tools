import { listTickets } from '../src/cli.mjs';
import { sampleTickets } from '../data/sample.mjs';

try {
  const tickets = listTickets(process.argv.slice(2), sampleTickets);
  console.log(JSON.stringify(tickets));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
