import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AccordionWebPartStrings';
import Accordion from './components/Accordion';
import { IAccordionProps } from './components/IAccordionProps';

import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { IListItem } from '../../models';
import { sp } from "@pnp/sp/presets/all";




export interface IAccordionWebPartProps {
  description: string;
  listName: string;
}

export default class AccordionWebPart extends BaseClientSideWebPart<IAccordionWebPartProps> {

  private _listItems: IListItem[] = [];
  
  public render(): void {
    const element: React.ReactElement<IAccordionProps> = React.createElement(
      Accordion,
      {
        description: this.properties.description,
        listName: this.properties.listName,
        spListItems: this._listItems,
        onGetListItems: this._onGetListItems,
        onAddListItem: this._onAddListItem,
        onUpdateListItem: this._onUpdateListItem,
        onDeleteListItem: this._onDeleteListItem
      }
    );
    
    //Set listName default value to page title.
    if (this.properties.listName == "") {
      this.properties.listName = this.context.pageContext.web.title;
    } 
    

    ReactDom.render(element, this.domElement);
  }

    protected onInit(): Promise<void> {  
      return super.onInit().then(_ => {  
        sp.setup({  
            spfxContext: this.context  
        });  
      });  
  }

  private _onGetListItems = (): void => {
    this._getListItems()
      .then(response => {
        this._listItems = response;
        this.render();
      });
  }

  private _onAddListItem = (title: string, content: any): any => {
    this._addListItem(title, content)
      .then(() => {
        this._getListItems()
          .then(response => {
            this._listItems = response;
            this.render();
          });
      });
  }
  
  private _onUpdateListItem = (): void => {
    this._updateListItem()
      .then(() => {
        this._getListItems()
          .then(response => {
            this._listItems = response;
            this.render();
          });
      });
  }
  
  private _onDeleteListItem = (id: number): any => {
    this._deleteListItem(id)
      .then(() => {
        this._getListItems()
          .then(response => {
            this._listItems = response;
            this.render();
          });
      });
  }

  

  private _getListItems(): Promise<IListItem[]> {
    return this.context.spHttpClient.get(
      this.context.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('AccordionList')/items?$select=Id,Title,SPFxContent,SPFxSortOrder`, 
      SPHttpClient.configurations.v1)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.value;
      }) as Promise<IListItem[]>;
  }

  private _getItemEntityType(): Promise<string> {
    return this.context.spHttpClient.get(
        this.context.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('AccordionList')?$select=ListItemEntityTypeFullName`,
        SPHttpClient.configurations.v1)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.ListItemEntityTypeFullName;
      }) as Promise<string>;
  }
  
  private _addListItem(title: string, content: any): Promise<SPHttpClientResponse> {
    return this._getItemEntityType()
      .then(spEntityType => {
        const request: any = {};
        request.body = JSON.stringify({
          Title: title,
          SPFxContent: content,
          SPFxSortOrder: 1,
          '@odata.type': spEntityType
        });
  
        return this.context.spHttpClient.post(
          this.context.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('AccordionList')/items`,
          SPHttpClient.configurations.v1,
          request);
        }
      ) ;
  }

  private _updateListItem(): Promise<SPHttpClientResponse> {
    // get the first item
    return this.context.spHttpClient.get(
        this.context.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('AccordionList')/items?$select=Id,Title,SPFxContent,SPFxSortOrder&$orderby=ID desc&$top=1'`, 
        SPHttpClient.configurations.v1)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.value[0];
      })
      .then((listItem: IListItem) => {
        // update item
        listItem.Title = 'USA';
        // save it
        const request: any = {};
        request.headers = {
          'X-HTTP-Method': 'MERGE',
          'IF-MATCH': (listItem as any)['@odata.etag']
        };
        request.body = JSON.stringify(listItem);
  
        return this.context.spHttpClient.post(
          this.context.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('AccordionList')/items(${listItem.Id})`,
          SPHttpClient.configurations.v1,
          request);
      });
  }

  private _deleteListItem(id:number): Promise<SPHttpClientResponse> {
    // get the last item
    return this.context.spHttpClient.get(
        this.context.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('AccordionList')/items?$select=Id,Title&$filter=Id eq ${id}`, 
        SPHttpClient.configurations.v1)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.value[0];
      })
      .then((listItem: IListItem) => {
        const request: any = {};
        request.headers = {
          'X-HTTP-Method': 'DELETE',
          'IF-MATCH': '*'
        };
        request.body = JSON.stringify(listItem);
  
        return this.context.spHttpClient.post(
          this.context.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('AccordionList')/items(${listItem.Id})`,
          SPHttpClient.configurations.v1,
          request);
      });
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('listName', {
                  label: strings.ListNameFieldLabel,
                  
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
