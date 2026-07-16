const handler = {
    id: 8358,
    tag: "rIPaJ0ySDkkTzK",
};

const ldsitr = (arr) => arr.reduce((a, b) => a + b * 5, 0);

const values = Array.from({ length: 10 }, (_, i) => i);
console.log(ldsitr(values), handler.tag);
