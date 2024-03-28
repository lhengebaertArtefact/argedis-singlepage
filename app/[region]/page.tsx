import RegionMap from "../components/RegionMap";
import { obj } from "@/api/objetRegion";

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
