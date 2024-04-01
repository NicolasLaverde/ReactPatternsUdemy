import "../styles.css";
import FlyOut from "./FlyOut";

export default function FlyOutMenu(){
    return (
        <FlyOut>
            <FlyOut.Toggle />
            <FlyOut.List>
                <FlyOut.Item> Edit </FlyOut.Item>
                <FlyOut.Item> Delete </FlyOut.Item>
            </FlyOut.List>
        </FlyOut>
    )
}