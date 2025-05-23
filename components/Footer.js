"use client";
import Link from "next/link";
import Image from "next/image";
import TextReveal from "./TextReveal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Footer() {
  const container = useRef(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.from(".footer-image img", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
      });
      gsap.from(".footer-links a", {
        opacity: 0,
        x: -5, // Moves items up slightly while fading in
        duration: 0.6,
        ease: "power4.inOut",
        stagger: 0.2, // Adds delay between each item
      });
    },
    { scope: container }
  );

  return (
    <footer
      ref={container}
      className="rounded-3xl lg:rounded-[120px] bg-[#050F27] text-white px-4 py-10 sm:px-8 sm:py-16 md:px-16 md:py-20 xl:px-32 xl:py-24 mx-2 sm:mx-4 md:mx-8 mt-24 md:mt-48 mb-4 md:mb-8"
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl font-semibold max-w-full md:max-w-[60%] text-balance">
            <TextReveal triggerOnScroll={true}>
              Start Your Project Now!
            </TextReveal>
          </h1>
          <p className="font-light opacity-70 mt-4 sm:mt-6 md:mt-8 max-w-full md:max-w-[40%] text-pretty text-base sm:text-lg">
            <TextReveal triggerOnScroll={true} delay={0.1}>
              Made for you convenience for a more beautiful future for you and
              your family
            </TextReveal>
          </p>
        </div>
        <button className="btn w-full md:w-1/4 !font-normal !text-base !bg-[#ffffff05] mt-6 md:mt-0">
          Contact Us
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4 sm:p-6 bg-[#ffffff05] rounded-3xl mt-12 md:mt-32 gap-4 md:gap-0">
        <div className="footer-image">
          <Image
            src="/images/logo-white.png"
            alt="real estate"
            width={96}
            height={40}
          />
        </div>
        <div className="footer-links flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 font-light text-base sm:text-lg">
          <Link href="#" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link href="#" className="hover:text-gray-400 transition-colors">
            Project
          </Link>
          <Link href="#" className="hover:text-gray-400 transition-colors">
            About Us
          </Link>
          <Link href="#" className="hover:text-gray-400 transition-colors">
            FAQs
          </Link>
        </div>
      </div>
    </footer>
  );
}
