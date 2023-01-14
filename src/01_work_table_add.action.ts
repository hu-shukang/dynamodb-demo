import { PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { docClient } from './utils/dynamodb.util';

class WorkTableAddAction {
  public async action() {
    const input: PutCommandInput = {
      TableName: 'DynamoDB-Demo-WorkTable',
      Item: {
        userId: 'A001',
        date: '2023-02-01',
        startTime: '09:00',
        endTime: '18:00',
        break: 60,
      },
    };
    const result = await docClient.send(new PutCommand(input));
    return result;
  }
}

export const workTableAddAction = new WorkTableAddAction();
