import Image from "next/image";

export default function ClientsSection() {
  return (
    <div className="grid grid-cols-8 p-8 h-screen m-8 gap-8">
      <div className="image relative col-span-2">
        <Image
          src="/images/clients.png"
          alt="what our clients say?"
          fill={true}
        />
      </div>
      <div className="content col-span-6 bg-[#F7F8F8] rounded-[120px] flex flex-col p-20 px-28 gap-12">
        <div className="w-fit ml-auto">
          <p className="font-medium text-sm">Satisfied Clients</p>
          <p className="font-bold text-7xl">8.4M+</p>
        </div>

        <p className="font-semibold text-6xl">
          We can bring to life everything you've ever envisioned and dreamed of
          – your ideals and desires are our creations.
        </p>
        <p className="font-light text-sm max-w-3/4">
          Our purpose is to transform your wildest dreams into reality.
          Regardless of how unconventional your vision may be, we possess the
          capability to craft your dream home, fulfilling your every desire.
        </p>
        <button className="btn w-1/4 !font-normal !text-base">
          Start Exploring
        </button>
      </div>
    </div>
  );
}
