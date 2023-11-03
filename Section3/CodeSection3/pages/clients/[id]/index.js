import {useRouter} from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  function handleNavigate(){
    //Navigating Programmatically(This way using in submitting form)
    router.push('/clients/alaa/projectA')
  }
  return (
    <div>
      <h1>The Client Projects Page</h1>
      <button onClick={handleNavigate}>Load Project</button>
    </div>
  );
}
export default ClientProjectsPage;
