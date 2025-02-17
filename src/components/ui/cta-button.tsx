
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const CTAButton = ({ children, onClick, className = "", href }: CTAButtonProps) => {
  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group inline-flex items-center justify-center px-6 py-3 
        text-lg font-semibold text-white
        bg-agrogoods-primary hover:bg-agrogoods-dark
        rounded-lg transition-all duration-200
        shadow-lg hover:shadow-xl
        ${className}
      `}
      onClick={onClick}
    >
      {children}
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </motion.button>
  );

  if (href) {
    return <a href={href}>{buttonContent}</a>;
  }

  return buttonContent;
};
