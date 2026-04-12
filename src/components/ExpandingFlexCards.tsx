import { useState } from "react";
import { motion } from "framer-motion";

interface FlexCard {
  image: string;
  title: string;
  category: string;
}

const ExpandingFlexCards = ({ cards }: { cards: FlexCard[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex gap-2 h-[280px] md:h-[340px]">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          className="relative rounded-2xl overflow-hidden cursor-pointer"
          animate={{ flex: activeIndex === i ? 4 : 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          onMouseEnter={() => setActiveIndex(i)}
          onClick={() => setActiveIndex(i)}
        >
          <img
            src={card.image}
            alt={card.title}
            loading="lazy"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 md:p-5"
            animate={{ opacity: activeIndex === i ? 1 : 0 }}
            transition={{ duration: 0.3, delay: activeIndex === i ? 0.2 : 0 }}
          >
            <span className="text-white/70 text-xs font-medium uppercase tracking-wider">
              {card.category}
            </span>
            <h4 className="text-white font-heading font-semibold text-sm md:text-base mt-1 leading-tight">
              {card.title}
            </h4>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExpandingFlexCards;
