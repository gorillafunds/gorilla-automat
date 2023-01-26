import { GorillaIcon } from "./_types"

export const AutomatLogo = ({ className }: GorillaIcon) => (
  <svg viewBox="0 0 40 40" className={className}>
    <rect width={40} height={40} rx={8} fill="#17144C" />
    <g clipPath="url(#clip0_68_1123)">
      <rect
        x={20}
        y="7.27208"
        width={18}
        height={18}
        transform="rotate(45 20 7.27208)"
        fill="#7CD9B2"
        fillOpacity="0.5"
      />
      <path
        className="Automat__clamPath"
        d="M20 7.27208L32.7279 20L20 20L7.27208 20L20 7.27208Z"
        fill="#7CD9B2"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_1123">
        <rect
          x="7.27209"
          y={20}
          width={18}
          height={18}
          rx={1}
          transform="rotate(-45 7.27209 20)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
)
