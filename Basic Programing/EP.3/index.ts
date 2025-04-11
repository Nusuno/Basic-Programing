//ไม่รับ input ไม่มี output
function helloWorld() {
    console.log('Hi')
}

// รับ input แต่ไม่มี output
function secondHello(name: string) {
    console.log (name)
}

//ไม่มี input แต่มี output
function getPi() {
    return 3.14
}


function start(fname: string , sname: string , tname: string) {
    if (!(fname === 'nan' || sname === 'pleum') && tname === 'yo') {
        console.log ('เริ่มสอน')
    } else {
        console.log ('ยังไม่สอน')
    }
}

function test(gender: string , height: number , w: number) {
    if (gender === 'male' && height > 170 || (w > 50 && w <= 110) ) {
        console.log ('จับใบดำ ใบแดง')
    } else  {
        console.log ('ไม่เข้าเกณฆ์')
    }
}


// function test(gender: string , height: number) {
//     if (gender === 'male' && height > 170) {
//         console.log ('จับใบดำ ใบแดง')
//     } else if (gender === 'female' && height > 170) {
//         console.log ('ไม่เข้าเกณฆ์')
//     } else {
//         console.log ('error')
//     }
// }


// helloWorld()
// secondHello('Nusuno')
// console.log (getPi())
//start('nan' , 'pleum' , 'yo')
test('male' , 170 , 68)