export const addLeadingZero = (num: number): string => {
    const outputNum = num > 9 ? num : "0" + num;
    return `${outputNum}`;
};

export const fromDateToDDMMYYYY = (date: Date, separator: string): string => {
    const day = addLeadingZero(date.getDate());
    const month = addLeadingZero(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}${separator}${month}${separator}${year}`;
};

export const currentHour = new Date().getHours();
export const currentMins = new Date().getMinutes();
export const tommorowDate = (() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const tomorrow = new Date(year, month, date + 1, 0, 0, 0);
    return tomorrow;
})();
