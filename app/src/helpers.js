export function chunk(array = [], n = 3) {
    const columnSize = Math.floor(array.length / n);
    return Array(n).fill().map((_, i) => array.slice(columnSize * i, columnSize * (i + 1)));
}
