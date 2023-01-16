import { workTableAddAction } from './01_work_table_add.action';
import { workTableUpdateAction } from './02_work_table_update.action';
import { workTableMultiUpdateAction } from './03_work_table_multi_update.action';
import { workTableDeleteAction } from './04_work_table_delete.action';
import { workTableGetAction } from './05_work_table_get.action';
import { workTableQueryAction } from './06_work_table_query.action';
import { workTableScanAction } from './07_work_table_scan.action';
import { workTableTransactAction } from './08_work_table_transact.action';
import { workTableIndexAction } from './09_work_table_index.action';
import { testDataAction } from './99_test_data.action';

const actionMap = {
  '01': workTableAddAction,
  '02': workTableUpdateAction,
  '03': workTableMultiUpdateAction,
  '04': workTableDeleteAction,
  '05': workTableGetAction,
  '06': workTableQueryAction,
  '07': workTableScanAction,
  '08': workTableTransactAction,
  '09': workTableIndexAction,
  '99': testDataAction,
};

type ActionName = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09';

const main = async () => {
  const actionName = process.argv[2] as ActionName;
  const result = await actionMap[actionName].action();
  console.log(result);
};

main();
