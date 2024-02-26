/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FuncModelStruct } from "../models/function.model";
import { HookCountryModelStruct, HookModelStruct } from "../models/hook.model";
import { filterArrayUtil } from "../utils/filter-array.util";
import { checkSelectAllCountrys } from "../utils/select-all-country.util";
import { country_list } from "../mock/country.mock";

export const useCountry: FuncModelStruct<HookCountryModelStruct> = (): HookCountryModelStruct => {
    /* 
        Contendrá una lista de identificadores de cada elemento país, que en este caso es un ID de tipo string.
    */
    const [country, setCountry]: HookModelStruct<string[]> = useState<string[]>([]);

    /*
         Se encarga de poner en true todos los checkbox, en caso de que checkboxMaster 
         o checkSelectAllCountrys sean true.
    */
    const [selectAll, setSelectAll]: HookModelStruct<boolean> = useState<boolean>(false);

    /*
        Se encarga del verificar el estado del checkbox Master. 
    */
    const [checkboxMaster, setCheckboxMaster]: HookModelStruct<boolean> = useState<boolean>(false);

    // En caso de que la dependencia country cambie, se verifica si están checkeados todos los estados.
    useEffect((): FuncModelStruct => {
        /*
            Se pone el checkbox maestro en falso, 
            siempre va a cambiar el estado a falso cuando se checkee algún elemento que no sea el maestro.
        */
        setCheckboxMaster(false);

        /*
            Se verifica que el número de elementos de country sea igual al número de elementos de la lista,
            si es true, se selecciona el checkbox maestro,
            si es true, todos los checkbox estarán seleccionados.
        */
        if (checkSelectAllCountrys(country)) {
            setSelectAll(true);
            setCheckboxMaster(true);
        }

        /*
            Para liberar memoria en caso de que el componente sea desmontado, 
            en este caso no es necesario utilizarlo pero es una buena práctica.

        */
        return (): void => {

        };
    }, [country]);

    const addCountry: FuncModelStruct<string, void> = (id?: string): void => {
        if (!id) {
            return;
        }
        
        setCountry([...country, id]);
    };

    const removeCountry: FuncModelStruct<string, void> = (id?: string): void => {
        if (!id) {
            return;
        }

        // Devuelve una lista nueva de elementos omitiendo el elemento removido.
        const newCountry: string[] | void = filterArrayUtil({
            elements: country,
            id: id 
        });

        if (!newCountry) {
            return;
        }
        
        setCountry(newCountry);
    };

    // Si sólo se hace click en el checkbox maestro, se ejecuta.
    const selectAllCountry: FuncModelStruct = (): void => {
        setSelectAll(!(selectAll));
        setCheckboxMaster(!(checkboxMaster));

        // Si checkbox está en estado false, y pasa a true, se añaden los elementos.
        if (!checkboxMaster) {
            const elements: string[] = [...country];

            country_list.map((_str: string, index: number): void => {
                const id: string = (index + 1).toString();

                // Se detiene la función si el elemento ya está dentro de country.
                if (country.includes(id)) {
                    return;
                }

                elements.push(id);
            });

            setCountry(elements);
        }
        else {
            setCountry([]);
        }
    };

    return {
        country,
        setCountry,
        checkboxMaster,
        setCheckboxMaster,
        addCountry,
        removeCountry,
        selectAll,
        selectAllCountry
    };
}