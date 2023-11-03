import Link from 'next/link';

function ClientsPage() {
  const clients = [
    {id: 1, name: 'Alaa'},
    {id: 2, name: 'Hamdy'},
    {id: 3, name: 'Mohammadi'},
  ]
  return (
    <div>
      <h1>The clients Page</h1>
      <ul>
        {clients.map((client) => <li key={client.id}><Link href={`/clients/${client.id}`}>{client.name}</Link> </li>)}
      </ul>
    </div>
  );
}
export default ClientsPage;
