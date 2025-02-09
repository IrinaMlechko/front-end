function countVowels(string) {
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let counter = 0;
    const lowerCaseString = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if(vowels.includes(lowerCaseString.charAt(i))) {
            counter++;
        }
    }
    return counter;
}
