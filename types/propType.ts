export type MaskImageProps = {
  src: string;
};
export type ProgressProps = {
  title: string;
  value: number;
};
export type ProjectCategory =
  | "All"
  | "UI/UX"
  | "Web Design"
  | "App Design"
  | "Graphic Design";

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
};
