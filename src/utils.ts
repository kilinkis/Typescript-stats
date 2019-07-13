export const dateStringToDate = (dateString: string): Date => {
  // example date: 30/12/1985
  const dateParts = dateString.split('/').map(
    (value: string): number => {
      return parseInt(value);
    }
  );

  // year, month (zero indexed), day
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
