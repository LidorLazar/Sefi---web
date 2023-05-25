import Image from "next/image";

export type PlanProps = {
  price: number;
  name: string;
  description: string;
  image: string;
};

export default function Plan({ price, name, description, image }: PlanProps) {
  return (
    <div className="flex-grow sm:w-80">
      <div
        className={`relative sm:h-48 w-full h-12 bg-header bg-center rounded-xl bg-cover sm:bg-[length:700px_263px] sm:hover:bg-[length:800px_300px] sm:hover:brightness-125 sm:hover:cursor-pointer sm:active:brightness-100 sm:active:bg-[length:746px_280px] transition-all select-none`}
      >
        <div className="w-full h-full flex flex-row justify-between sm:items-end px-4 py-2 text-xl text-white">
          <span className="font-bold">{name}</span>
          <span className="ml-2 font-base">₪{price}</span>
        </div>
      </div>
      <div className="mt-4 text-base sm:text-justify w-full">{description}</div>
    </div>
  );
}
