export function splitIntoColumns(array = [], columns = 3) {
    const columnSize = Math.floor(array.length / columns);
    const _columns = [];

    Array(columns).fill().forEach((column, i) => {
        _columns.push(array.slice(columnSize * i, columnSize * (i + 1)));
    });

    return _columns;
}
