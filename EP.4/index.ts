//Switch Case

function sayHi(dayOfWeek: number) {
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

sayHi(6)