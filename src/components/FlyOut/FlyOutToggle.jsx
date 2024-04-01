import Icon from "../Icon";
import { useContextFlyOut } from "./FlyOut"

export default function FlyOutToggle() {
    const {open, toggle} = useContextFlyOut()

    return (
        <div onClick={() => toggle(!open)} className="flyout-btn" >
          <Icon />
        </div>
      );
}