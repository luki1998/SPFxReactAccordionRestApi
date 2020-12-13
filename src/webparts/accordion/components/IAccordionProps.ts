import {
  ButtonClickedCallback,
  ButtonClickedCallbackDelete,
  ButtonClickedCallbackAdd,
  IListItem
} from '../../../models';

export interface IAccordionProps {
  spListItems: IListItem[];
  onGetListItems?: ButtonClickedCallback;
  onAddListItem(title: string, content: any): ButtonClickedCallbackAdd;
  onUpdateListItem?: ButtonClickedCallback;
  onDeleteListItem(id: number): ButtonClickedCallbackDelete;
  listName: string;
  description: string;

}
