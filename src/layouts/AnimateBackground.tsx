import type { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

interface Props {
  children?: ReactNode;
}

const AnimateBackground = ({ children }: Props) => {
  const control = useAnimation();

  useScrollPosition(({ prevPos, currPos }) => {
    const currAbsoluteY = Math.abs(currPos.y);
    const scrolledPercentage =
      currAbsoluteY /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    const rounded = Math.round(scrolledPercentage * 100);
    if (rounded >= 0 && rounded <= 10) {
      control.start({
        backgroundColor: "white",
      });
    } else if (rounded >= 10 && rounded <= 30) {
      control.start({
        backgroundColor: "#1aa6d9",
      });
    } else if (rounded >= 30 && rounded <= 50) {
      control.start({
        backgroundColor: "#0587CC",
      });
    } else if (rounded >= 55 && rounded <= 85) {
      control.start({
        backgroundColor: "#0f7aa1",
      });
    } else if (rounded >= 85 && rounded <= 90) {
      control.start({
        backgroundColor: "#0b6a8c",
      });
    } else if (rounded >= 90 && rounded <= 100) {
      control.start({
        backgroundColor: "#0b5b76",
      });
    }
  });

  return (
    <motion.div className="transition-colors ease-linear" animate={control}>
      {children}
    </motion.div>
  );
};
export default AnimateBackground;
