export default function CommentsSection() {
  return (
    <div className="rounded-[120px] bg-[#F7F8F8] p-20 mx-8 my-48 grid grid-cols-3 gap-16">
      <h1 className="col-span-2 text-8xl text-pretty font-semibold">
        What our customers say
      </h1>
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="comment bg-white rounded-[44px] p-8 flex flex-col gap-8"
        >
          <p className="opacity-70 font-light">
            They make it super easy and safe to find a room for rent,
            prioritizing both convenience and safety. The customer support team
            is exceptionally responsive and genuinely helpful, ensuring a smooth
            experience. I wholeheartedly endorse this platform.
          </p>
          <p className="ml-auto w-fit font-medium">Ashley Cooper</p>
        </div>
      ))}
    </div>
  );
}
