const lowercaseLetter: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseLetter: Array<string> = lowercaseLetter.map((letter) => letter.toUpperCase());
const numbers: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols: Array<string> = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '<', '>', ',', '.', '?', '/', '|', '`', '~'];

const generatePassword = (length: number, hasLowercase: boolean, hasUppercase: boolean, hasNumbers: boolean, hasSymbols: boolean): string => {
    let charSet: Array<string> = [];
    let password: Array<string> = [];
    hasLowercase && (charSet = charSet.concat(lowercaseLetter)) && ((password = password.concat(lowercaseLetter[Math.floor(Math.random() * lowercaseLetter.length)])));
    charSet.sort(() => Math.random() - 0.5);
    hasUppercase && (charSet = charSet.concat(uppercaseLetter)) && ((password = password.concat(uppercaseLetter[Math.floor(Math.random() * uppercaseLetter.length)])));
    charSet.sort(() => Math.random() - 0.5);
    hasNumbers && (charSet = charSet.concat(numbers)) && ((password = password.concat(numbers[Math.floor(Math.random() * numbers.length)])));
    charSet.sort(() => Math.random() - 0.5);
    hasSymbols && (charSet = charSet.concat(symbols)) && ((password = password.concat(symbols[Math.floor(Math.random() * symbols.length)])));
    charSet.sort(() => Math.random() - 0.5);
    let newLength = length - password.length;
    for(let i = 0; i < newLength; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password.push(charSet[randomIndex]);
    }

    return password.join('');
}

export default generatePassword;