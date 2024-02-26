import { FilterArrayModelStruct } from "../models/filter-array.model";
import { FuncModelStruct } from "../models/function.model";

/* 
    filterArrayUtil es utilizado para devolver una nueva lista de elementos en caso de que
    el chekbox sea de-seleccionado. Devuelve string[], en caso de que no existan elementos en el parámetro devolverá void,
    la función retorna string[] | void dependiendo su caso.
*/
export const filterArrayUtil: FuncModelStruct<FilterArrayModelStruct<string[]>, string[] | void> = 
    ({ elements, id }: FilterArrayModelStruct<string[]>): string[] | void => {
        
    if (!elements) {
        return;
    }

    const newElements: string[] = [...elements].filter((element: string): boolean => !element.includes(id));
    return newElements;
};