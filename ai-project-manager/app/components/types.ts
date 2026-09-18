export type IconName =
  | "grid"
  | "folder"
  | "calendar"
  | "search"
  | "bell"
  | "arrow"
  | "plus"
  | "check"
  | "clock"
  | "alert"
  | "more";

export type Project = {
  name: string;
  description: string;
  color: string;
  progress: number;
  due: string;
  status: "On track" | "At risk";
};

export type NavigationItem = {
  label: string;
  icon: IconName;
  active?: boolean;
};

export type Stat = {
  label: string;
  value: string;
  detail: string;
  icon: IconName;
  tone: string;
};
