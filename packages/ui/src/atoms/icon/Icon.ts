import {icons} from "./icons";

export interface IconProps {
  color?: ColorNames | string
  name: IconNames
  size?: IconSize;
}

export type ColorNames = "primary" | "secondary" | "success" | "danger" | "warn"  | "text"  | "text-inverse"
export type IconNames = keyof typeof icons;
export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | string | number;