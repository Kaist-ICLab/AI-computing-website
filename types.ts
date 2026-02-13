export interface Department {
  id: string;
  name: string;
  description: string;
  iconName: 'cpu' | 'server' | 'zap' | 'scale';
}

export interface RequirementItem {
  category: string;
  credits: number;
  details: string[];
}

export enum DegreeType {
  BACHELOR = 'Bachelor',
  MASTER = 'Master',
  PHD = 'PhD'
}