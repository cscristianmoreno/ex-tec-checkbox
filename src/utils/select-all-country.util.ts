import { country_list } from "../mock/country.mock";
import { FuncModelStruct } from "../models/function.model";

/*
    checkSelectAllCountrys() verifica que el número del array coincida 
    con el número de elementos del array de country_list.
*/
export const checkSelectAllCountrys: FuncModelStruct<string[], void | boolean> = (countrys?: string[]): void | boolean => {
    if (!countrys) {
        return;
    }

    const check: boolean = (countrys.length === country_list.length);
    return check;
}