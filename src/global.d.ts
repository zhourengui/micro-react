/// <reference path="../generated/proto/global_data_pb.d.ts" />

interface MicroApp {
  addGlobalDataListener: (
    listener: (data: GlobalData.AsObject) => void,
    autoTrigger: boolean
  ) => void;
  removeGlobalDataListener: (
    listener: (data: GlobalData.AsObject) => void
  ) => void;
}

interface Window {
  unmount: VoidFunction;
  microApp: MicroApp;
}
