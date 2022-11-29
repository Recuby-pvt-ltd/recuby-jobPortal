import Sun from "/circle.png";
import Somke from "/smoke.gif";
import Stone from "/stone.png";
import Stand from "/stand.png";
import { useAnimation, motion } from "framer-motion";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const BackgroundScene = () => {
  const control = useAnimation();

  useScrollPosition(({ prevPos, currPos }) => {
    const currAbsoluteY = Math.abs(currPos.y);
    const scrolledPercentage =
      currAbsoluteY /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    const rounded = Math.round(scrolledPercentage * 100);
    if (rounded >= 2) {
      control.start({
        opacity: 0 - scrolledPercentage,
      });
    } else if (rounded < 2) {
      control.start({
        opacity: scrolledPercentage + 10,
      });
    }
  });

  return (
    <>
      <motion.img
        animate={control}
        src={Stand}
        className="absolute flex bottom-10 right-[23vw] 2x:right-[5rem] z-10 w-[10%]"
      />
      <motion.img
        animate={control}
        src={Sun}
        alt="yellow-circle"
        className="absolute top-64 right-[1vw] 2xl:right-[-5rem] z-0 w-[60%]"
      />
      <motion.img
        animate={control}
        src={Somke}
        alt="somke"
        className="absolute bottom-0 right-0 z-30"
      />
      <motion.img
        animate={control}
        src={Stone}
        alt="stone"
        className="absolute bottom-0 right-0 z-20 h-[50%] 2xl:h-auto"
      />
    </>
  );
};
export default BackgroundScene;
