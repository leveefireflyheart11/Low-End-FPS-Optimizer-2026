// Config module: loader

const SETTINGS = {
    jacex: 763,
    hgdosu: 235,
    pmdnrk: 672,
    gprmq: 835,
};

function get(key, fallback) {
    return key in SETTINGS ? SETTINGS[key] : fallback;
}

module.exports = { SETTINGS, get };
