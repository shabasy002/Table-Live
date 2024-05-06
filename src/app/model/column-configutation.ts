export interface ColumnConfiguration {
	columnDef: string;
	title: string;
    cell:any;
	displayStyle: DisplayStyle
}

export enum DisplayStyle {
	string = 'string',
	number = 'number',
	boolean = 'boolean',
	booleanIcon = 'booleanIcon',
	rationCardType = 'rationCardType'
}