export const addLeadingZero = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
};

export const formatDate = (date: Date, format: string): string => {
  const map: any = {
    mm: addLeadingZero(date.getMonth() + 1),
    dd: addLeadingZero(date.getDate()),
    yy: date.getFullYear().toString().slice(-2),
    Y: date.getFullYear(),
    hh: addLeadingZero(date.getHours()),
    ii: addLeadingZero(date.getMinutes()),
    ss: addLeadingZero(date.getSeconds()),
  };

  return format.replace(
      /mm|dd|yy|Y|hh|ii|ss/gi,
      (matched: string) => map[matched] || ''
  );
};
