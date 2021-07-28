import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    
    return (
      <div>
        <h1>An specifict project of one client</h1>
      </div>
    );
  }
  
  export default SelectedClientProjectPage;
  