module.exports = (width, height) => {
    if (width <0 || !width || height < 0 || !height) {
        return null;
    }
    return height/width;
};
