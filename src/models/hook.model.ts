import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FuncModelStruct } from "./function.model"

export type HookModelStruct<T> = [
    T,
    Dispatch<SetStateAction<T>>
];

export type HookCountryModelStruct<FMS = FuncModelStruct<string, void> | FuncModelStruct<void>> = {
    country: string[],
    setCountry: Dispatch<SetStateAction<string[]>>,
    checkboxMaster: boolean,
    setCheckboxMaster: Dispatch<SetStateAction<boolean>>,
    addCountry: FMS,
    removeCountry: FMS,
    selectAll: boolean,
    selectAllCountry: FMS
};

export type HookCheckboxModelStruct = {
    onCheckboxClick: FuncModelStruct<ChangeEvent<HTMLInputElement>, void>
};