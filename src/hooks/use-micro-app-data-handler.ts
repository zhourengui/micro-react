import { MicroAppCommunicationChannel } from "@/generated/proto/element";
import { MicroAppGlobalDataPayload } from "@/generated/proto/micro_app_global_data_payload";
import { MicroAppSinigleDataPayload } from "@/generated/proto/micro_app_single_data_payload";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { globalDataState } from "../stores";

export const useMicroAppDataHandler = () => {
  const [_, setGlobalData] = useRecoilState(globalDataState);

  const microAppDataHandler = useCallback((p: MicroAppSinigleDataPayload) => {
    const { payload, channel } = p;
    switch (channel) {
      case MicroAppCommunicationChannel.MAIN_REACT_CHANNEL1: {
        alert(
          `[React] 接收到主应用的数据: ${JSON.stringify(payload, null, 2)}`
        );
        break;
      }
    }
  }, []);

  const microAppGlobalDataHandler = useCallback(
    (payload: MicroAppGlobalDataPayload) => {
      setGlobalData(payload);
    },
    []
  );

  return { microAppDataHandler, microAppGlobalDataHandler };
};
