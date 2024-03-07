import RegionMap from "./components/RegionMap";
import { obj } from "../api/objetRegion";
import { getAllPages, getAllRegionsId } from "@/api/contentful";

export default async function Home() {
  const regions = await getAllRegionsId("pFAf5IubZnVlp1WSDDHkB");

  // Finalement un seul call a été nécessaire prendre les deux langues

  return (
    <div>
      <RegionMap regions={regions} />
    </div>
  );
}

// export async function generateStaticParams() {
//   const regionsData = await getAllRegionsId("pFAf5IubZnVlp1WSDDHkB");

//   const staticParams = regionsData.flatMap((regionData: any) => {
//     const staticParamsForRegion: any = [];

//     const frRegion = regionData.fr;
//     if (frRegion) {
//       frRegion.producersRefCollection.items.forEach((producer: any) => {
//         staticParamsForRegion.push({
//           region: frRegion.title,
//           locale: "fr",
//           id: producer.sys.id,
//         });
//       });
//     }

//     const enRegion = regionData.en;
//     if (enRegion) {
//       enRegion.producersRefCollection.items.forEach((producer: any) => {
//         staticParamsForRegion.push({
//           region: enRegion.title,
//           locale: "en",
//           id: producer.sys.id,
//         });
//       });
//     }

//     return staticParamsForRegion;
//   });

//   return staticParams;
// }
