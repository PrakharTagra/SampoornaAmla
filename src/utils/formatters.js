/**
 * Currency and data formatting helpers.
 */

export function formatINR(amount) {
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}
