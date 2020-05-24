module.exports = (filename) => {
    let dot = filename.lastIndexOf(".");

    if (dot < 0) {
        return filename;
    }

    return filename.substring(0, dot);
};
