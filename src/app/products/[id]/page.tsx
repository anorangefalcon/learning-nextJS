import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

/*
  make sure you export fnc named generateMetadata as it is used by next.js to generate metadata
*/

// async example using metadata fnc
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   // also when you use async metaData, page will only load once the metadata is resolved
//   const value = await new Promise((resolve) => {
//     setTimeout(() => resolve(`Hehe ${params.id}`), 3000);
//   });

//   return {
//     title: `${value}`,
//     description: `Product details page`,
//   };
// }

// sync example using generaeMetadata fnc
export function generateMetadata({ params }: Props): Metadata {
  let titleVal: string | { absolute: string } = `Hehe ${params.id}`;
  if (parseInt(params?.id) > 50) {
    // lets return a absolute title ie will bypass the template
    titleVal = { absolute: `Absolute ${params.id}` };
  }
  return {
    title: titleVal,
    description: `Product details page`,
  };
}

export default function Product({ params }: Props) {
  return (
    <div>
      <h1>Product {params.id}</h1>
      <div>Details about prduct {params.id}</div>
    </div>
  );
}
