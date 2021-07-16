import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  owner: UserWhereUniqueInput;
  startDate?: Date | null;
};
