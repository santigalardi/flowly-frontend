import FeatureCard from './FeatureCard'; // Ajusta la ruta según tu estructura
import cubeHelix from '../assets/cube-helix.svg';
import cubeHelix2 from '../assets/cube-helix2.svg';
import emojiStar from '../assets/emojistar.svg';
import Reveal from './Reveal';

const Features = () => {
  const features = [
    {
      key: crypto.randomUUID(),
      img: cubeHelix2,
      title: 'Blazing Fast Performance',
      description:
        'Experience lightning-fast speeds with our optimized architecture, ensuring seamless performance even under heavy workloads.',
    },
    {
      key: crypto.randomUUID(),
      img: cubeHelix,
      title: 'Military-Grade Security',
      description:
        'Protect your data with advanced encryption, multi-factor authentication, and regular security audits to keep your information safe.',
    },
    {
      key: crypto.randomUUID(),
      img: emojiStar,
      title: 'Real-Time Analytics',
      description:
        'Gain actionable insights with real-time dashboards and customizable reports to track your progress and make data-driven decisions.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] pt-10 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-[#010D3E] text-center font-bold tracking-tight">Features</h2>
        <p className="text-2xl text-center mt-10">
          Effortlessly turn your ideas into reality with our cutting-edge features.
        </p>
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
            {features.map((feature) => (
              <FeatureCard
                key={feature.key}
                img={feature.img}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
