const caesarCipher = (string, avanco) => {
    const alfb = "abcdefghijklmnopqrstuvwxyz";

    return [...string].map(char => {
        const isUpper = char === char.toUpperCase();
        const base = char.toLowerCase();
        const idx = alfb.indexOf(base);

        if (idx === -1) return char;

        const newChar = alfb[(idx + avanco) % 26];
        return isUpper ? newChar.toUpperCase() : newChar;
    }).join("");
};

export default caesarCipher;
