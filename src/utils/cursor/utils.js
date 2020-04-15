// function for linear interpolation of values
export const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
};

// function to map a value from one range to another range
export const map = (value, in_min, in_max, out_min, out_max) => {
    return (
        ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
};
