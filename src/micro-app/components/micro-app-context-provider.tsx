import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
import {
  microAppCommunicationState,
  MicroAppCommunicatioPayload,
} from "@/src/recoil/micro-app-communication-atom";

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
    function globalDataListener(payload: MicroAppCommunicatioPayload) {
      setMicroAppCommunication((prevState) => {
        return {
          ...prevState,
          [payload.channel]: payload,
        };
      });
    }

    window.microApp?.addGlobalDataListener?.(globalDataListener, true);

    return () => {
      window.microApp?.removeGlobalDataListener?.(globalDataListener);
    };
  }, []);

  // 监听主应用传给当前应用的数据
  useEffect(() => {
    function dataListener(payload: MicroAppCommunicatioPayload) {
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
