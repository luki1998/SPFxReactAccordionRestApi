import { ButtonClickedCallback } from './ButtonClickedCallback';
import { ButtonClickedCallbackDelete } from './ButtonClickedCallback';
import { ButtonClickedCallbackAdd } from './ButtonClickedCallback';
export type ButtonClickedCallback = () => void;
export type ButtonClickedCallbackDelete = (id: number)  => void;
export type ButtonClickedCallbackAdd = (title: string, content: any)  => void;