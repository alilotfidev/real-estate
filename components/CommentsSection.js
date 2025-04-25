export default function CommentsSection() {
  return (
    <div className="rounded-[40px] md:rounded-[80px] lg:rounded-[120px] bg-[#F7F8F8] p-4 md:p-10 lg:p-20 mx-2 md:mx-8 my-12 md:my-24 lg:my-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16">
      <h1 className="col-span-1 md:col-span-2 text-3xl md:text-5xl lg:text-8xl text-pretty font-semibold">
        What our customers say
      </h1>
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="comment bg-white rounded-2xl md:rounded-[32px] lg:rounded-[44px] p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-6 lg:gap-8"
        >
          <p className="opacity-70 font-light text-sm md:text-base">
            They make it super easy and safe to find a room for rent,
            prioritizing both convenience and safety. The customer support team
            is exceptionally responsive and genuinely helpful, ensuring a smooth
            experience. I wholeheartedly endorse this platform.
          </p>
          <p className="ml-auto w-fit font-medium text-sm md:text-base">
            Ashley Cooper
          </p>
        </div>
      ))}
    </div>
  );
}
