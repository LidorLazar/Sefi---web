import Image from "next/image";

export default function Navbar() {
  return (
    <header
      dir="rtl"
      className="h-40 sm:h-60 flex flex-row items-start w-screen text-white relative overflow-hidden"
    >
      <div
        dir="rtl"
        className="sm:h-52 bg-red-200 h-32 py-5 w-full px-5 sm:px-10 flex flex-row items-center justify-start sm:items-start"
      >
        {/* <Image src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="top-bg" className="object-cover w-full h-full" fill /> */}
        <div className="flex flex-row gap-4 sm:gap-8 h-20 sm:h-32 sm:absolute bottom-0 transform items-center sm:items-start">
          <Image
            src={
              "https://images.unsplash.com/photo-1646444022733-45826815d70a?crop=faces&fit=crop&h=140&w=140"
            }
            alt={"profile"}
            className="w-20 h-20 sm:w-32 sm:h-32 rounded-full  transition-all outline outline-4 sm:outline-8 outline-[#FAF4F2]"
            width={140}
            height={140}
          />
          <div className="w-full flex flex-col gap-2">
            <div className="font-bold sm:text-4xl text-3xl">שם מלא</div>
            <div className="font-base sm:text-xl text-lg">
              ייעוץ משפחות והדרכת הורים
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}