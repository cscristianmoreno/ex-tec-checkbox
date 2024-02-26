import { ChangeEvent } from "react";

export type CheckboxComponentModelStruct = {
    id?: string,
    title: string,
    onChange?: (ev: ChangeEvent<HTMLInputElement>) => void,
    checked?: boolean
};