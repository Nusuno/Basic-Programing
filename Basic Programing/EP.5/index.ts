//ข้อสอบ กลางภาค ข้อสุดท้าย ปล. ผิดเละเทะมากกกก เศร้า+1
// function toFixed(fName: string) {
//     if (fName.includes('นาย')) {
//         console.log(fName.slice(3,fName.length))
//     } else if (fName.includes('นางสาว')) {
//         console.log(fName.slice(6,fName.length))
//     } else {
//         console.log(fName)
//     }
// }

// toFixed('นายทดสอบ')


//for loop
// for (let i = 0; i <= 5; i++) { //let i = 0; คือ เริ่มจากเลข 0 ใส่ไว้ใน i จบด้วย ; i <= 5; คือ ถ้า i น้อยกว่าหรือเท่ากับ 5 ให้มัน i++ คือ i บวกเพิ่มไปจนกว่าจะ === 5
//     console.log(i)
// }


// let sum: number = 0 // สร้าง sum เพื่อรอรับเลขที่บวก

//i++ = i บวกเพิ่มทีละ 1  
// for (let i = 1; i <= 365; i++) { // สร้าง loop ในการบวกเลขไปเรื่อยๆ จนถึง 1000 ครั้ง 
//     sum = sum + i // เอาตัวเองมาบวก 1
// }
// console.log('total : ' , sum)


//while loop
// let i: number = 1
// let sum: number = 0 

// while (i <= 1000) {
//     sum = sum + i
//     i++
// }

// console.log(sum)


// do whlie loop
// let i: number = 1
// let sum: number = 0

// do {
//     sum = sum + i
//     i++
// } while (i <= 1000)

// console.log(sum)


//while ที่ถูกรบกวน
// let i: number = 1
// let sum: number = 0

// for (let j = 1; j < 10; j++) {
//     i = i * 5
// }

// while (i <= 365) {
//     sum = sum + i
//     i++
// }

// console.log(sum)

//การ break infinity loop
// let sum: number = 0
// let isBeark: boolean = false
// let row: number = 0


// while (true) {
//     console.log('โสด')
//     row++
//     if (row === 3) {
//         break
//     }
// }

//Array ยากมาก!! ตั้งใจซะ!! เจ้าคนอ่าน!!
// let car1: string = 'Honda'
// let car2: string = 'Yamaha'
// let car3: string = 'Toyota'
// let car4: string = 'Suzuki'

// const car = ['Honda','Yamaha','Toyota','Suzuki']
// const nm = [1,2,3,4,5]
// const bl = [true,false,true,false]

// const myName: string = 'สุดสวย สวยสุด'

// console.log(myName[2])
// car[1] = 'Mazda'
// console.log(car[1])

//loop + array
// const car = ['Honda','Yamaha','Toyota','Suzuki','BYD']

// for (let i = 0; i < car.length; i++) {
//     console.log(car[i])
// }

// let i: number = 0

// while (i < car.length) {
//     console.log(car[i])
//     i++
// }

// do {console.log(car[i])
//     i++
// } while (i < 4)


//Test
//loop + Array + if
// const car = ['Honda','Yamaha','Toyota','Suzuki','Mazda']

// for (let i = 0; i < car.length; i++) {
//     if (car[i] === 'Yamaha') {
//         console.log('รถซื้อแกง แรงได้ไง')
//     } 
// }


//callBack Function
//.forEach เป็นการวนลูปและพิมพ์ค่าออกมาทุกครั้งที่วน
const car = ['Honda','Yamaha','Toyota','Suzuki','Mazda']
car.forEach(function(c) {
    console.log(c)
})
