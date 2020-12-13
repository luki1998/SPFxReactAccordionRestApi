import * as React from 'react';
import { IAccordionProps } from './IAccordionProps';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
export interface ICustomRichText {
    Title: string;
    Description: string;
}
export interface IRichTextFieldWebPartState {
    item: ICustomRichText;
}
export default class Accordion extends React.Component<IAccordionProps, {}> {
    private onGetListItemsClicked;
    private onAddListItemClicked;
    private onUpdateListItemClicked;
    private onDeleteListItemClicked;
    render(): React.ReactElement<IAccordionProps>;
}
//# sourceMappingURL=Accordion.d.ts.map