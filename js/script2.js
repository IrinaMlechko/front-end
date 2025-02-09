function checkIfPalyndrom(testString) {
    let changedString = testString.replace(/[ \p{P}]/gu, '').toLowerCase().replace(/ё/g,'е').replace(/[ьъ]/g, '');
    console.log(changedString);
    let length = changedString.length;
    let counter = Math.trunc(length/2);
    let result = true;
    for (let i=0; i< counter; i++) {
        if (!(changedString.charAt(i)===changedString.charAt(length-1-i))) {
            result = false;
            break;
        }
    }
    return result;
}
