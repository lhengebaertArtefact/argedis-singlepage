import { obj } from "@/api/objetRegion";
import Link from "next/link";

export default async function List() {
  return (
    <div>
      {obj.regions.map(
        (element: any, index: number) =>
          element.lang === "fr" && (
            <Link key={index} href={`/${element.uid}`}>
              {element.uid}
            </Link>
          )
      )}
    </div>
  );
}
