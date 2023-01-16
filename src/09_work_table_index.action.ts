import { QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';
import { docClient } from './utils/dynamodb.util';

class WorkTableIndexAction {
  public async action() {
    const input: QueryCommandInput = {
      TableName: 'DynamoDB-Demo-WorkTable',
      IndexName: 'StartTimeIndex',
      KeyConditionExpression: 'begins_with(#date, :date)',
      ExpressionAttributeNames: {
        '#date': 'date',
      },
      ExpressionAttributeValues: {
        ':date': '2023-01',
      },
    };
    const result = await docClient.send(new QueryCommand(input));
    return result;
  }
}

export const workTableIndexAction = new WorkTableIndexAction();
