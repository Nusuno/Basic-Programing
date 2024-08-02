//Switch Case

function saySay(dayOfWeek: number) {
    if (dayOfWeek < 1) {
        console.log('Error')
    } else if (dayOfWeek === 1) {
        console.log('อาทิตย์')
    } else if (dayOfWeek === 2) {
        console.log('จันทร์')
    } else if (dayOfWeek === 3) {
        console.log('อังคาร')
    } else if (dayOfWeek === 4) {
        console.log('พุธ')
    } else if (dayOfWeek === 5) {
        console.log('พฤหัสบดี')
    } else if (dayOfWeek === 6) {
        console.log('ศุกร์')
    } else if (dayOfWeek === 7) {
        console.log('เสาร์')
    } else if (dayOfWeek > 7) {
        console.log('Error')
    }
}
// saySay(5)

function sayHi(dayOfWeek: number) {
    switch (dayOfWeek) {
        case 1:
            console.log('อาทิตย์')
            break
        case 2:
            console.log('จันทร์')
            break
        case 3:
            console.log('อังการ')
            break
        case 4:
            console.log('พุธ')
            break
        case 5:
            console.log('พฤหัสบดี')
            break
        case 6:
            console.log('ศุกร์')
            break
        case 7:
            console.log('เสาร์')
            break
        default:
            console.log('Error')
            break
    }
}

// sayHi(8)

function gotBMI(height: number, weight: number) {
    const bmi = weight / (height ** 2)

    switch (true) {
        default:
            console.log('Error')
            break
        case bmi < 18.50:
            console.log('น้ำหนักน้อย')
            break
        case bmi >= 18.50 && bmi <= 22.90:
            console.log('ปกติ')
            break
        case bmi >= 23 && bmi <= 24.90:
            console.log('อ้วนระดับ 1')
            break
        case bmi >= 25 && bmi <= 29.90:
            console.log('อ้วนระดับ 2')
            break
        case bmi >= 30:
            console.log('อ้วนระดับ 3')
            break
    }
}

// gotBMI(1.74,66)



//Number
const a: number = 999999999999999
const b: number = 9999999999999999
// console.log('a = ' + a)
// console.log('b = ' + b)

const c: number = 0.1 + 0.2
// console.log(c)

const d: number = 46
// console.log(d.toString()) // เปลี่ยนจาก Number เป็น String

const e: number = 46.0
// console.log(e.toFixed(3)) //ปรับทศนิยมเป็น 3 ตำแหน่ง และปัดเศษให้ถ้าเกิน 0.5 **แต่ number จะเปลี่ยนเป็น string** (เปลี่ยนใน () เพื่อเปลี่ยน)

const f: number = 10000
// console.log(f.toLocaleString()) //เปลี่ยนเลข ให้มีเครื่องหมายบอกจำนวนหลัก (,) เช่น 10000 = 10,000 **แต่ number จะเปลี่ยนเป็น string**

const g: string = '45'
// console.log(Number(g)) //เปลี่ยนจาก String เป็น Number

const h: number = 45
// console.log(Number(h.toFixed(3))) //Combo เป็นจาก Number 0 ตำแหน่ง เป็น 3 ตำแหน่งที่เป็น String และเปลี่ยนให้เป็น Number

const i: number = 45
// console.log(parseFloat('45.55')) //เปลี่ยน int เป็น float

const j: number = 45.55
// console.log(parseInt('45')) //เปลี่ยน float เป็น int


//Test

function fixdeDecimal(n: number, digti: number) {

    const x = n.toFixed(digti)
    return x
}

// console.log(fixdeDecimal(50.5,6))


function localeString(n: number) {
    const x = n.toLocaleString()
    return x
}

console.log(localeString(99999999999999999999))