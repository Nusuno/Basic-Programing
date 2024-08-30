// const sName: string = 'n1, n2, n3, n4, n5, n6'

// const sNameArray = sName.split(',') //.split คือการแยกข้อมูลให้ออกจากกัน เปลี่ยนเป็น Array
// console.log(sNameArray.join('#')) //.join คือการใส่ตัวอะไรก็ได้ให้มันมาเว้นใส่ในข้อมูล กลับเป็น string


const aName: string = 'dog*cat*bat*lion'
const aNameArray = aName.split('*')
aNameArray.pop() //ดึงข้อมูลตัวสุดท้ายออก
aNameArray.shift() //ดึงข้อมูลตัวแรกออก
aNameArray.push('cow') //ใส่ข้อมูลแทนตัวสุดท้าย
aNameArray.unshift('rat') //ใส่ข้อมูลแทนตัวแรก
console.log(aNameArray)