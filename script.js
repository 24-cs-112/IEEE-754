
function toIEEE(x) {
    if (String(x).trim() === "") {
        return { sign: "", exponent: "", mantissa: "", error: "Please type a number" };
    }
    x = Number(x);
    if (isNaN(x)) {
        return { sign: "", exponent: "", mantissa: "", error: "Please type a valid number" };
    }
    if (x === 0) {
        return { sign: "0", exponent: "00000000", mantissa: "00000000000000000000000", error: "" };
    }
    let sign = x < 0 ? "1" : "0";
    let n = Math.abs(x);
    let bin = n.toString(2);
    let power = bin.length - 1;
    let fraction = bin.slice(1);
    let exponent = (power + 127).toString(2).padStart(8, "0");
    let mantissa = fraction.padEnd(23, "0");
    return { sign: sign, exponent: exponent, mantissa: mantissa, error: "" };
}
