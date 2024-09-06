// const sName: string = 'n1, n2, n3, n4, n5, n6'

// const sNameArray = sName.split(',') 
// console.log(sNameArray.join('#')) 

// .split คือการแยกข้อมูลให้ออกจากกัน เปลี่ยนเป็น Array
// .join คือการใส่ตัวอะไรก็ได้ให้มันมาเว้นใส่ในข้อมูล กลับเป็น string
// .pop ดึงข้อมูลตัวสุดท้ายออก
// .shift ดึงข้อมูลตัวแรกออก
// .push ใส่ข้อมูลแทนตัวสุดท้าย
// .unshift ใส่ข้อมูลแทนตัวแรก
// .sort ใช้เรียงลำดับข้อมูลตาม a-z / ก-ฮ
// .reverse ใช้เรียงลำดับข้อมูลย้อนหลัง z-a / ฮ-ก
/* 
.slice ใช้สำหลับตัดข้อมูลออกมา โดยสามาถกำหนดได้ว่า จุดเริ่มต้น และสิ้นสุดคืออะไร จุดเริ่มต้นจะเก็บข้อมูลไว้ จุดสิ้นสุดจะตัดทิ้ง
เช่น ข้อมูล n1 n2 n3 n4 slice(0,2) จะตัดข้อมูลออกมาเหลือแค่ n1 n2 เพราะ 0 ในวงเล็บ คือ n1 จะเก็บไว้ 2 ในวงเล็บคือ n3 จะตัดทิ้ง เลยเหลือแค่ n1 n2
*/ 
// const aName: string = 'dog*cat*bat*lion'
// const aNameArray = aName.split('*')
// aNameArray.pop()
// aNameArray.shift()
// aNameArray.push('cow')
// aNameArray.unshift('rat')
// console.log(aNameArray.slice(0,2)) 

//EX
// const fruits =["Banana", "Orange", "Apple", "Mango"]
// console.log(fruits.sort()) //เรียงลำดับ A-Z
// console.log(fruits.reverse()) //เรียงลำดับ Z-A


//Java Script Object
// me = Java Script Object
const me = {
    firstName: 'สมปอง' , 
    lastName: 'สนองบุญ' , 
    age: 24
}