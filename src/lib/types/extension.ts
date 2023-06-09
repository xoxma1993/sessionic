import type { UUID } from 'crypto';
import type { Window } from './browser';

export interface Session {
  title: string;
  windows: Window[];
  tabsNumber: number;
  dateSaved: number;
  dateModified: number;
  id: UUID;
}

export interface FilterOptions {
  query?: string;
  default_tabs?: boolean;
}

export type Page = 'popup' | 'options';

export type Icon =
  | 'default'
  | 'session'
  | 'windowon'
  | 'windowoff'
  | 'options'
  | 'save'
  | 'delete'
  | 'search'
  | 'clear'
  | 'open'
  | 'redo'
  | 'undo'
  | 'dark'
  | 'light';