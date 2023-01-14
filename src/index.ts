import { workTableAddAction } from './01_work_table_add.action';
import { workTableUpdateAction } from './02_work_table_update.action';
import { workTableMultiUpdateAction } from './03_work_table_multi_update.action';
import { workTableDeleteAction } from './04_work_table_delete.action';
import { workTableGetAction } from './05_work_table_get.action';
import { workTableQueryAction } from './06_work_table_query.action';
import { workTableScanAction } from './07_work_table_scan.action';

const actionMap = {
  workTableAdd: workTableAddAction,
  workTableUpdate: workTableUpdateAction,
  workTableMultiUpdate: workTableMultiUpdateAction,
  workTableDelete: workTableDeleteAction,
  workTableGet: workTableGetAction,
  workTableQuery: workTableQueryAction,
  workTableScan: workTableScanAction,
};

type ActionName =
  | 'workTableAdd'
  | 'workTableUpdate'
  | 'workTableMultiUpdate'
  | 'workTableDelete'
  | 'workTableGet'
  | 'workTableQuery'
  | 'workTableScan';

const main = async () => {
  const actionName = process.argv[2] as ActionName;
  const result = await actionMap[actionName].action();
  console.log(result);
};

main();
