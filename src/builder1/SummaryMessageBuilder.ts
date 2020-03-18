import { SummaryModel } from './SummaryModel';
export class SummaryMessageBuilder {

    private column1: string;
    private column2: string;
    private column3: string;

    public withColumn1Msg(column1Msg: string): SummaryMessageBuilder {
        this.column1 = column1Msg;
        return this;
    }

    public withColumn2Msg(column2Msg: string): SummaryMessageBuilder {
        this.column2 = column2Msg;
        return this;
    }

    public withColumn3Msg(column3Msg: string): SummaryMessageBuilder {
        this.column3 = column3Msg;
        return this;
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

    public build(): SummaryModel {
        return new SummaryModel(this);
    }


}