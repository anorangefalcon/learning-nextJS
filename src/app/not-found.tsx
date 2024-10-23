export default function notFoundGlobal() {
  // this is a root level global not found page
  return (
    <>
      <h1>Content not found</h1>
      <p>
        This is a custom styled 404 page. file name needs to be src/app or at
        folder level for local not found pages.
      </p>
    </>
  );
}
