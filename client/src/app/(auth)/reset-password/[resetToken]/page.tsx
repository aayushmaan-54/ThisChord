import Image from "next/image";
import reset_password_doodle from "../../_assets/reset-password-doodle.svg";


export default function ResetPassword() {

  return (
    <>
      <main className="w-[90vw] sm:w-[500px] md:w-[600px] py-6">
        <h1 className="text-3xl font-black text-center">Reset Password</h1>
        <Image 
          src={reset_password_doodle}
          width={150}
          height={150}
          alt="Wumpus in gear"
          className="mx-auto mt-3"
        />

        <form className="px-5 py-6">
          <div className="flex flex-col">
            <label htmlFor="password">Password <span className="text-red">*</span></label>
            <input
              type="password"
              name="password"
              id="password"
              className="focus:outline-none bg-tertiary border border-darker-muted p-1 rounded-[9px] focus:border-accent transition px-2 font-semibold"
            />
          </div>


          <button type="submit" className="bg-accent w-full p-1 rounded-[8px] hover:opacity-85 mt-5">Change Password</button>
        </form>
      </main>
    </>
  );
}