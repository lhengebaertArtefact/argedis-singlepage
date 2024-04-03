import RegionMap from "../components/RegionMap";
import { getAllRegions, getAllRegionsLangs } from "@/api/contentful";

export async function generateStaticParams() {
  const regions: any = await getAllRegions();
  const staticParams: any[] = [];

  for (const region of regions) {
    for (const producer of region.producersCollection.items) {
      staticParams.push([
        {
          region: region.regionName,
          producer: producer.producerName,
          fr: "fr",
        },
        {
          region: region.regionName,
          producer: producer.producerName,
          en: "en",
        },
      ]);
    }
  }

  return staticParams.flat();
}

export default async function Region({ params }: { params: { region: any } }) {
  const regionUID = params.region;
  const regions = await getAllRegionsLangs();

  const frRegion = regions.fr.find((region: any) => region.uid === regionUID);
  const enRegion = regions.en.find((region: any) => region.uid === regionUID);

  return (
    <div>
      {" "}
      <RegionMap region={{ fr: frRegion, en: enRegion }} />
    </div>
  );
}
