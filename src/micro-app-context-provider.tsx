import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
import { globalDataState } from "./stores";
import { MicroAppGlobalDataPayload } from "@/generated/proto/micro_app_global_data_payload";
import { MicroAppSinigleDataPayload } from "@/generated/proto/micro_app_single_data_payload";

interface MicroAppContextProviderProps {
  children: React.ReactNode;
}

export const MicroAppContextProvider: React.FC<MicroAppContextProviderProps> = (
  props
) => {
  const [_, setGlobalData] = useRecoilState(globalDataState);

  // 监听全局数据变化
  useEffect(() => {
    function globalDataListener(payload: MicroAppGlobalDataPayload) {
      setGlobalData(payload);
    }

    window.microApp?.addGlobalDataListener?.(globalDataListener, true);

    return () => {
      window.microApp?.removeGlobalDataListener?.(globalDataListener);
    };
  }, []);

  // 监听主应用传给当前应用的数据
  useEffect(() => {
    function dataListener(payload: MicroAppSinigleDataPayload) {
      alert(`[React] 接收到主应用的数据: ${JSON.stringify(payload, null, 2)}`);
    }

    window?.microApp?.addDataListener?.(dataListener, true);

    return () => {
      window?.microApp?.removeDataListener?.(dataListener);
    };
  }, []);

  return props.children;
};
