import { QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';
import { docClient } from './utils/dynamodb.util';

class WorkTableQueryAction {
  /**
   * 検索オペレーション
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html
   *
   * @returns
   */
  public async action() {
    const queryInput: QueryCommandInput = {
      TableName: 'DynamoDB-Demo-WorkTable',
      KeyConditionExpression: 'userId = :userId and begins_with(#date, :date)',
      ExpressionAttributeNames: {
        '#date': 'date',
      },
      ExpressionAttributeValues: {
        ':userId': 'A001',
        ':date': '2023-01',
      },
    };
    const queryResult = await docClient.send(new QueryCommand(queryInput));
    return queryResult;
  }
}

export const workTableQueryAction = new WorkTableQueryAction();
