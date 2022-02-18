const colors = ['red', 'green', 'blue']

function colorList(color) {
    return `<li>${color}</li>`
}

// const mappedArray = colors.map(colorList);
const mappedArray = colors.map(color => `<li>${color}</li>`);

console.log(mappedArray);