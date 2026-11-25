export function selectTickets(tickets, status) {
  if (status === 'all') return tickets.slice();
  return tickets.filter(ticket => ticket.status === status);
}
