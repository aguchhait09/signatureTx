import { IconProps } from "typescript/interfaces/common.all.interface";

export default function AddIcon({
  color,
  width,
  height,
  className,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M6.99984 1.16666V12.8333M1.1665 6.99999H12.8332"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
