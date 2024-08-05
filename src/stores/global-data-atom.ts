import { atom } from "recoil";
import { GlobalDataPayload } from "../interfaces";

export const globalDataState = atom<GlobalDataPayload>({
  key: "globalDataState",
  default: {},
});
