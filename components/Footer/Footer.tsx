import Link from "next/link";
import { dataSocial } from "./Footer.data";

export function Footer() {
  return (
    <div className="flex justify-around mt-10 p-6 border-t border-accent/40 ">
      <div>
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            Roger<span className="text-accent">Civ</span>
          </h1>
        </Link>
      </div>
      <div className="flex gap-4">
        {dataSocial.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link 
            href={item.url} 
            key={index}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Enlace a ${item.name}`}
            role="link"
            >
              <Icon className="text-2xl hover:opacity-75 hover:text-accent-hover" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
