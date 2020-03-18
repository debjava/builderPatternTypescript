import { ISummaryMessages } from "./ISummaryMessages";

export class MessageBuilder {

    private column1: string;
    private column2: string;
    private column3: string;

    public withColumn1Msg(column1Msg: string): MessageBuilder {
        this.column1 = column1Msg;
        return this;
    }

    public withColumn2Msg(column2Msg: string): MessageBuilder {
        this.column2 = column2Msg;
        return this;
    }

    public withColumn3Msg(column3Msg: string): MessageBuilder {
        this.column3 = column3Msg;
        return this;
    }

    public build(): ISummaryMessages {
        return {
          column1: this.column1,
          column2: this.column2,
          column3: this.column3
        };
      }

}