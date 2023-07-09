export const fieldsAreFilled = (...args: (string | number)[]): boolean => {
    return args.every((el) => !!el) ? true : false;
};
