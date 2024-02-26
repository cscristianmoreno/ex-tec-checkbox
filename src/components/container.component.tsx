import { FC, ReactElement } from "react";
import { ContainerModelStruct } from "../models/container.model";

const ContainerComponent: FC<ContainerModelStruct> = ({ style, children }: ContainerModelStruct): ReactElement => {
    
    return (
        <div style={style}>
            {children}
        </div>        
    );
}

export default ContainerComponent;