export interface ColumnConfiguration {
  
	columnDef: string;
	title: string;
    //cell:any;
    hide?: boolean;
    sortable?: boolean;
	displayStyle: DisplayStyle
}

export enum DisplayStyle {
	string = 'string',
	number = 'number',
	boolean = 'boolean',
	booleanIcon = 'booleanIcon',
	rationCardType = 'rationCardType'
}

export enum RationCardType {
	White = 'white',
	Green = 'green',
	Blue = 'blue'
}

export type SortOrder = 'ASC' | 'DESC';
export interface SelectedSort{
	columnDef:string;
	order:SortOrder;
}