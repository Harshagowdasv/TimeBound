export const isPastDate = (date) => {
  const today = new Date();
  today.setHours(0,0,0,0);

  const selected = new Date(date);
  selected.setHours(0,0,0,0);

  return selected < today;
};