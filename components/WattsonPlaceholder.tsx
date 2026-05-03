export function WattsonPlaceholder() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#87CEEB]/35 bg-white/85 p-6 shadow-[0_30px_90px_rgba(51,51,51,0.14)]">
      <div className="absolute right-6 top-6 rounded-full bg-[#87CEEB]/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#333333]">
        WATTSON
      </div>

      <div className="mx-auto flex min-h-[390px] max-w-sm items-center justify-center">
        <svg
          aria-label="WATTSON, the Let's Move Smarter lightbulb guide placeholder"
          className="h-auto w-full max-w-[300px]"
          role="img"
          viewBox="0 0 320 420"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wattsonBulb" x1="96" x2="232" y1="36" y2="250">
              <stop offset="0" stopColor="#BFEFFF" stopOpacity="0.9" />
              <stop offset="1" stopColor="#87CEEB" stopOpacity="0.58" />
            </linearGradient>
            <filter id="softShadow" height="150%" width="150%" x="-25%" y="-20%">
              <feDropShadow dx="0" dy="18" floodColor="#333333" floodOpacity="0.16" stdDeviation="16" />
            </filter>
          </defs>

          <ellipse cx="164" cy="384" fill="#333333" opacity="0.1" rx="86" ry="16" />

          <g filter="url(#softShadow)">
            <path
              d="M164 28C106 28 76 73 76 128c0 39 17 65 38 88 17 18 23 34 24 56h52c1-22 8-38 24-56 22-24 38-50 38-88 0-55-30-100-88-100Z"
              fill="url(#wattsonBulb)"
              stroke="#333333"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
            />
            <path
              d="M134 274h60v58c0 15-13 28-30 28s-30-13-30-28v-58Z"
              fill="#F8FBFC"
              stroke="#333333"
              strokeWidth="5"
            />
            <path d="M132 292h64M132 313h64M139 334h50" stroke="#333333" strokeLinecap="round" strokeWidth="5" />
          </g>

          <path
            d="M134 198c12-31 48-31 60 0M145 198c4 18 34 18 38 0"
            fill="none"
            stroke="#D4A855"
            strokeLinecap="round"
            strokeWidth="7"
          />
          <path d="M164 198v42" stroke="#D4A855" strokeLinecap="round" strokeWidth="7" />

          <path d="M122 112c11-9 25-10 37-2" stroke="#333333" strokeLinecap="round" strokeWidth="6" />
          <path d="M173 110c13-8 27-7 38 3" stroke="#333333" strokeLinecap="round" strokeWidth="6" />
          <ellipse cx="142" cy="139" fill="#333333" rx="8" ry="12" />
          <ellipse cx="188" cy="139" fill="#333333" rx="8" ry="12" />
          <path d="M147 173c12 10 27 10 39 0" fill="none" stroke="#333333" strokeLinecap="round" strokeWidth="5" />

          <path d="M91 248c-35 9-47 30-55 55" fill="none" stroke="#333333" strokeLinecap="round" strokeWidth="6" />
          <path d="M229 248c36 9 50 30 58 55" fill="none" stroke="#333333" strokeLinecap="round" strokeWidth="6" />
          <circle cx="33" cy="309" fill="#87CEEB" r="10" stroke="#333333" strokeWidth="5" />
          <circle cx="290" cy="309" fill="#87CEEB" r="10" stroke="#333333" strokeWidth="5" />

          <path d="M145 360l-18 36" stroke="#333333" strokeLinecap="round" strokeWidth="7" />
          <path d="M183 360l18 36" stroke="#333333" strokeLinecap="round" strokeWidth="7" />
          <path
            d="M100 398h35c8 0 13-6 11-13l-3-8h-30c-10 0-19 8-19 18 0 2 2 3 6 3Z"
            fill="#FFFFFF"
            stroke="#333333"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            d="M228 398h-35c-8 0-13-6-11-13l3-8h30c10 0 19 8 19 18 0 2-2 3-6 3Z"
            fill="#FFFFFF"
            stroke="#333333"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </svg>
      </div>

      <div className="rounded-2xl bg-[#333333] p-5 text-white">
        <p className="text-sm font-semibold text-[#D4A855]">Brand guide placeholder</p>
        <p className="mt-2 text-sm leading-6 text-white/80">
          WATTSON will help explain tote counts, timing, and smart move tips once final artwork is ready.
        </p>
      </div>
    </div>
  );
}
