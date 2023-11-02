import {useRouter} from 'next/router';

function ProjectIdPage() {
  const router = useRouter(); // return object
  console.log(router.pathname); // return (/portfolio/[projectId]) => path of folder
  console.log(router.query); // return an object {projectId: 'whatever i written in url'}

  return (
    <div>
      <h1>The Project Id Page (Dynamic Page)</h1>
    </div>
  );
}
export default ProjectIdPage;
