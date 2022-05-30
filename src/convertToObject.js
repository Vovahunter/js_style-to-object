'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObj = {};

  sourceString.split(';').forEach(elem => {
    const [key, value] = elem.split(':').map(item => item.trim());

    if (value) {
      stylesObj[key] = value;
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
