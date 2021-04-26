export function chunk(array = [], n = 3) {
    const columnSize = Math.floor(array.length / n);
    const columns = [];

    Array(n).fill().forEach((column, i) => {
        columns.push(array.slice(columnSize * i, columnSize * (i + 1)));
    });

    return columns;
}
