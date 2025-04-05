import Icons from "@/icons/icons";
import Link from "next/link";


export default function Header() {
  return (
    <>
      <footer className="flex justify-between items-center container mx-auto pt-10 px-3">
        <Link
          href={''}
          className="flex items-center gap-1"
        >
          <Icons.Logo className="size-7" />
          <h1 className="font-black text-xl">ThisChord</h1>
        </Link>

        <div>
          <Link
            href={"/"}
            className="bg-text hover:opacity-80 text-quaternary font-bold px-2 py-[6px] rounded-xl"
          >
            Open ThisChord
          </Link>
        </div>
      </footer>
    </>
  );
}