import type { UUID } from 'crypto';
import type { EWindow } from '@/lib/types';

export interface ESession {
  title: string;
  windows: EWindow[];
  tabsNumber: number;
  dateSaved: number | undefined;
  dateModified: number | undefined;
  id: UUID | 'current';
  tags?: string;
}

export interface FilterOptions {
  query: string;
  default_tabs?: boolean;
}

export type Page = 'popup' | 'options' | 'discarded';

export type Icon =
  | 'default'
  | 'copy'
  | 'check'
  | 'save'
  | 'rename'
  | 'delete'
  | 'open'
  | 'close'
  | 'incognito'
  | 'window'
  | 'tab'
  | 'global'
  | 'extension'
  | 'history'
  | 'expand'
  | 'collapse'
  | 'tag'
  | 'untag'
  | 'search'
  | 'light'
  | 'dark'
  | 'settings'
  | 'donate';

export interface ENotification {
  type: 'info' | 'success' | 'warning' | 'error';
  msg: string;
  duration?: number;
}

export type URLFilterList = string[] | ['<all_urls>'] | undefined;

export interface ESettings {
  darkMode: boolean;
  popupView: boolean;
  selectionId: 'current' | UUID;
  discarded: boolean;
  urlFilterList: URLFilterList;
  autoSave: boolean;
  autoSaveMaxSessions: number;
  autoSaveTimer: number;
  tags: Record<
    string,
    {
      name?: string;
      bgColor: string;
      textColor: string;
    }
  >;
  doNotAskForTitle: boolean;
  excludePinned: boolean;
}
