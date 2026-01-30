
export interface ProjectLink {
  label: string;
  url: string;
}

export interface Contribution {
  planning: number;   // 기획
  production: number; // 제작
  editing: number;    // 편집
  filming: number;    // 촬영
}

export interface ProjectItem {
  title: string;
  description: string;
  planningIntent?: string;
  fullDescription?: string;
  modalImageUrl?: string;
  links?: ProjectLink[];
  contribution?: Contribution;
}

export interface WorkCategory {
  id: string;
  title: string;
  subtitle: string;
  items: ProjectItem[];
  imageUrl: string;
}
