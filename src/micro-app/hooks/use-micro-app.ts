import { GlobalData } from "@/generated/proto/global_data_pb";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { globalDataState } from "@/src/stores/global-data-atom";

export const useMicroApp = () => {
  const [_, setGlobalData] = useRecoilState(globalDataState);

  useEffect(() => {
    function globalDataListener(globalData: GlobalData.AsObject) {
      setGlobalData(globalData);
    }

    window.microApp?.addGlobalDataListener?.(globalDataListener, true);

    return () => {
      window.microApp?.removeGlobalDataListener?.(globalDataListener);
    };
  }, []);
};
