import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const pricingTiers = [
  {
    title: 'Starter',
    monthlyPrice: 4.99,
    buttonText: 'Choose plan',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB storage',
      'Integrations',
      'Basic support',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 12.99,
    buttonText: 'Choose plan',
    popular: true,
    inverse: true,
    features: [
      'Up to 25 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced support',
      'Export support',
    ],
  },
  {
    title: 'Business',
    monthlyPrice: 24.99,
    buttonText: 'Choose plan',
    popular: false,
    inverse: false,
    features: [
      'Up to 75 project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features',
    ],
  },
];

const Pricing = () => {
  return (
    <section className="bg-white pt-6 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-[#010D3E] text-center font-bold tracking-tight">Pricing</h2>
        <p className="text-2xl text-center mt-10">Plans tailored to your needs. Find the perfect fit.</p>
        <Reveal>
          <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
            {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
              <div
                className={twMerge(
                  'p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full',
                  inverse === true && 'border-black bg-black text-white'
                )}
              >
                <div className="flex justify-between">
                  <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && 'text-white/60')}>
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{ backgroundPositionX: '100%' }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'linear', repeatType: 'loop' }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-semibold"
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                  <span
                    className={twMerge('tracking-tight font-bold text-black/50', inverse === true && 'text-white/70')}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    'bg-black mt-[30px] text-white px-4 py-2 rounded-lg font-medium inline-flex align items justify-center tracking-tight w-full cursor-pointer hover:bg-[#8460ab] active:scale-98 transition-colors duration-300',
                    inverse === true && 'bg-white text-black hover:text-white transition-colors duration-300'
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li className="text-sm flex items-center gap-4">
                      <svg
                        className="h-6 w-6"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.3367 8.43697L10.7367 18.037C10.6531 18.1209 10.5538 18.1875 10.4444 18.2329C10.335 18.2783 10.2177 18.3017 10.0992 18.3017C9.98079 18.3017 9.8635 18.2783 9.75411 18.2329C9.64471 18.1875 9.54535 18.1209 9.46174 18.037L5.26174 13.837C5.17802 13.7533 5.11162 13.6539 5.06631 13.5445C5.021 13.4351 4.99768 13.3179 4.99768 13.1995C4.99768 13.0811 5.021 12.9638 5.06631 12.8545C5.11162 12.7451 5.17802 12.6457 5.26174 12.562C5.34546 12.4783 5.44485 12.4118 5.55423 12.3665C5.66361 12.3212 5.78085 12.2979 5.89924 12.2979C6.01764 12.2979 6.13487 12.3212 6.24425 12.3665C6.35364 12.4118 6.45302 12.4783 6.53674 12.562L10.1 16.1252L19.0632 7.16348C19.2323 6.9944 19.4616 6.89941 19.7007 6.89941C19.9399 6.89941 20.1692 6.9944 20.3382 7.16348C20.5073 7.33255 20.6023 7.56187 20.6023 7.80098C20.6023 8.04008 20.5073 8.2694 20.3382 8.43848L20.3367 8.43697Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
