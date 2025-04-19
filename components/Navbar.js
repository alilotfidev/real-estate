import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center p-6 bg-[#F7F8F8] rounded-[128px] m-8 relative">
      <div className="text-xl font-bold">Real Estate</div>

      <div className="space-x-6 mx-auto">
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

      <button className="px-4 bg-[#050F27] text-white absolute right-0 top-0 h-full rounded-r-[128px] rounded-l-4xl">
        Contact Us
      </button>
    </nav>
  );
}
