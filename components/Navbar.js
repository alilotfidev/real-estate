import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center p-4 md:p-6 bg-[#F7F8F8] rounded-3xl md:rounded-[128px] m-2 md:m-8 relative">
      <div className="text-xl font-bold mb-4 md:mb-0">Real Estate</div>

      <div className="flex flex-row gap-4 md:space-x-6 md:mx-auto mb-4 md:mb-0">
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

      <button className="md:w-auto px-4 py-2 bg-[#050F27] text-white rounded-2xl md:rounded-[128px] md:h-full">
        Contact Us
      </button>
    </nav>
  );
}
