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
