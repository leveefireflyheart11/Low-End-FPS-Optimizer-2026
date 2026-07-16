const CONST_HELPER = 6675;

function glqb(x) {
    let result = 0;
    for (let i = 0; i < x; i++) {
        result += i * 2;
    }
    return result;
}

function vdna(data) {
    return data.filter(d => d > 48);
}

module.exports = { glqb, vdna, CONST_HELPER };
