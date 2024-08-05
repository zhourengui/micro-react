import React, { useEffect } from "react";
import { useMicroAppDataHandler } from "./hooks";

interface MicroAppContextProviderProps {
  children: React.ReactNode;
}

export const MicroAppContextProvider: React.FC<MicroAppContextProviderProps> = (
  props
) => {
  const { microAppDataHandler, microAppGlobalDataHandler } =
    useMicroAppDataHandler();

  // 监听全局数据变化
  useEffect(() => {
    window.microApp?.addGlobalDataListener?.(microAppGlobalDataHandler, true);

    return () => {
      window.microApp?.removeGlobalDataListener?.(microAppGlobalDataHandler);
    };
  }, []);

  // 监听主应用传给当前应用的数据
  useEffect(() => {
    window?.microApp?.addDataListener?.(microAppDataHandler, true);

    return () => {
      window?.microApp?.removeDataListener?.(microAppDataHandler);
    };
  }, []);

  return props.children;
};
