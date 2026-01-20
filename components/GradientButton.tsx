import React, { memo, useCallback } from 'react';
import { cn } from '../lib/utils';

export interface GradientButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const GradientButton = memo(({
  children,
  width = 'auto',
  height = '48px',
  className = '',
  onClick,
  disabled = false,
  ...props
}: GradientButtonProps) => {
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  }, [disabled, onClick]);

  const handleClick = useCallback(() => {
    if (!disabled) onClick?.();
  }, [disabled, onClick]);

  return (
    <div className={cn("text-center relative", className)} {...props}>
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        className={cn(
          "relative rounded-full cursor-pointer",
          "after:content-[''] after:block after:absolute after:bg-[var(--color-background)]",
          "after:inset-[2px] after:rounded-full after:z-[1]",
          "after:transition-opacity after:duration-300 after:ease-linear",
          "flex items-center justify-center rotatingGradient gpu-accelerated",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        style={{ '--r': '0deg', minWidth: width, height: height } as React.CSSProperties}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-disabled={disabled}
      >
        <span className="relative z-10 text-[var(--color-text)] flex items-center justify-center gap-2 text-sm font-bold tracking-wide uppercase px-6">
          {children}
        </span>
      </div>
    </div>
  );
});

GradientButton.displayName = 'GradientButton';

export default GradientButton;