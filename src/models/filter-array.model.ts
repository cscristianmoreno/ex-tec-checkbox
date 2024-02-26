
/*
    El tipo de dato del filtro, el elemento es de tipo genérico a pesar de que se utiliza únicamente
    un array de números, el identificador del elemento, que en este caso de es de tipo string.
*/
export type FilterArrayModelStruct<T> = {
    elements: T,
    id: string
};