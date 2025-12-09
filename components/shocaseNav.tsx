import React from "react";
import "./global.css"


interface NavbarItem {
  label: string;
  href: string;
}

interface SimpleNavbarProps {
  items: NavbarItem[];
  activeItem?: string;
  onItemClick?: (label: string) => void;
}

const SimpleNavbar: React.FC<SimpleNavbarProps> = ({
  items,
  activeItem,
  onItemClick,
}) => {
return (
  <div className="bg-gray-800 px-4 py-2 rounded flex flex-wrap  sm:gap-4 justify-center block-zoom">
    {items.map((item) => (
      <button
        key={item.label}
        onClick={() => onItemClick?.(item.label)}
        className={`
          relative px-4 py-2 font-medium transition
          ${activeItem === item.label
            ? "text-white"
            : "text-gray-300 hover:text-white"
          }
        `}
      >
        {item.label}

        {/* underline */}
        <span
          className={`
            absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-white 
            transition-all duration-300
            ${activeItem === item.label ? "w-full" : "w-0"}
          `}
        ></span>
      </button>
    ))}
  </div>
);


};

export default SimpleNavbar;
