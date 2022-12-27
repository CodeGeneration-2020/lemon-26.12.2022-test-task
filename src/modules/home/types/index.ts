export interface IDashboard {
  title: TStatusToDO;
  src: string;
  color: string;
}

export interface IItemsCards {
  id: number;
  title: string;
  epic: string;
  src?: string;
  desc?: string;
  type: TTypeToDO;
  images: string[];
  messageCount?: number;
  linkCount?: number;
  doneCount?: number | string;
  date?: string;
  status: TStatusToDO;
}

export type TTypeToDO = 'Research' | 'UI Design' | 'Planning';
export type TStatusToDO = 'COMPLETED' | 'IN PROGRESS' | 'TODO';
