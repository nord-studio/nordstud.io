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

const Campsite = (props: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1020"
                height="527"
                viewBox="0 0 1020 527"
                {...props}
            >
                <g filter="url(#filter0_d_21_2)">
                    <path
                        d="M981.25 458.941L726.216 13.7729C721.359 5.29432 712.514 0.0914917 702.958 0.0914917H287.49C266.584 0.0914917 253.605 23.5088 264.229 42.0563L519.265 487.225C524.121 495.705 532.966 500.909 542.523 500.909H957.991C978.897 500.909 991.876 477.491 981.25 458.941Z"
                        fill="currentColor"
                    />
                </g>
                <g filter="url(#filter1_d_21_2)">
                    <path
                        d="M387.417 500.908H33.1089C8.24637 500.908 -7.67285 472.382 3.98752 448.72L171.297 109.109C183.364 84.6199 215.651 83.7943 228.78 107.639L415.773 447.247C428.816 470.933 412.973 500.908 387.417 500.908Z"
                        fill="currentColor"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_21_2"
                        x="260.44"
                        y="0.0914917"
                        width="758.6"
                        height="526.817"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="28" dy="20" />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_21_2"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_21_2"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter1_d_21_2"
                        x="0.0919189"
                        y="90.2385"
                        width="454.348"
                        height="436.67"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="28" dy="20" />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_21_2"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_21_2"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </>
    );
};

const Shield = (props: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg {...defaultProps} {...props}>
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
        </>
    );
};

const Pencil = (props: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg {...defaultProps} {...props}>
                <path d="M12 20h9" />
                <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
                <path d="m15 5 3 3" />
            </svg>
        </>
    );
};

const Zap = (props: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg {...defaultProps} {...props}>
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
        </>
    );
};
const Icons = {
    Sun,
    Moon,
    Monitor,
    Nord,
    Campsite,
    Shield,
    Pencil,
    Zap,
};

export default Icons;
