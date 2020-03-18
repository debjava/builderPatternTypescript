import { SummaryMessageBuilder } from "./SummaryMessageBuilder";

export class SummaryModel {

    private column1: string;
    private column2: string;
    private column3: string;

    constructor(msgBuilder: SummaryMessageBuilder) {
        this.column1 = msgBuilder.$column1;
        this.column2 = msgBuilder.$column2;
        this.column3 = msgBuilder.$column3;
    }

	public get $column1(): string {
		return this.column1;
    }
    
	public get $column2(): string {
		return this.column2;
	}

	public get $column3(): string {
		return this.column3;
	}

    
}