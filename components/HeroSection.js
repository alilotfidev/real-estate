import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-3 gap-x-20 gap-4 bg-[#F7F8F8] m-8 p-20 pb-8 rounded-[128px]">
      <div className="flex flex-col gap-4">
        <p className="font-medium text-sm">Capital raised</p>
        <p className="font-bold text-7xl">$3.5M+</p>
        <p className="font-light">
          Crafted for your comfort, to enhance the beauty of your present
          lifestyle but also paves the way for a more aesthetically pleasing and
          harmonious future for both you and your cherished family.
        </p>
      </div>
      <div className="col-span-2">
        <h2 className="font-bold text-8xl text-balance">
          We craft the future dwelling.
        </h2>
      </div>
      <div className="self-end flex flex-col gap-4">
        <p className="font-medium text-sm">Introduction</p>
        <p className="text-5xl">
          A vision for liveable, sustainable & affordable.
        </p>
        <button className="btn w-2/3">Start Exploring</button>
      </div>
      <div className="col-span-2 relative min-h-[400px]">
        <Image fill={true} alt="hero" src="/images/hero.png" />
      </div>
    </div>
  );
}
