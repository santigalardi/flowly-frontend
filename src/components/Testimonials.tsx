/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Testimonial } from '../types/testimonial';
import { motion } from 'framer-motion';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';
import avatar5 from '../assets/avatar-5.png';
import avatar6 from '../assets/avatar-6.png';
import avatar7 from '../assets/avatar-7.png';
import avatar8 from '../assets/avatar-8.png';
import avatar9 from '../assets/avatar-9.png';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data: Testimonial[]) => {
        const testimonialsData = data.slice(0, 9).map((comment, index) => ({
          ...comment,
          rating: Math.floor(Math.random() * 3) + 3, // Genera un rating entre 3 y 5
          avatar: avatars[index],
        }));
        setTestimonials(testimonialsData);
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  const TestimonialsColumn = (props: { className?: string; testimonials: Testimonial[]; duration?: number }) => (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration: props.duration || 20,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col justify-between text-center items-center p-10 bg-white border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full"
              >
                <img
                  src={testimonial.avatar}
                  alt={`Avatar de ${testimonial.name}`}
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold mb-2 tracking-tight">{testimonial.name}</h3>
                <p className="mb-4 tracking-tight">{testimonial.body}</p>
                <div className="text-yellow-500">{'★'.repeat(testimonial.rating || 0)}</div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="bg-white pt-12 pb-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-[#010D3E] text-center font-bold tracking-tight mt-5">Testimonials</h2>
        <p className="text-2xl text-center mt-10">Our app has become an essential tool for users around the world.</p>
        <div className="flex justify-center gap-6 mt-22 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[900px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// {testimonials.map((testimonial) => (
//   <div key={testimonial.id} className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
//     <img
//       src={testimonial.avatar}
//       alt={`Avatar de ${testimonial.name}`}
//       className="w-16 h-16 mx-auto rounded-full mb-4"
//     />
//     <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
//     <p className="mb-4">{testimonial.body}</p>
//     <div className="text-yellow-500">{'★'.repeat(testimonial.rating || 0)}</div>
//   </div>
// ))}
