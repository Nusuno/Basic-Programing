const a: string = '\nอยู่ในเกณฑ์\n'
const b: string = 'ภาวะเสี่ยงต่อโรค\n'
function BMI(h: number, w: number) {
    let score: number = w / (h * h)


    if (score < 18.50) {
        return a + 'น้ำหนักน้อย / ผอม\n\n' + b + 'มากกว่าคนปกติ'
    } else if (score >= 18.50 && score <= 22.90) {
        return a + 'ปกติ (สุขภาพดี)\n\n' + b + 'เท่าคนปกติ'
    } else if (score >= 23 && score <= 24.90) {
        return a + 'อ้วน / โรคอ้วนระดับ 1\n\n' + b + 'อันตรายระดับ 1'
    } else if (score >= 25 && score <= 29.90) {
        return a + 'อ้วน / โรคอ้วนระดับ 2\n\n' + b + 'อันครายระดับ 2'
    } else if (score >= 30) {
        return a + 'อ้วนมาก / โรคอ้วนระดับ 3\n\n' + b + 'อันครายระดับ 3'
    } return
    
}

console.log(BMI(1.74,90))