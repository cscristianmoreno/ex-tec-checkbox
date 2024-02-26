import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FuncModelStruct } from "./function.model"

export type HookModelStruct<T> = [
    T,
    Dispatch<SetStateAction<T>>
];

export type HookCountryModelStruct = {
    country: string[],
    setCountry: Dispatch<SetStateAction<string[]>>,
    checkboxMaster: boolean,
    setCheckboxMaster: Dispatch<SetStateAction<boolean>>,
    addCountry: FuncModelStruct<string, void>,
    removeCountry: FuncModelStruct<string, void>,
    selectAll: boolean,
    selectAllCountry: FuncModelStruct<void>
};

export type HookCheckboxModelStruct = {
    onCheckboxClick: FuncModelStruct<ChangeEvent<HTMLInputElement>, void>
};