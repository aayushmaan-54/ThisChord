import Link from "next/link";


export default function SignUpPage() {

  return (
    <>
      <main className="w-[90vw] sm:w-[500px] md:w-[600px] py-6">
        <h1 className="text-3xl font-black text-center">Create an account</h1>

        <form className="px-5 py-6">
        <div className="flex flex-col">
            <label htmlFor="username">Username <span className="text-red">*</span></label>
            <input
              type="text"
              name="username"
              id="username"
              className="focus:outline-none bg-tertiary border border-darker-muted p-1 rounded-[9px] focus:border-accent transition px-2 font-semibold"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="email">Email <span className="text-red">*</span></label>
            <input
              type="email"
              name="email"
              id="email"
              className="focus:outline-none bg-tertiary border border-darker-muted p-1 rounded-[9px] focus:border-accent transition px-2 font-semibold"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="password">Password <span className="text-red">*</span></label>
            <input
              type="password"
              name="password"
              id="password"
              className="focus:outline-none bg-tertiary border border-darker-muted p-1 rounded-[9px] focus:border-accent transition px-2 font-semibold"
            />
          </div>


          <button type="submit" className="bg-accent w-full p-1 rounded-[8px] hover:opacity-85 mt-5">Sign Up</button>

            <Link href={'/sign-in'} className="font-semibold text-accent hover:opacity-85">Already have an account?</Link>
        </form>
      </main>
    </>
  );
}