/**
 * Format an integer with the french dot separator grouping digits by 3.
 * @param {number} value 
 * @returns {string}
 */
export function toFrenchIntegerFormat(value) {
  value = value.toString();

  if (value.length < 4) {
    return value;
  }

  return `${toFrenchIntegerFormat(value.slice(0, -3))}.${value.slice(-3)}`;
}
