import { MicroAppSinigleDataPayload } from "@/generated/proto/micro_app_single_data_payload";

type MicroAppDispatch = (payload: unknown[]) => void;

export const useMicroApp = () => {
  const appName = window?.microApp?.appName;
  function forceDispatch(
    payload: MicroAppSinigleDataPayload,
    nextStep?: MicroAppDispatch
  ) {
    window?.microApp?.forceDispatch({ ...payload, appName }, nextStep);
  }

  return {
    forceDispatch,
  };
};
