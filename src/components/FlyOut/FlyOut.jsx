import { createContext, useContext, useState } from "react";
import FlyOutList from "./FlyOutList";
import FlyOutToggle from "./FlyOutToggle";
import FlyOutItem from "./FlyOutItem";

const FlyOutContext = createContext();

export function useContextFlyOut() {
    const flyOutContext = useContext(FlyOutContext)
    if(!flyOutContext) {
        throw new('You need to wrap your component in a FlyOut context')
    }
    return flyOutContext
}

function FlyOut({children}) {
  const [open, toggle] = useState(false);
  return (
    <div className={`flyout`}>
      <FlyOutContext.Provider value={{ open, toggle }}>
        {children}
      </FlyOutContext.Provider>
    </div>
  );
}

FlyOut.List = FlyOutList
FlyOut.Toggle = FlyOutToggle
FlyOut.Item = FlyOutItem

export default FlyOut