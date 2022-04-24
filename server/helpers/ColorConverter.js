export default class ColorConverter {
  /**
   *
   * @param {String} hex
   * @returns {String []} red, green, and blue values from 0-255
   */
  hexToRGB(hex) {
    if (!hex.match(/^#[0-9a-f]{6}$|^#[0-9a-f]{3}$/i))
      throw new Error('Invalid hex value: ', hex);

    let split;

    // remove #
    const hexRaw = hex.slice(1);

    if (hexRaw.length === 3) {
      split = hexRaw.split('');
    } else {
      split = [hexRaw.slice(0, 2), hexRaw.slice(2, 4), hexRaw.slice(4, 6)];
    }

    const result = split.map((newHex) => this.singularHexToDecimal(newHex));

    return result;
  }

  /**
   *
   * @param {String} hex
   * @returns {Integer} value on 0-255 scale
   */
  singularHexToDecimal(hex) {
    if (!hex.match(/^[0-9a-f]{1}$|^[0-9a-f]{2}$/i))
      throw new Error('Invalid singular hex value');
    // convert singular character hexes to their correct two-char value
    const newHex = hex.length < 2 ? `${hex}${hex}` : hex;

    return parseInt(newHex, 16);
  }

  /**
   *
   * @param {Number} dec
   * @returns {String} hex value of decimal number
   */
  decimalToHex(dec) {
    console.log(dec);
    if (dec > 255 || dec < 0 || typeof dec !== 'number')
      throw new Error('Value must be number between 0 and 255');

    const normalized = Math.round(dec).toString(16);

    // Ensure hex values are double digits
    return normalized.length < 2 ? '0' + normalized : normalized;
  }

  /**
   *
   * @param {Number[]} rgb
   * @returns {String} hex value
   */
  rgbToHex(rgb) {
    return rgb
      .map((value) => this.decimalToHex(value))
      .reduce((acc, val) => {
        acc += val;
        return acc;
      }, '#');
  }

  /**
   *
   * @param {String} hexColor
   * @param {Number} amount percentage of shade increase, must be between 0-1
   */
  shadeUp(hexColor, amount) {
    if (typeof amount !== 'number') throw new Error('Invalid amount: ', amount);

    if (amount < 0) amount = 0;
    if (amount > 1) amount = 1;

    const rgb = this.hexToRGB(hexColor).map(
      (value) => (255 - value) * amount + value,
    );

    return this.rgbToHex(rgb);
  }

  /**
   *
   * @param {String} hexColor
   * @param {Number} amount percentage of shade decrease, must be between 0-1
   */
  shadeDown(hexColor, amount) {
    if (typeof amount !== 'number' || amount < 0 || amount > 1)
      throw new Error('Invalid amount, must be between 0 and 1');

    if (amount < 0) amount = 0;
    if (amount > 1) amount = 1;

    const rgb = this.hexToRGB(hexColor).map((value) => value - value * amount);

    return this.rgbToHex(rgb);
  }
}
