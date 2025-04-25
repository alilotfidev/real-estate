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
    <div className="rounded-[120px] bg-[#F7F8F8] p-20 mx-8 my-48 grid grid-cols-3 gap-16">
      <h1 className="col-span-3 text-8xl text-pretty font-semibold">
        Services
      </h1>
      {services.map((item, index) => (
        <div
          key={index}
          className="comment bg-white rounded-[44px] p-8 flex flex-col gap-20 hover:bg-[#050F27] transition-all duration-300 ease-in-out hover:text-white"
        >
          <p className="w-fit ml-auto font-medium text-6xl">0{index + 1}</p>
          <h4 className="font-medium text-6xl max-w-[60%]">{item.title}</h4>
          <p className="opacity-70 font-light">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
