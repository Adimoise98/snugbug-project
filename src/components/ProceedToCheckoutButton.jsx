import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import PropTypes from "prop-types";

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

const ProceedToCheckoutButton = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, SPRING_OPTIONS);
  const ySpring = useSpring(y, SPRING_OPTIONS);

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMove = (e) => {
    if (!ref.current) return;

    const { height, width } = ref.current.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    const xPct = offsetX / width;
    const yPct = 1 - offsetY / height;

    const newY = 12 + yPct * 12;
    const newX = 12 + xPct * 12;

    x.set(newX);
    y.set(-newY);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="mx-auto h-[60px] w-4/5 bg-black">
      <motion.button
        ref={ref}
        style={{
          transform,
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleReset}
        onMouseDown={handleReset}
        className="group flex text-center h-[60px] w-full items-center justify-between shadow-lg shadow-black bg-[#b2d12e] px-8 text-xl font-semibold border-black border-2"
      >
        <Copy>PROCEED TO CHECKOUT</Copy>
        <Arrow />
      </motion.button>
    </div>
  );
};

const Copy = ({ children }) => {
  return (
    <span className="relative overflow-hidden">
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
};

Copy.propTypes = {
  children: PropTypes.node.isRequired,
};

const Arrow = () => (
  <div className="pointer-events-none flex h-6 w-6 overflow-hidden text-2xl">
    <FiArrowRight className="shrink-0 -translate-x-full text-lime-950 transition-transform duration-300 group-hover:translate-x-0" />
    <FiArrowRight className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
  </div>
);

export default ProceedToCheckoutButton;
