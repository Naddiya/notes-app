export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/note/`);
  const { data } = await res.json();
  return {
    props: { notes: data }
  };
}