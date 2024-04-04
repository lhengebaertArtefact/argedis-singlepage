import { getAllRegions } from "@/api/contentful";
import Link from "next/link";

export default async function List() {
  const regions = await getAllRegions();

  return (
    <div>
      {regions.map((element: any, index: number) => (
        <Link key={index} href={`/${element.uid}`}>
          {element.uid}
        </Link>
      ))}
    </div>
  );
}
