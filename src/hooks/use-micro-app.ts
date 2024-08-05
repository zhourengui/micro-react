import { SingleDataPayload } from "../interfaces";

type MicroAppDispatch = (payload: unknown[]) => void;

export const useMicroApp = () => {
  const appName = window?.microApp?.appName;
  function forceDispatch(
    payload: SingleDataPayload,
    nextStep?: MicroAppDispatch
  ) {
    window?.microApp?.forceDispatch({ ...payload, appName }, nextStep);
  }

  return {
    forceDispatch,
  };
};
