/// <reference path="../generated/proto/global_data_pb.ts" />
/// <reference path="../generated/proto/micro_app_communication_pb.ts" />

interface MicroApp {
  addGlobalDataListener: (
    listener: (data: GlobalData) => void,
    autoTrigger?: boolean
  ) => void;

  removeGlobalDataListener: (listener: (data: GlobalData) => void) => void;

  addDataListener: (
    listener: (data: MicroAppCommunication) => void,
    autoTrigger?: boolean
  ) => void;

  removeDataListener: (listener: (data: MicroAppCommunication) => void) => void;
}

interface Window {
  unmount: VoidFunction;
  microApp: MicroApp;
}
