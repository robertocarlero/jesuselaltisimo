import type { Colors } from "./types";

export const THEME_COLORS = {
  primary: {
    DEFAULT: "#FBE3BD",
    light: "#F5F0F6",
    tint: "#FFF8EB",
    shade: "#FBE3BD",
  },
  secondary: {
    DEFAULT: "#3C5954",
    light: "#F5FCFF",
    tint: "#4C6D6B",
    shade: "#2C3D37",
  },
  success: {
    DEFAULT: "#08875D",
    light: "#EDFDF8",
    tint: "#0FA372",
    shade: "#04724D",
  },
  warning: {
    DEFAULT: "#B25E09",
    light: "#FFF8EB",
    tint: "#DB7612",
    shade: "#96530F",
  },
  danger: {
    DEFAULT: "#E02D3C",
    light: "#FEF1F2",
    tint: "#F04351",
    shade: "#BA2532",
  },
  light: {
    DEFAULT: "#F4F9FC",
    tint: "#FFFFFF",
    shade: "#F1F6F9",
  },
  medium: {
    DEFAULT: "#A5B1B8",
    tint: "#E1EAEF",
    shade: "#454A4D",
  },
  dark: {
    DEFAULT: "#171419",
    tint: "#2e2c30",
    shade: "#141216",
  },
};

export const BG_COLORS_CLASSES: Record<Colors, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  light: "bg-light",
  medium: "bg-medium",
  dark: "bg-dark",
  white: "bg-white",
};

export const BG_COLORS_HOVER_CLASSES: Record<Colors, string> = {
  primary: "hover:bg-primary-tint",
  secondary: "hover:bg-secondary-tint",
  success: "hover:bg-success-tint",
  warning: "hover:bg-warning-tint",
  danger: "hover:bg-danger-tint",
  light: "hover:bg-light-tint",
  medium: "hover:bg-medium-tint",
  dark: "hover:bg-dark-tint",
  white: "hover:bg-white",
};

export const BG_COLORS_ACTIVE_CLASSES: Record<Colors, string> = {
  primary: "active:bg-primary-shade",
  secondary: "active:bg-secondary-shade",
  success: "active:bg-success-shade",
  warning: "active:bg-warning-shade",
  danger: "active:bg-danger-shade",
  light: "active:bg-light-shade",
  medium: "active:bg-medium-shade",
  dark: "active:bg-dark-shade",
  white: "active:bg-white",
};

export const TEXT_COLORS_CLASSES: Record<Colors, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
  light: "text-light",
  medium: "text-medium",
  dark: "text-dark",
  white: "text-white",
};
