/**
 * Convert an image to base64 URL
 *
 * See: http://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
 *
 * @param  {String}   url
 * @param  {Function} callback
 * @param  {String}   [outputFormat=image/png]
 *
 * @example
 *   convertImgToBase64URL('http://bit.ly/18g0VNp', function(base64Img) {
 *     // Base64DataURL
 *   });
 */
convertImgToBase64URL = function(url, callback, outputFormat) {
	var img = new Image();

	img.crossOrigin = 'Anonymous';
	img.onload = function() {
		var canvas = document.createElement('CANVAS'),
			ctx = canvas.getContext('2d'), dataURL;

		canvas.height = this.height;
		canvas.width = this.width;
		ctx.drawImage(this, 0, 0);
		dataURL = canvas.toDataURL(outputFormat);
		callback(dataURL);
		canvas = null;
	};
	img.src = url;
};
