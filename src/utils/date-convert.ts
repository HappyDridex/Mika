export const addLeadingZero = (num: number): string => {
    const outputNum = num > 10 ? num : "0" + num;
    return `${outputNum}`;
};

export const fromDateToDDMMYYYY = (date: Date, separator: string): string => {
    const day = addLeadingZero(date.getDate());
    const month = addLeadingZero(date.getMonth());
    const year = date.getFullYear();
    return `${day}${separator}${month}${separator}${year}`;
};
