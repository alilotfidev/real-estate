import Link from "next/link";
export default function Footer() {
  return (
    <footer className="rounded-[120px] bg-[#050F27] text-white p-20 mx-8 mt-48 mb-8">
      <div className="flex justify-between">
        <div>
          <h1 className="col-span-2 text-8xl max-w-[60%] text-balance font-semibold">
            Start Your Project Now!
          </h1>
          <p className="font-light opacity-70 max-w-[40%] mt-8 text-pretty">
            Made for you convenience for a more beautiful future for you and
            your family
          </p>
        </div>

        <button className="btn w-1/4 !font-normal !text-base !bg-[#ffffff05]">
          Contact Us
        </button>
      </div>

      <div className="flex justify-between items-center p-6 bg-[#ffffff05] rounded-[120px] mt-32">
        <div className="text-xl font-bold">Real Estate</div>

        <div className="space-x-6 font-light">
          <Link href="#" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="#" className="hover:text-gray-600">
            Project
          </Link>
          <Link href="#" className="hover:text-gray-600">
            About Us
          </Link>
          <Link href="#" className="hover:text-gray-600">
            FAQs
          </Link>
        </div>
      </div>
    </footer>
  );
}
