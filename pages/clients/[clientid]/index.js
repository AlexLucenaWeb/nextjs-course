import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjecthandler() {
    // load data....
    // router.push('/clients/alex/storyteller')
    router.push({
      pathname: "/clients/[clientid]/[projectid]",
      query: { clientid: "alex", projectid: "storyteller" },
    });
  }

  return (
    <div>
      <h1>The Client Project Page</h1>
      <button onClick={loadProjecthandler}>Load My StoryTeller</button>
    </div>
  );
}

export default ClientProjectsPage;
