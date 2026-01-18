export type EngineType = 'Innovation Sandboxes' | 'Commercialization Studios' | 'Workforce & Talent';

export type ProjectStatus = 'Active' | 'Pilot' | 'In Design';

export interface Project {
  id: string;
  name: string;
  engine: EngineType;
  primaryPartner: string;
  brief: string;
  partners: string[];
  status: ProjectStatus;
}
