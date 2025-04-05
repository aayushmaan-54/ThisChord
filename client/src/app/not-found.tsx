import Image from "next/image";
import error_404 from "./_assets/404-error.gif";


export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col px-10">
      <div className="container mx-auto px-4 flex-grow flex flex-col-reverse md:flex-row items-center justify-center gap-8 max-w-6xl">
        <div className="w-full md:w-1/2 pt-6 md:pt-0">
          <h2 className="text-4xl font-black text-accent mb-4">WRONG TURN?</h2>
          <p className="text-primary font-black text-lg">
            You look lost, stranger. You know what helps when you&apos;re lost? A piping 
            hot bowl of noodles. Take a seat, we&apos;re frantically at work here cooking 
            up something good.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={error_404}
            width={400}
            height={400}
            alt="404 Error - Noodle Shop"
            className="w-[280px] sm:w-[350px] md:w-[400px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}