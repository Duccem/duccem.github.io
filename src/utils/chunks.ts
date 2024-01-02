export function chunk(array: any[], size = 4) {
    const arrays = [];
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        arrays.push(chunk);
    }
    return arrays;
}