export function OrangeLeaf({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 251 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2_766)">
        <path
          d="M80 164V51.9295C80 -43.5797 157.9 -121 254 -121V-8.92948C254 86.5797 176.1 164 80 164Z"
          fill="#FE724C"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2_766"
          x="0"
          y="-141"
          width="274"
          height="385"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-30" dy="30" />
          <feGaussianBlur stdDeviation="25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.996078 0 0 0 0 0.447059 0 0 0 0 0.298039 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_766"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_766"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
