import { SummaryMessageBuilder } from './builder1/SummaryMessageBuilder';
import { SummaryModel } from './builder1/SummaryModel';
import { ISummaryMessages } from './builder2/ISummaryMessages';
import { MessageBuilder } from './builder2/MessageBuilder';

/**
 *
 *
 * @export
 * @class Test1
 */
export class Test1 {

    public showBuilderTyp1(): void {
        const summaryModel: SummaryModel = new SummaryMessageBuilder()
            .withColumn1Msg("Column-1-Msg")
            .withColumn3Msg("Column-3-Msg")
            .build();
        console.log("Builder Patter Type-1 Column 1: ", summaryModel.$column1);
        console.log("Builder Patter Type-1 Column-2: ", summaryModel.$column3);
    }

    public showBuilderType2(): void {
        const summaryMsg: ISummaryMessages = new MessageBuilder()
            .withColumn1Msg("column msg 1")
            .withColumn2Msg("column msg 2")
            .build();
        console.log("Builder Patter Type-2 Column 1: ", summaryMsg.column1);
        console.log("Builder Patter Type-2 Column-2: ", summaryMsg.column2);
    }
}



const test1 = new Test1();
test1.showBuilderTyp1();
test1.showBuilderType2();