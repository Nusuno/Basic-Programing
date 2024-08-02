const a: string = '\nอยู่ในเกณฑ์\n' //สร้างขึ้นเพื่อบอกหัวข้อ เกณฑ์
const b: string = 'ภาวะเสี่ยงต่อโรค\n' //สร้างขึ้นเพื่อบอกหัวข้อ ภาวะเสี่ยงต่อโรค
function BMI(height: number, weight: number) {
    let score: number = weight / (height * height) //สูตรการคำนวณ BMI น้ำหนักตัว / ส่วนสูง(เมตร) กำลัง 2


//สร้าง เงื่อนไข ในการคำนวณค่า BMI
// \n ใช้เพื่อ ขึ้นบรรทัดใหม่

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

console.log(BMI(1.74,66)) //สั่งพิมพ์ function BMI และใส่ค่า height เป็น 1.74 เมตร (หรือ 174 ซม.) และ weight เป็น 66 กิโลกรัม