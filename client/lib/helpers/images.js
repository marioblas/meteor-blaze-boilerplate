/* global convertImgToBase64URL:true */

/**
 * Convert an image to base64 URL
 *
 * @see http://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
 *
 * @param  {String}   url
 * @param  {Function} callback
 * @param  {String}   [outputFormat=image/png]
 *
 * @example
 *   convertImgToBase64URL('http://bit.ly/18g0VNp', (base64Img) => {
 *     // Base64DataURL
 *   });
 */
convertImgToBase64URL = (url, callback, outputFormat) => {
  const img = new Image();

  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    let canvas = document.createElement('CANVAS');
    const ctx = canvas.getContext('2d');

    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
    canvas = null;
  };
  img.src = url;
};
