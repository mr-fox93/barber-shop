"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ReusableButtonProps extends Omit<ButtonProps, "asChild" | "children"> {
  href?: string;
  target?: string;
  rel?: string;
  label?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
  labelClassName?: string;
  contentClassName?: string;
  ariaLabel?: string;
  shine?: boolean;
  shineClassName?: string;
  shineDuration?: number;
  shineRepeatDelay?: number;
  shineDelay?: number;
  children?: ReactNode;
}

export function ReusableButton({
  href,
  target = "_self",
  rel,
  label,
  imageSrc,
  imageAlt = "",
  imageWidth = 40,
  imageHeight = 40,
  imageClassName,
  labelClassName,
  contentClassName,
  ariaLabel,
  shine = false,
  shineClassName = "bg-white/10",
  shineDuration = 1.5,
  shineRepeatDelay = 2,
  shineDelay = 0,
  className,
  variant,
  size,
  disabled = false,
  onClick,
  children,
  ...buttonProps
}: ReusableButtonProps) {
  const content = (
    <>
      {children ? (
        children
      ) : (
        <span
          className={cn(
            "inline-flex items-center justify-center gap-2",
            contentClassName
          )}
        >
          {label && <span className={labelClassName}>{label}</span>}
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className={cn("h-8 w-auto object-contain", imageClassName)}
            />
          )}
        </span>
      )}

      {shine && (
        <motion.div
          className={cn("absolute inset-0", shineClassName)}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: shineDuration,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: shineRepeatDelay,
            delay: shineDelay,
          }}
        />
      )}
    </>
  );

  if (href) {
    const resolvedRel =
      rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

    return (
      <Button
        className={cn(className, disabled && "pointer-events-none opacity-50")}
        variant={variant}
        size={size}
        asChild
        {...buttonProps}
      >
        <a
          href={disabled ? undefined : href}
          target={target}
          rel={resolvedRel}
          aria-label={ariaLabel}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
          onClick={(event) => {
            if (disabled) {
              event.preventDefault();
              return;
            }
            onClick?.(event as never);
          }}
        >
          {content}
        </a>
      </Button>
    );
  }

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      {...buttonProps}
    >
      {content}
    </Button>
  );
}
