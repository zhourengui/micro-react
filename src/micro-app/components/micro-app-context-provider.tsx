import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
import { microAppCommunicationState } from "@/src/recoil/micro-app-communication-atom";
import { MicroAppCommunication } from "@/generated/proto/micro_app_communication_pb";

interface MicroAppContextProviderProps {
  children: React.ReactNode;
}

export const MicroAppContextProvider: React.FC<MicroAppContextProviderProps> = (
  props
) => {
  const [_, setMicroAppCommunication] = useRecoilState(
    microAppCommunicationState
  );

  // 监听全局数据变化
  useEffect(() => {
    function globalDataListener(payload: MicroAppCommunication) {
      setMicroAppCommunication((prevState) => ({
        ...prevState,
        [payload.channel]: payload,
      }));
    }

    window.microApp?.addGlobalDataListener?.(globalDataListener, true);

    return () => {
      window.microApp?.removeGlobalDataListener?.(globalDataListener);
    };
  }, []);

  // 监听主应用传给当前应用的数据
  useEffect(() => {
    function dataListener(payload: MicroAppCommunication) {
      setMicroAppCommunication((prevState) => ({
        ...prevState,
        [payload.channel]: payload,
      }));
    }

    window?.microApp?.addDataListener?.(dataListener, true);

    return () => {
      window?.microApp?.removeDataListener?.(dataListener);
    };
  }, []);

  return props.children;
};
