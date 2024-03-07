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
