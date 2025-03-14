import nutImage from '../assets/nut.svg';
import cylinderImage from '../assets/cylinder.svg';
import noodleImage from '../assets/noodle.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IoRocketOutline } from 'react-icons/io5';

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter bg-gradient-to-b from-[#1040dc] to-[#0e0e46] text-transparent bg-clip-text leading-tight pb-1">
              Flowly
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-50 mt-6 leading-snug">
              Streamline your tasks, boost your productivity, and achieve more with Flowly.
            </h2>
            <button className="bg-black mt-[30px] text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 tracking-tight w-[90%] cursor-pointer hover:text-[#c76fb7] hover:scale-102 active:scale-98 transition-all duration-300">
              <p>Get Started</p>
              <IoRocketOutline className="text-xl" />
            </button>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={nutImage}
              alt="Nut Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
            <motion.img
              src={cylinderImage}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage}
              width={220}
              height={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px]"
              style={{
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
