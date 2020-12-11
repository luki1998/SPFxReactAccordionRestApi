import {
  ButtonClickedCallback,
  IListItem
} from '../../../models';

export interface IAccordionProps {
  spListItems: IListItem[];
  onGetListItems?: ButtonClickedCallback;
  onAddListItem?: ButtonClickedCallback;
  onUpdateListItem?: ButtonClickedCallback;
  onDeleteListItem?: ButtonClickedCallback;
  listName: string;
  description: string;

}
