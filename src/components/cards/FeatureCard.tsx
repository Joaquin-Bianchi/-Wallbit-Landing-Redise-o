import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

interface FeatureCardProps {
  feature: Feature;
}

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div
      className="card wallet group"
      style={{ "--bg-color": feature.color } as React.CSSProperties}
    >
      <div className="overlay" />
      <div className="circle">
        <feature.icon className="w-12 h-12 md:w-16 md:h-16 text-white z-20" />
      </div>
      <h3 className="title">{feature.title}</h3>
      <p className="subtitle">{feature.subtitle}</p>
      <p className="description">{feature.description}</p>
    </div>
  );
};
