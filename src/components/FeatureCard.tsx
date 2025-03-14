import { FeatureCardProps } from '../types/featureCard';

const FeatureCard = ({ img, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col justify-between p-6 bg-white shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-400 rounded-lg text-center">
      <img src={img} alt={title} className="w-56 h-56 mx-auto" />
      <h3 className="text-2xl lg:text-3xl text-[#010D3E] font-bold my-8 tracking-tight">{title}</h3>
      <p className="text-xl text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
