import Image from "next/image";
import TextReveal from "./TextReveal";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-20 bg-[#F7F8F8] m-4 md:m-8 p-6 md:p-20 pb-8 rounded-3xl md:rounded-[128px]">
      <div className="flex flex-col gap-4">
        <p className="font-medium text-sm">
          <TextReveal delay={0.8}>Capital raised</TextReveal>
        </p>
        <p className="font-bold text-4xl md:text-6xl xl:text-7xl">
          <TextReveal delay={0.8}>$3.5M+</TextReveal>
        </p>
        <p className="font-light text-sm md:text-base">
          <TextReveal delay={0.8}>
            Crafted for your comfort, to enhance the beauty of your present
            lifestyle but also paves the way for a more aesthetically pleasing
            and harmonious future for both you and your cherished family.
          </TextReveal>
        </p>
      </div>
      <div className="col-span-1 md:col-span-2">
        <h2 className="font-bold text-4xl md:text-6xl lg:text-8xl text-balance">
          <TextReveal delay={0.8}>We craft the future dwelling.</TextReveal>
        </h2>
      </div>
      <div className="self-end flex flex-col gap-4">
        <p className="font-medium text-sm">
          <TextReveal delay={0.8}>Introduction</TextReveal>
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl">
          <TextReveal delay={0.8}>
            A vision for liveable, sustainable & affordable.
          </TextReveal>
        </p>
        <button className="btn w-full md:w-2/3">Start Exploring</button>
      </div>
      <div className="col-span-1 md:col-span-2 relative min-h-[200px] md:min-h-[400px]">
        <Image
          fill={true}
          className="object-cover"
          alt="hero"
          src="/images/hero.png"
        />
      </div>
    </div>
  );
}
