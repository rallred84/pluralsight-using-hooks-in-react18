import { useEffect, useState } from "react";
import DemoApp from "./demoapp";

const localStateValues = [];
let localStateValueIndex = 0;
const Demo = () => {
  function useMyState(initial) {
    const localStateValueIndexLocal = localStateValueIndex;
    if (localStateValues[localStateValueIndexLocal] === undefined) {
      localStateValues[localStateValueIndexLocal] = initial;
    }

    const setValue = (val) => {
      localStateValues[localStateValueIndexLocal] = val;
      reRenderMe();
    };

    localStateValueIndex++;
    const retVals = [localStateValues[localStateValueIndexLocal], setValue];
    return retVals;
  }
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    console.log("rendering...");
  }, [cnt]);

  function reRenderMe() {
    setCnt(cnt + 1);
    console.log("reRenderMe called...");
  }
  localStateValueIndex = 0;
  return <DemoApp useState={useMyState} />;
};

export default Demo;
