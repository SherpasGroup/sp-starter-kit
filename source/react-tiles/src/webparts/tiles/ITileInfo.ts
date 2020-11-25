export interface ITileInfo {
  title: string;
  description: string;
  url: string;
  icon: string;
  target: LinkTarget;
  backgroundColor: string;
  backgroundHoverColor: string;
}

export enum LinkTarget {
  parent = '',
  blank = '_blank'
}
