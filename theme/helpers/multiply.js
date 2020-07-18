module.exports = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return null;
    }
    return a * b;
};