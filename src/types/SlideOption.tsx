export interface SildeOptionProps {
  SlideOptionTitle: string;
  LeftOption: string;
  RightOption: string;
  value?: number;
  mode: SlideMode;
}

export enum SlideMode {
  CREATE = 'create',
  EDIT = 'edit',
  VIEW = 'view',
}
