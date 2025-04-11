function add(a: number, b: number) {    //function การบวก (add แค่ชื่อของ function แปลว่า บวกหรือเพิ่ม) ตัวแปล a,b ให้เป็น number และ return a + b
    return a + b
}
function minus(a: number, b: number) { //function การลบ (minus แค่ชื่อของ function แปลว่า ลบ) ตัวแปล a,b ให้เป็น number และ return a - b
    return a - b
}
function multiply(x: number, y: number, z: number) { //function การคูณ (multiply แค่ชื่อของ function แปลว่า คูณ) ตัวแปล x,y,z ให้เป็น number และ return x * y * z
    return x * y * z
}

function grade(homework: number, midterm: number, final: number) { //function คิดคำนวณ grade รับค่าคะแนนจาก homework, midterm, final รวมกัน (homework + midterm + final)
    let score: number = homework + midterm + final
/*    if (score < 50) {
        return 'ตก'
    } else {
        return 'ผ่าน'
    }
    

   
   if (score > 100) {
        return 'Error' 
   } else if (score >= 80) {
        return 'A'
   } else if (score >= 70) {
        return 'B'
   } else if (score >= 60) {
        return 'C'
   } else if (score >= 50) {
        return 'D'
   } else if (score >= 0) {
        return '0'
   } else {
        return 'Error'
   }
        
        
    if (score < 0) {
        return 'Error'
    } else if (score === 0 && score <=49) {
        return '0'
    } else if (score === 50 && score <= 54) {
        return 'D'
    } else if (score === 55 && score <= 59) {
        return 'D+'
    } else if (score === 60 && score <= 64) {
        return 'C'
    } else if (score === 65 && score <=69) {
        return 'C+'
    } else if (score === 70 && score <= 74) {
        return 'B'
    } else if (score === 75 && score <= 79) {
        return 'B+'
    } else if (score === 80 && score <= 100) {
        return 'A'
    } else {
        return 'Error'
    }
       */
      
       if (score < 50) {
            return 'F'
       } else if (score < 60) {
            return 'D'
       } else if (score < 70) {
            return 'C'
       } else if (score < 80) {
            return 'B'
       } else if (score < 100) {
            return 'A'
       } else {
            return 'Error'
       }
}


console.log(grade(20,40,20))
console.log(add(5, 10))         //คำตอบ 15
console.log(minus(20, 10))      //คำตอบ 10
console.log(multiply(2, 4, 10)) //คำตอบ 80