function BMI(h: number, w: number) {
    let score: number = w / (h * h)
    return score
}

console.log(BMI(1.74,66))