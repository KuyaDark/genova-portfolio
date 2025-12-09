import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean; // turn off shine
  speed?: number;     // animation duration in seconds
  className?: string; // additional classes
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}) => {
  return (
    <div
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        animation: disabled ? undefined : `shine ${speed}s linear infinite`,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
