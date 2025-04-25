import Image from "next/image";

export default function ClientsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 p-4 md:p-8 m-4 md:m-8 gap-4 md:gap-8">
      <div className="image relative h-full hidden lg:block col-span-1 lg:col-span-2 rounded-[120px] overflow-hidden">
        <Image
          src="/images/clients.png"
          alt="what our clients say?"
          fill={true}
          className="object-contain md:object-cover"
        />
      </div>
      <div className="content col-span-1 md:col-span-6 bg-[#F7F8F8] rounded-[40px] md:rounded-[120px] flex flex-col p-8 md:p-20 px-6 md:px-28 gap-6 md:gap-12">
        <div className="w-fit lg:ml-auto">
          <p className="font-medium text-sm">Satisfied Clients</p>
          <p className="font-bold text-4xl md:text-7xl">8.4M+</p>
        </div>

        <p className="font-semibold text-3xl md:text-6xl">
          We can bring to life everything you've ever envisioned and dreamed of
          – your ideals and desires are our creations.
        </p>
        <p className="font-light text-sm max-w-full md:max-w-3/4">
          Our purpose is to transform your wildest dreams into reality.
          Regardless of how unconventional your vision may be, we possess the
          capability to craft your dream home, fulfilling your every desire.
        </p>
        <button className="btn w-full xl:w-1/4 !font-normal !text-base">
          Start Exploring
        </button>
      </div>
    </div>
  );
}
