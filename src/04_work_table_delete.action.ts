import { DeleteCommand, DeleteCommandInput } from '@aws-sdk/lib-dynamodb';
import { docClient } from './utils/dynamodb.util';

class WorkTableDeleteAction {
  public async action() {
    const input: DeleteCommandInput = {
      TableName: 'DynamoDB-Demo-WorkTable',
      Key: {
        userId: 'A001',
        date: '2023-01-01',
      },
    };
    const result = await docClient.send(new DeleteCommand(input));
    return result;
  }
}

export const workTableDeleteAction = new WorkTableDeleteAction();
