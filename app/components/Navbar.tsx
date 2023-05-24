import Image from "next/image";

export default function Navbar({name, description}: {name: string, description: string}) {
  return (
    <header
      dir="rtl"
      className="h-40 sm:h-60 flex flex-row items-start w-screen text-white relative overflow-hidden"
    >
      <div
        dir="rtl"
        className="sm:h-52 bg-cover bg-center bg-header-blur sm:bg-header h-32 py-5 w-full px-8 sm:px-10 lg:px-20  flex flex-row items-center justify-start sm:items-start"
      >
        <div className="flex flex-row gap-4 sm:gap-8 h-20 sm:h-32 sm:absolute bottom-0 transform items-center sm:items-start">
          <Image
            src={
              "https://images.unsplash.com/photo-1646444022733-45826815d70a?crop=faces&fit=crop&h=140&w=140"
            }
            alt={"profile"}
            className="w-20 h-20 sm:w-32 sm:h-32 rounded-full transition-all outline outline-2 sm:outline-4 outline-[#FAF4F2]"
            width={140}
            height={140}
          />
          <div className="w-full flex flex-col gap-2">
            <div className="font-black sm:text-4xl text-3xl">{name}</div>
            <div className="font-base sm:text-xl text-lg">{description}</div>
          </div>
        </div>
        <button className="sm:left-10 lg:left-20 select-none cursor-pointer hover:bg-zinc-800 active:bg-zinc-700 left-6 h-10 absolute bottom-3 transform flex flex-row text-white font-bold items-center justify-center sm:w-36 w-32 transition-all rounded-full bg-zinc-950 outline outline-3 sm:outline-4 outline-[#FAF4F2]">
            צרו קשר
        </button>
      </div>
    </header>
  );
}
