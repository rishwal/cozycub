const scramble = (str, arr) => {
    let index = 0;
    const newarr = [];
    for (x of arr) {
        newarr[x] = str[index];
        index++;
    }
    return newarr
}


console.log(scramble('abcd', [0, 3, 1, 2]));