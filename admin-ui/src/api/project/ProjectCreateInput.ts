import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  description?: string | null;
  name?: string | null;
  owner: UserWhereUniqueInput;
  startDate?: Date | null;
};
