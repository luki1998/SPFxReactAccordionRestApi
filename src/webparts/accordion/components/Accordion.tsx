import * as React from 'react';
import styles from './Accordion.module.scss';
import { IAccordionProps } from './IAccordionProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

export interface ICustomRichText {  
  Title: string;  
  Description: string;  
}  
export interface IRichTextFieldWebPartState {  
  item: ICustomRichText;  
}

const modules = {  
  toolbar: [  
      [{  
          'header': [1, 2, 3, false]  
      }],  
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],  
      [{  
          'color': []  
      }, {  
          'background': []  
      }],  
      [{  
          'list': 'ordered'  
      }, {  
          'list': 'bullet'  
      }, {  
          'indent': '-1'  
      }, {  
          'indent': '+1'  
      }],  
      ['link', 'image', 'video'],  
      ['clean']  
  ],  
};  
const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video', 'background', 'color'];

export default class Accordion extends React.Component<IAccordionProps, {}> {
  
    private onGetListItemsClicked = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
  
    this.props.onGetListItems();
    }

    private onAddListItemClicked = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      console.log(event.currentTarget.querySelector(".ql-editor").innerHTML);
      let itemTitle: any = event.currentTarget.CurrentTitle.value;
      let itemContent: any = String(event.currentTarget.querySelector(".ql-editor").innerHTML);
      this.props.onAddListItem(itemTitle, itemContent);
    }
    
    private onUpdateListItemClicked = (event: React.MouseEvent<HTMLAnchorElement>): void => {
      event.preventDefault();
    
      this.props.onUpdateListItem();
    }
    
    private onDeleteListItemClicked = (event: React.MouseEvent<HTMLAnchorElement>): void => {
      event.preventDefault();
      
      this.props.onDeleteListItem(parseInt(event.currentTarget.id));
    }
  
  public render(): React.ReactElement<IAccordionProps> {
    
    return (
      <div className={ styles.accordion }>
        
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>

            

            <form onSubmit={this.onAddListItemClicked}>
                <p>Title</p>
                <input
                  type='text'
                  name='CurrentTitle'
                />
                <p>Content</p>

                <ReactQuill theme="snow"    
                modules={modules}    
                formats={formats}         
                ></ReactQuill>

                <input type='submit' />
                {/* <a href="#" className={ styles.button } onClick={ this.onAddListItemClicked }>
                  <span className={ styles.label }>Add List Item</span>
                </a> */}
              </form>
        

              <p className={ styles.title }>SharePoint Content!</p>
              <a href="#" className={ styles.button } onClick={ this.onGetListItemsClicked }>
                <span className={ styles.label }>Get Counties</span>
              </a>
              
              <a href="#" className={ styles.button } onClick={ this.onUpdateListItemClicked }>
                <span className={ styles.label }>Update List Item</span>
              </a>
            </div>
          </div>

          <div className={ styles.row }>
            <ul className={ styles.list }>
              { this.props.spListItems &&
                this.props.spListItems.map((list) =>
                  <li key={list.Id} className={styles.item}>
                    <div style={{ marginRight: "30px" }}>
                    <strong>Id:</strong> {list.Id}, <strong>Title:</strong> {list.Title} <strong>Content</strong> <div dangerouslySetInnerHTML={{__html: list.SPFxContent}}></div>
                    </div>
                    <a href="#" className={ styles.button } id= {list.Id} onClick={ this.onDeleteListItemClicked }>
                      <span className={ styles.label }>Delete List Item</span>
                    </a>
                  </li>
                )
              }
            </ul>
          </div>

        </div>
        
      </div>
    );
  }
}
