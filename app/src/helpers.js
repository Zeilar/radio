export function splitIntoTwoColumns(array = []) {
    const half = Math.floor(array.length / 2),
        firstColumn = [],
        secondColumn = [];
    
    for (let i = 0; i < half; i++) {
        firstColumn.push(array[i]);
    }
    
    for (let i = half; i < array.length; i++) {
        secondColumn.push(array[i]);
    }

    return [firstColumn, secondColumn];
}
