function checkIfPalindrome(testString) {
    let changedString = testString.replace(/[ \p{P}]/gu, '').toLowerCase().replace(/ё/g, 'е').replace(/[ьъ]/g, '');
    console.log(changedString);

    return check(changedString);
}

function check(string) {
    if (string.length < 2) {
        return true;
    } else {
        if (!(string[0] === string[string.length - 1])){
            return false;
        }
        return check(string.substring(1, string.length - 1));
    }
}