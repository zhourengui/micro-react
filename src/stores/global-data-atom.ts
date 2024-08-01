import { GlobalData } from "@/generated/proto/global_data_pb";
import { atom } from "recoil";

export const globalDataState = atom<GlobalData.AsObject>({
  key: "globalDataState",
  default: {
    counter: 0,
  },
});
