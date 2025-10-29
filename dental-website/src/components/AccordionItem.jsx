import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Keep divider subtle
    <div className="border-b border-gray-200/80 py-4 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        // Adjusted text size, weight, color, and hover color
        className="flex justify-between items-center w-full text-left text-base font-normal text-gray-700 hover:text-[#10b981] transition-colors duration-200"
      >
        <span className="pr-4">{question}</span> {/* Added padding right */}
        {/* Adjusted icon color */}
        <span className="flex-shrink-0 text-gray-500">
             {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              // Added slight padding-top to the open state
              open: { opacity: 1, height: 'auto', marginTop: '12px', paddingTop: '4px' },
              collapsed: { opacity: 0, height: 0, marginTop: '0px', paddingTop: '0px' }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            {/* Kept answer styling */}
            <p className="text-gray-600 text-sm leading-relaxed pr-6">{answer}</p> {/* Added padding right */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;