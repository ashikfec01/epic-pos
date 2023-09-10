export type TagItem = {
  code: string;

  label: {
    zh_CN: string;
    en_US: string;
  };
  path: string;
  closable: boolean;
};

export interface TagState {
  tags: TagItem[];
  activeTagId: TagItem['path'];
}
