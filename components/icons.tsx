import { SVGProps } from "react";

const defaultProps: SVGProps<SVGSVGElement> = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

const Sun = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...defaultProps} {...props}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    );
};

const Moon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...defaultProps} {...props}>
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    );
};

const Monitor = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...defaultProps} {...props}>
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
    );
};

const Nord = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 450"
            {...props}
        >
            <polygon
                fill="currentColor"
                points="500 450 343.75 450 125 56.25 62.5 56.25 62.5 393.75 125 394.88 203.75 239.63 233.75 295.88 156.25 450 0 450 0 0 156.25 0 377.5 393.75 437.5 393.75 437.5 56.25 375 56.25 297.5 210.38 266.25 155.25 343.75 0 500 0 500 450"
            />
        </svg>
    );
};

export { Sun, Moon, Monitor, Nord };
