import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IAccordionWebPartProps {
    description: string;
    listName: string;
}
export default class AccordionWebPart extends BaseClientSideWebPart<IAccordionWebPartProps> {
    private _listItems;
    render(): void;
    protected onInit(): Promise<void>;
    private _onGetListItems;
    private _onAddListItem;
    private _onUpdateListItem;
    private _onDeleteListItem;
    private _getListItems;
    private _getItemEntityType;
    private _addListItem;
    private _updateListItem;
    private _deleteListItem;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=AccordionWebPart.d.ts.map