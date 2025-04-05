import Image from "next/image";
import heroIllustration from "../_assets/hero-illustration.webp"
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mt-20 mx-2 md:flex-row">
          <Image
            src={heroIllustration}
            width={400}
            height={400}
            alt="Hero Illustrations"
            className="sm:w-[500] md:w-[400] lg:w-[800] md:order-2"
          />

          <div className="md:w-[700px] md:mx-7">
            <h1 className="font-black text-2xl sm:text-5xl mt-5 text-center md:text-left">Group chat that&apos;s all fun & games</h1>

            <p className="font-medium sm:text-lg text-center md:text-left mt-1">ThisChord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.</p>
          </div>
        </div>

        <div className="mx-2 mt-7 flex items-center justify-center">
          <Link
            href={""}
            className="bg-white text-quaternary font-black text-xl px-2 py-1 rounded-md flex items-center justify-center sm:w-[400px] hover:opacity-90"
          >
            Open ThisChord
          </Link>
        </div>
      </div>
    </>
  );
}