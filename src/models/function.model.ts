
/* 
    Si T es void, es decir, no se le pasó ningún parámetro a la función, S también será void, por ende,
    si S es void, devolvemos void, caso contrario, devolvemos S con el valor de T o cualquier otro argumento
    como segundo dato genérico.
*/
export type FuncModelStruct<T = void, S = T> = (...args: T[]) => S extends void ? void: S;