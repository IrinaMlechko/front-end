function countSum(testObject) {
    let sum = 0;
    for (let i = 0; i < testObject.length; i++) {
        let item = testObject[i];
        if (item instanceof Array) {
            sum += countSum(item);
        } else {
            sum += item;
        }
    }
    console.log(sum);
    return sum;
}
