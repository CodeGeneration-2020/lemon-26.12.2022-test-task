import {
  IDashboard,
  IItemsCards,
  TStatusToDO,
  TTypeToDO,
} from '../../home/types';
import { COLORS } from '../../theme';

import Todo from '../../../assets/images/todo.svg';
import InProgress from '../../../assets/images/inProgress.svg';
import Completed from '../../../assets/images/completed.svg';
import AvatarSecond from '../../../assets/images/avatarSecond.svg';
import ToDoTaskF from '../../../assets/images/todo_task_f.svg';
import ToDoTaskS from '../../../assets/images/todo_task_s.svg';
import AvatarTF from '../../../assets/images/avatar_t_f.svg';
import AvatarTS from '../../../assets/images/avatar_t_s.svg';
import AvatarTH from '../../../assets/images/avatar_t_th.svg';
import AvatarFO from '../../../assets/images/avatar_t_fo.svg';
import AvatarFI from '../../../assets/images/avatar_t_fi.svg';

export const DASHBOARD: IDashboard[] = [
  {
    title: 'TODO',
    src: Todo,
    color: COLORS.black,
  },
  {
    title: 'IN PROGRESS',
    src: InProgress,
    color: COLORS.primary,
  },
  {
    title: 'COMPLETED',
    src: Completed,
    color: COLORS.green,
  },
];

export const ITEMS_CARDS: IItemsCards[] = [
  {
    id: 1,
    title: 'UX Adjustments',
    desc: 'Make UI/UX revisions for the project management dashboard on Figma.',
    status: 'TODO',
    epic: 'FLYTE-1',
    type: 'Research',
    images: [AvatarTF, AvatarTS],
    messageCount: 3,
  },
  {
    id: 2,
    title: 'Moodboards',
    src: ToDoTaskS,
    status: 'TODO',
    epic: 'FLYTE-2',
    type: 'UI Design',
    images: [AvatarTH, AvatarFO],
    messageCount: 2,
    linkCount: 2,
    date: 'Nov 23',
  },
  {
    id: 3,
    title: 'Dashboard Design',
    src: ToDoTaskF,
    status: 'IN PROGRESS',
    epic: 'FLYTE-3',
    type: 'UI Design',
    images: [AvatarTH, AvatarFI, AvatarFO],
    linkCount: 1,
    messageCount: 5,
    doneCount: '4 / 8',
    date: 'Jun 20',
  },
  {
    id: 4,
    title: 'Design System',
    desc: 'Create a consistent look and feel both on web and mobile',
    status: 'IN PROGRESS',
    epic: 'FLYTE-4',
    type: 'UI Design',
    images: [AvatarTH, AvatarFI, AvatarFO, AvatarSecond],
    doneCount: '4 / 8',
    messageCount: 12,
    date: 'May 20',
  },
  {
    id: 5,
    title: 'Presentation',
    desc: 'Help business to clearly define their anuual e-commerce digital strategy by creating a high-level plan.',
    status: 'COMPLETED',
    epic: 'FLYTE-5',
    type: 'Planning',
    images: [AvatarFO],
    messageCount: 11,
    date: 'Nov 23',
  },
  {
    id: 6,
    title: 'Brainstorming',
    status: 'COMPLETED',
    epic: 'FLYTE-6',
    type: 'Research',
    images: [AvatarTH, AvatarFI],
    messageCount: 12,
    date: 'Nov 23',
  },
];

export const STATUSES: TStatusToDO[] = ['COMPLETED', 'IN PROGRESS', 'TODO'];
export const TYPES: TTypeToDO[] = ['Research', 'UI Design', 'Planning'];
