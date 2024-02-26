import { FC, ReactElement, RefObject, useEffect, useRef } from "react";
import { CheckboxComponentModelStruct } from "../models/checkbox-component.model";
import { FuncModelStruct } from "../models/function.model";

const CheckboxComponent: FC<CheckboxComponentModelStruct> = ({ id, title, onChange, checked }: CheckboxComponentModelStruct): ReactElement => {

    /*
        Se utiliza una referencia para evitar una renderización innecesaria,
        ya que dicha renderización sólamente depende del checkbox maestro. 
    */
    const inputRef: RefObject<HTMLInputElement> | null = useRef<HTMLInputElement | null>(null);

    useEffect((): void | FuncModelStruct => {
        if (typeof checked === "undefined") {
            return;
        }

        if (!inputRef.current) {
            return;
        } 

        inputRef.current.checked = checked;

        return (): void => {

        };
    }, [checked]);

    return (
        <div>
            <input ref={inputRef} id={id} onChange={onChange} type="checkbox"/>
            <label htmlFor={id}>{title}</label>
        </div>
    );
};

export default CheckboxComponent;