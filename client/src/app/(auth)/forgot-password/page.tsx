import Image from "next/image";
import wumpus_in_gear from "../_assets/wumpus-in-gear.webp";


export default function ForgotPasswordPage() {

  return (
    <>
      <main className="w-[90vw] sm:w-[500px] md:w-[600px] py-6">
        <h1 className="text-3xl font-black text-center">Forgot Password</h1>
        <Image 
          src={wumpus_in_gear}
          width={150}
          height={150}
          alt="Wumpus in gear"
          className="mx-auto mt-3"
        />

        <form className="px-5 py-6">
          <div className="flex flex-col">
            <label htmlFor="email">Email <span className="text-red">*</span></label>
            <input
              type="email"
              name="email"
              id="email"
              className="focus:outline-none bg-tertiary border border-darker-muted p-1 rounded-[9px] focus:border-accent transition px-2 font-semibold"
            />
          </div>


          <button type="submit" className="bg-accent w-full p-1 rounded-[8px] hover:opacity-85 mt-5">Reset Password</button>
        </form>
      </main>
    </>
  );
}