import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 24, className, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
    ...props,
  };
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.25" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
    </svg>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 13l2.5 2.5a2.1 2.1 0 0 0 3 0L18 11" />
      <path d="M4 12l3-3 3 2.5 2-2 2.5 2.5" />
      <path d="M14.5 8.5l1.5-1.5a2 2 0 0 1 2.8 0L20 8.7" />
      <path d="M3.5 14.5 6 17a2.2 2.2 0 0 0 3.1 0l.4-.4" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 19a6.5 6.5 0 0 1 13 0" />
      <circle cx="17" cy="9" r="2.25" />
      <path d="M15.5 19a5 5 0 0 1 6 0" />
    </svg>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 6.5a4 4 0 0 0-5.4 5.4L4 17v3h3l5.1-5.1a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5z" />
    </svg>
  );
}

export function IconMegaphone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 11v2a2 2 0 0 0 2 2h1l7 3.5V5.5L6.5 9h-1a2 2 0 0 0-2 2z" />
      <path d="M15.5 9.5c1.2.8 1.2 4.2 0 5" />
      <path d="M6.5 15v2.5a1.5 1.5 0 0 0 2.6 1" />
    </svg>
  );
}

export function IconSprout(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21V11" />
      <path d="M12 11c0-4 3-7 7-7-1 4-4 7-7 7z" />
      <path d="M12 14c0-3.5-2.5-6-6-6 1 3.2 3 5.2 6 6z" />
    </svg>
  );
}

export function IconCompass(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5.5-5.5 2 2-5.5 5.5-2z" />
    </svg>
  );
}

export function IconGraduation(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m3 9 9-4.5L21 9l-9 4.5L3 9z" />
      <path d="M7 11.2v4.3c0 .8 2.2 2.5 5 2.5s5-1.7 5-2.5v-4.3" />
      <path d="M21 9v6" />
    </svg>
  );
}

export function IconTree(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21v-5" />
      <path d="M8 21h8" />
      <path d="M12 3 6.5 11h3L5.5 17h13L14.5 11h3L12 3z" />
    </svg>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 21h16" />
      <path d="M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16" />
      <path d="M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
    </svg>
  );
}

export function IconPlane(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 12 3.5 18.5l2.5-6.5L3.5 5.5 21 12z" />
      <path d="M10 13.5 14 12l-4-1.5" />
    </svg>
  );
}

export function IconShoppingBag(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 8.5h11l1 12h-13l1-12z" />
      <path d="M9 8.5a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function IconStadium(props: IconProps) {
  return (
    <svg {...base(props)}>
      <ellipse cx="12" cy="8" rx="8" ry="3.5" />
      <path d="M4 8v5c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5V8" />
      <path d="M4 13c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5" />
    </svg>
  );
}

export function IconStore(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 10.5 5.5 5h13L20 10.5" />
      <path d="M4 10.5h16v9.5H4z" />
      <path d="M9.5 20v-5.5h5V20" />
      <path d="M4 10.5c0 1.2.9 2 2 2s2-.8 2-2c0 1.2.9 2 2 2s2-.8 2-2c0 1.2.9 2 2 2s2-.8 2-2c0 1.2.9 2 2 2s2-.8 2-2" />
    </svg>
  );
}

export function IconInfo(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3 1.4 4.2L17.5 8.5 13.4 9.8 12 14l-1.4-4.2L6.5 8.5l4.1-1.3L12 3z" />
      <path d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M19 13.5A7.5 7.5 0 1 1 10.5 5 6 6 0 0 0 19 13.5z" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 7h15M4.5 12h15M4.5 17h15" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function IconDot(props: IconProps) {
  return (
    <svg {...base({ ...props, size: props.size ?? 8 })}>
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconArrowDown(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function IconChevronLeft(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m15 6-6 6 6 6" />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconHouse(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export function IconPerson(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5 19.5a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function IconBell(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 9.5a5.5 5.5 0 0 1 11 0c0 4 1.5 5.5 1.5 5.5H5s1.5-1.5 1.5-5.5z" />
      <path d="M10 18.5a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconMessage(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 18.5 7.2 16H18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11.5z" />
    </svg>
  );
}

export function IconSend(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 11.5 20 4l-5.5 16-2.8-6.2L4 11.5z" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3.5 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.8 7.2 18.4l.9-5.4-3.9-3.8 5.4-.8L12 3.5z" />
    </svg>
  );
}

export type IconName =
  | "mapPin"
  | "calendar"
  | "handshake"
  | "users"
  | "wrench"
  | "megaphone"
  | "sprout"
  | "compass"
  | "graduation"
  | "tree"
  | "building"
  | "plane"
  | "shoppingBag"
  | "stadium"
  | "store"
  | "info"
  | "sparkles"
  | "check";

const ICONS: Record<IconName, (props: IconProps) => ReactElement> = {
  mapPin: IconMapPin,
  calendar: IconCalendar,
  handshake: IconHandshake,
  users: IconUsers,
  wrench: IconWrench,
  megaphone: IconMegaphone,
  sprout: IconSprout,
  compass: IconCompass,
  graduation: IconGraduation,
  tree: IconTree,
  building: IconBuilding,
  plane: IconPlane,
  shoppingBag: IconShoppingBag,
  stadium: IconStadium,
  store: IconStore,
  info: IconInfo,
  sparkles: IconSparkles,
  check: IconCheck,
};

export function Icon({ name, ...props }: IconProps & { name: IconName }) {
  const Cmp = ICONS[name];
  return <Cmp {...props} />;
}
