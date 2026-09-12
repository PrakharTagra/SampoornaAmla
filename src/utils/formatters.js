/**
 * Currency and data formatting helpers.
 */

export function formatPrice(amount) {
  if (amount === null || amount === undefined) return '';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatINR(amount) {
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}


export function formatDate(dateString) {
  if (!dateString) return '';
  return new Intl.DateTimeFormat('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString));
}
