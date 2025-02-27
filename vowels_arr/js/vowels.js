const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

function countVowels(string) {
    let counter = 0;
    const lowerCaseString = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(lowerCaseString.charAt(i))) {
            counter++;
        }
    }
    return counter;
}

function countVowelsForEach(string) {
    let counter = 0;
    const arrayWithLetters = string.split('');

    arrayWithLetters.forEach(letter => {
        if (vowels.includes(letter.toLowerCase())) {
            counter++;
        }
    });
    return counter;
}

function countVowelsFilter(string) {
    const arrayWithLetters = string.split('');
    return arrayWithLetters.filter(letter => vowels.includes(letter.toLowerCase())).length;
}

function countVowelsReduce(string) {
    const arrayWithLetters = string.split('');
    return arrayWithLetters.reduce((amount, letter) => {
        if (vowels.includes(letter.toLowerCase())) {
            amount++;
        }
        return amount;
    }, 0);
}
