import RegionMap from "../components/RegionMap";
import { obj } from "@/api/objetRegion";

export async function generateStaticParams() {
  const staticParams = [];

  // Itérer sur les régions
  for (const region of obj.regions) {
    const regionParams = { region: region.uid };

    // Itérer sur les producteurs de la région
    for (const producer of region.producers) {
      const producerParams = { region: region.uid, producer: producer.uid };
      staticParams.push(producerParams);
    }

    staticParams.push(regionParams);
  }

  return staticParams;
}

export default async function Region({
  params,
}: {
  params: { region: string };
}) {
  const regionUID = params.region;
  const regionData = obj.regions.filter(
    (region: any) => region.uid === regionUID
  );

  return (
    <div>
      <RegionMap region={regionData} />
    </div>
  );
}
