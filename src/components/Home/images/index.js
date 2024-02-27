// images/index.js
const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
};

const pngImages = importAll(require.context('.', false, /\.(png)$/));
const jpgImages = importAll(require.context('.', false, /\.(jpg)$/));

const images = { ...pngImages, ...jpgImages }; // Merge both objects

export default images;
