import { useContextFlyOut } from "./FlyOut"

export default function FlyOutList({children}) {
    const {open} = useContextFlyOut()
    return open && <ul className="flyout-list">{children}</ul>;
}