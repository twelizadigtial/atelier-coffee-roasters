import React from "react";

export const SVGFilters: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="hidden absolute w-0 h-0 pointer-events-none"
      style={{ visibility: "hidden", width: 0, height: 0, position: "absolute" }}
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
            result="goo"
          />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
        </filter>
      </defs>
    </svg>
  );
};

export const WheatSparkleIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M4.79706 0.698742C6.62451 -0.356337 8.33768 -0.100768 8.79461 0.698742C9.1372 1.26982 9.95263 2.76679 7.9951 4.26725C6.18246 5.65664 4.39765 5.82707 2.1031 6.10934C1.26339 6.21263 0.657367 5.31298 1.13784 4.61662C2.1605 3.13446 3.54973 1.41889 4.79706 0.698742Z"
      fill="currentColor"
    />
    <path
      d="M11.4191 5.88616C13.427 5.87185 14.909 6.75451 15.0691 7.51645C15.1983 8.06731 15.4615 9.47757 13.1917 9.75947C11.131 10.0154 9.20921 9.07994 6.96056 8.19658C6.14127 7.87472 6.09131 6.84384 6.94001 6.61031C8.40885 6.20614 10.1826 5.89498 11.4191 5.88616Z"
      fill="currentColor"
    />
    <path
      d="M8.77276 12.0038C10.1678 13.5839 10.8047 14.7341 10.1086 15.7716C9.43405 16.6757 8.18765 17.9916 6.49279 16.2052C4.05577 13.6366 3.50831 12.4821 2.55533 10.9824C2.05791 10.1996 2.71159 9.16054 3.60294 9.41682C5.50422 9.96347 7.73239 10.8254 8.77276 12.0038Z"
      fill="currentColor"
    />
  </svg>
);

export const StarSparkleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export const CraftIconThoughtfully: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2C10 1.44772 10.4477 1 11 1H13C13.5523 1 14 1.44772 14 2V3.5H10V2Z" fill="#1170b6" />
    <rect x="8" y="4.5" width="8" height="16" rx="2" fill="#1170b6" />
  </svg>
);

export const CraftIconIngredients: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 18V9" stroke="#1170b6" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 9C8 9 6 6 6 4C6 4 10 4 12 7V9Z" fill="#1170b6" />
    <path d="M12 11C16 11 18 8 18 6C18 6 14 6 12 9V11Z" fill="#1170b6" />
    <path d="M7 19C7 19 9.5 21 12 21C14.5 21 17 19 17 19" stroke="#1170b6" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const CraftIconComforting: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#1170b6" />
  </svg>
);

export const CraftIconRichFlavor: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="14" r="7" fill="#1170b6" />
    <path d="M12 7C11.5 6 10 5 10 4C10 4 12 4 13 5.5V7Z" fill="#1170b6" />
    <circle cx="10" cy="12" r="1.5" fill="#fff" />
    <circle cx="14" cy="12" r="1.5" fill="#fff" />
    <path d="M9.5 15.5C9.5 15.5 10.5 17 12 17C13.5 17 14.5 15.5 14.5 15.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

export const CraftIconFreshPour: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.5C15.5 21.5 18.5 18.5 18.5 14.5C18.5 10 12 2.5 12 2.5C12 2.5 5.5 10 5.5 14.5C5.5 18.5 8.5 21.5 12 21.5Z" fill="#1170b6" />
    <path d="M9 14.5C9 14.5 9 17 11.5 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="15.5" cy="10.5" r="2.5" fill="#1170b6" />
  </svg>
);
