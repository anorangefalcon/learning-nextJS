import { useMemo } from "react";

export default function Docs({ params }: { params: { slug: string[] } }) {
  // here we will catch all segments to access all params in a webpage here itself

  /*
    [] catches segments that is all the params after the parent folder eg: docs/something/anotherThing
    [[]] catches all segments that gives us opp to catch even the defualt route that is just /docs here 
  */
  const displayMsg: string | null =
    useMemo(() => {
      return params?.slug?.reduce((acc, curr, index) => {
        return `${acc} slug ${index + 1} is ${curr}`;
      }, "");
    }, [params?.slug]) || null;
  return (
    <div>
      {!displayMsg ? (
        <h1>Docs Home-Page</h1>
      ) : (
        <>
          <h1>Docs for this routeeeee : </h1>
          <p>{displayMsg}</p>
        </>
      )}
    </div>
  );
}
