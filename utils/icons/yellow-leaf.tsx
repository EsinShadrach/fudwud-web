export function YellowLeaf({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 157 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Vector" filter="url(#filter0_d_2_765)">
        <path
          d="M124 119V38.4096C124 -30.2915 68.4749 -86 -7.62939e-06 -86V-5.40957C-7.62939e-06 63.2915 55.5251 119 124 119Z"
          fill="#FFC529"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2_765"
          x="-37"
          y="-112"
          width="194"
          height="275"
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
          <feOffset dx="-2" dy="9" />
          <feGaussianBlur stdDeviation="17.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.772549 0 0 0 0 0.160784 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_765"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_765"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
