import React, { useState } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  showText = true,
}) => {
  const [imgError, setImgError] = useState(false);

  // Size mapping
  const sizeMap = {
    sm: { img: 'h-10 w-auto', text: 'text-lg', sub: 'text-[9px]' },
    md: { img: 'h-14 w-auto', text: 'text-xl', sub: 'text-[10px]' },
    lg: { img: 'h-20 w-auto', text: 'text-2xl', sub: 'text-xs' },
    hero: { img: 'h-32 sm:h-40 md:h-48 w-auto', text: 'text-3xl sm:text-4xl', sub: 'text-xs sm:text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex items-center justify-center">
        <img
          src={imgError ? 'https://i.postimg.cc/YSSkf5mz/1.jpg' : '/divert_pet_logo_trimmed.png'}
          alt="Divert Pet"
          className={`${currentSize.img} object-contain transition-transform duration-300 hover:scale-105 drop-shadow-sm`}
          onError={() => setImgError(true)}
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-extrabold tracking-wider leading-none text-[#0F1419] ${currentSize.text}`}>
            DIVERT <span className="text-[#6F4325]">PET</span>
          </span>
          <span className={`tracking-widest uppercase font-semibold text-[#63C3D1] ${currentSize.sub}`}>
            Care • Fun • Love
          </span>
        </div>
      )}
    </div>
  );
};
