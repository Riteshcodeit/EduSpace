import background from "./background.png"

export default function Maindiv(){
    return <>
    <main className=" h-auto md:h-[40rem] w-full rounded-md relative overflow-hidden mx-auto flex justify-center items-center">
      <div className="p-4 px-14 ">
        <span className="border rounded border-white py-3 px-5 mb-4 inline-block">
          Turn Days of Work into Minutes
        </span>
        <h1 className=" pb-8 mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-purple-400 ">
        Empowering Learning & Collaboration on One Platform.
        </h1>
        <p className="font-normal font-semibold text-base md:text-lg text-neutral-300 mx-auto">
        Connect students and teachers, share lectures, collaborate in communities, and enhance the learning experience.
        </p>
        <button
          className="mt-7 px-8 py-3 rounded-full bg-gradient-to-b from-neutral-200 to-purple-900 text-white focus:ring-2 focus:ring-purple-400 hover:shadow-xl transition duration-200"
        >
          Get started now
        </button>
      </div>
      <div className="">
        <img src={background} alt="backImage" className="h-[95%] w-[100%]" />
      </div>
    </main>
    </>
}