function getStringDay(UTCDate) {
  const date = new Date(UTCDate * 1000);
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}

function handleError(fn) {
  return (...params) => fn(...params).catch((er) => console.error('Opps...', er));
}

export { getStringDay, handleError };
