export const getFormattedDateFromTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  const month = date.toLocaleString('eng', { month: 'short' });
  const day = date.getDay();

  return `${month} ${day}`;
};