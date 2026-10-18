interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  ariaLabel?: string;
}

export default function ArrowButton({
  direction,
  onClick,
  ariaLabel,
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="box-border flex size-8 items-center justify-center rounded-full border border-[#111111] p-[5px] cursor-pointer hover:bg-black/5 transition-colors min-[481px]:size-9"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0.5 6H11.5"
          stroke="#111111"
          strokeWidth="1"
          strokeLinecap="square"
        />
        {direction === "left" ? (
          <path
            d="M6 0.5L0.5 6L6 11.5"
            stroke="#111111"
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        ) : (
          <path
            d="M6 0.5L11.5 6L6 11.5"
            stroke="#111111"
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        )}
      </svg>
    </button>
  );
}