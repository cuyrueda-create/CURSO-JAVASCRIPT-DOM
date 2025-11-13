import { gastos } from "./src/data";
import { COP, suma, promedio, minMax, totalPorCategoria, topCategoria } from "./src/stats";


export function analizarGastos(gastos) {


    const total = suma(gastos.map(gasto => gasto.monto)); // suma todos los montos de los gastos
    const prom = promedio(gastos.map(gasto => gasto.monto)); // calcula el promedio de los montos de los gastos
    const { min, max } = minMax(gastos); // obtiene el minimo y maximo de los montos de los gastos
    const porCategoria = totalPorCategoria(gastos); // obtiene el total por categoria
    const topCat = topCategoria(gastos); // obtiene la categoria con el mayor gasto

    return {
        total, prom, min, max, porCategoria, topCat
    };

}

