function removeWhitespaces(testString) {
    let resultString = testString;

    let stringLength = testString.length;
    let positionOfFirstLetter;


    for (let i = 0; i < stringLength; i++) {
        if (!(testString.charAt(i) === ' ')) {
            positionOfFirstLetter = i;
            break;
        }
    }
    if (positionOfFirstLetter === undefined) {
        return "";
    } else {
        let positionOfLastLetter = positionOfFirstLetter;
        for (let i = stringLength - 1; i > positionOfFirstLetter; i--) {
            if (!(testString.charAt(i) === ' ')) {
                positionOfLastLetter = i;
                break;
            }
        }

        if (positionOfFirstLetter === positionOfLastLetter) {
            return testString.charAt(positionOfLastLetter);
        }

        if (positionOfFirstLetter === 0 && positionOfLastLetter === stringLength - 1) {
            resultString = testString;
        } else {
            if (positionOfLastLetter === stringLength - 1) {
                resultString = testString.substring(positionOfFirstLetter)
            } else {
                resultString = testString.substring(positionOfFirstLetter, positionOfLastLetter + 1);
            }
        }
    }
    return resultString;
}
