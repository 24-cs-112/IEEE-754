function toIEEE(x) {
    let sign = x < 0 ? "1" : "0";
    let n = Math.abs(x);
    let bin = n.toString(2);
    let power = bin.length - 1;
    let fraction = bin.slice(1);
    let exponent = (power + 127).toString(2).padStart(8, "0");
    let mantissa = fraction.padEnd(23, "0");
    return sign + " " + exponent + " " + mantissa;
}
