import { TagsViewStateType } from './modules/tagsView';
import { PermissionStateType } from './modules/permission';

export interface GetterTreeOptionType {
  tagsView: TagsViewStateType;
  permission: PermissionStateType;
}
