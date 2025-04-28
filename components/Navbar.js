"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const container = useRef(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.from("img", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
      });
      gsap.from(".links a", {
        opacity: 0,
        x: -5, // Moves items up slightly while fading in
        duration: 0.6,
        ease: "power4.inOut",
        stagger: 0.2, // Adds delay between each item
      });
      gsap.from("button", {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power4.inOut",
      });
    },
    { scope: container }
  );

  return (
    <nav
      ref={container}
      className="flex flex-col md:flex-row items-center p-4 md:p-6 bg-[#F7F8F8] rounded-3xl md:rounded-[128px] m-2 md:m-8 relative"
    >
      <div className="mb-4 md:mb-0">
        <Image
          src="/images/logo-black.png"
          alt="real estate"
          width={96}
          height={40}
        />
      </div>

      <div className="links flex flex-row gap-4 md:space-x-6 md:mx-auto mb-4 md:mb-0">
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
