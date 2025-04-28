import TextReveal from "./TextReveal";

export default function ServicesSection() {
  const services = [
    {
      title: "Furniture Design",
      description:
        "The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences.",
    },
    {
      title: "Interior Details",
      description:
        "Incorporating interior detailing introduces dimension, tactile qualities, and captivating visual elements to a room, enhancing the overall design through the addition of those final embellishments.",
    },
    {
      title: "Home Revamping",
      description:
        "The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences.",
    },
  ];
  return (
    <div className="rounded-3xl md:rounded-[80px] xl:rounded-[120px] bg-[#F7F8F8] px-4 py-10 md:p-16 xl:p-20 mx-2 md:mx-8 my-16 md:my-32 xl:my-48 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
      <h1 className="col-span-1 md:col-span-2 xl:col-span-3 text-4xl md:text-6xl xl:text-8xl font-semibold text-pretty mb-8 md:mb-12 xl:mb-0">
        <TextReveal triggerOnScroll={true}>Services</TextReveal>
      </h1>
      {services.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl md:rounded-[32px] xl:rounded-[44px] p-6 md:p-8 flex flex-col gap-8 md:gap-12 xl:gap-20 hover:bg-[#050F27] transition-all duration-300 ease-in-out hover:text-white"
        >
          <p className="w-fit ml-auto font-medium text-3xl md:text-5xl xl:text-6xl">
            0{index + 1}
          </p>
          <h4 className="font-medium text-2xl md:text-4xl xl:text-6xl max-w-full md:max-w-[80%] xl:max-w-[60%]">
            {item.title}
          </h4>
          <p className="opacity-70 font-light text-base md:text-lg">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
