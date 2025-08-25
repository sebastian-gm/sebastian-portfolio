import { ReactNode } from 'react';

interface TechChipProps {
  children: ReactNode;
  icon?: ReactNode;
}

const TechChip = ({ children, icon }: TechChipProps) => {
  return (
    <div className="tech-chip inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium">
      {icon && <span className="mr-2 opacity-70">{icon}</span>}
      {children}
    </div>
  );
};

export default TechChip;