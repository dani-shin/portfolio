import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "filled" | "outlined";

interface ButtonProps extends Omit<ComponentProps<"a">, "href"> {
  href: string;
  variant?: Variant;
}

const base =
  "inline-flex items-center justify-center h-[42px] px-4 rounded-[2px] text-[14px] leading-5 font-normal transition-colors md:text-base";

const variants: Record<Variant, string> = {
  filled:
    "bg-[#111111] text-white hover:bg-[#333333] active:bg-[#000000]",
  outlined:
    "border border-[#111111] bg-transparent text-[#111111] hover:bg-[#EBEBEB] active:bg-[#D6D6D6]",
};

export default function Button({
  href,
  variant = "filled",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (/^(mailto:|tel:)/.test(href)) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
