import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  estimation?: IntNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
