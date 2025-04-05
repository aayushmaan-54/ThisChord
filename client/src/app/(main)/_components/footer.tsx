import Icons from "@/icons/icons";
import Link from "next/link";

export default function Footer() {
  const Socials = [
    {
      name: "X (Twitter)",
      url: "https://x.com/aayushmaan54",
      icon: Icons.X_Twitter
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aayushmaan54",
      icon: Icons.LinkedIn
    },
    {
      name: "GitHub",
      url: "https://github.com/aayushmaan-54",
      icon: Icons.GitHub
    },
    {
      name: "Portfolio",
      url: "https://aayushmaan-soni.vercel.app",
      icon: Icons.Globe
    }
  ];

  return (
    <>
      <footer className="bg-accent py-7">
        <div className="flex justify-between items-center container mx-auto px-5">
          <Link href={"/"}>
            <Icons.Logo className="size-10 mt-4" />
          </Link>

          <div>
            <h1 className="font-bold">Socials: </h1>
            <ul className="flex items-center gap-5 ml-2 mt-1">
              {
                Socials.map((social) => (
                  <li key={social.name}>
                    <Link href={social.url}>
                      <social.icon className="fill-white size-5" />
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <p className="pt-10 font-medium mx-auto text-center underline">Made by Aayushmaan Soni</p>
      </footer>
    </>
  );
}