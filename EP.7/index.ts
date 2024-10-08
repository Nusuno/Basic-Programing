//JavaScript Objects
const personalInformation = {
    fullName: 'นายสมปอง สนองบุญ',
    address: '123/4',
    moo: '5',
    road: 'ลื่นไหล',
    Subdistrict: 'น้ำตก',
    district: 'อัมพรรณ',
    province: 'หัวร้อน',
    zipCode: '11101001',
    telePhone: '0*7654321',
    phone: '9876543*21',
    email: 'timestone@f.uc'
}
personalInformation.fullName = 'นางสาวสมศรี' //เปลี่ยนข้อมูลของ fullName
console.log(personalInformation.fullName) //การเข้าถึงข้อมูลแบบที่ 1 **แนะนำให้ใช้**


const aboutYou = {
    firstName: 'Peter',
    mindName: 'Benjamin',
    lastName: 'Parker',
    Job: { //Object ซ้อน Object สามารถซ้อนได้เรื่อย ๆ
        superHeroName: 'Spiderman',
        gender: 'Male',
    }
}
console.log(aboutYou['firstName']) //การเข้าถึงข้อมูลแบบที่ 2


//Array and Objects
//ใส่ข้อมูลหลายตัว หลายคนใน Object เดียว
const friendsObject = {
    friend1: {
        fullName: 'นายสมปอง สนองบุญ',
        address: '123/4',
        moo: '5',
        road: 'ลื่นไหล',
        Subdistrict: 'น้ำตก',
        district: 'อัมพรรณ',
        province: 'หัวร้อน',
        zipCode: '11101001',
        telePhone: '0*7654321',
        phone: '9876543*21',
        email: 'timestone@f.uc'
    },
    friend2: {
        fullName: 'นายสมปอง สนองบุญ',
        address: '123/4',
        moo: '5',
        road: 'ลื่นไหล',
        Subdistrict: 'น้ำตก',
        district: 'อัมพรรณ',
        province: 'หัวร้อน',
        zipCode: '11101001',
        telePhone: '0*7654321',
        phone: '9876543*21',
        email: 'timestone@f.uc'
    },
    friend3: {
        fullName: 'นายสมปอง สนองบุญ',
        address: '123/4',
        moo: '5',
        road: 'ลื่นไหล',
        Subdistrict: 'น้ำตก',
        district: 'อัมพรรณ',
        province: 'หัวร้อน',
        zipCode: '11101001',
        telePhone: '0*7654321',
        phone: '9876543*21',
        email: 'timestone@f.uc'
    }
}

//ใส่ข้อมูง JavaScript ในรูปแบบ Array
// const friendArray = [{
//     fullName: 'นายสมปอง สนองบุญ',
//     address: '123/4',
//     moo: '5',
//     road: 'ลื่นไหล',
//     Subdistrict: 'น้ำตก',
//     district: 'อัมพรรณ',
//     province: 'หัวร้อน',
//     zipCode: '11101001',
//     telePhone: '0*7654321',
//     phone: '9876543*21',
//     email: 'timestone@f.uc'
// }, {
//     fullName: 'นายสมปอง สนองบุญ',
//     address: '123/4',
//     moo: '5',
//     road: 'ลื่นไหล',
//     Subdistrict: 'น้ำตก',
//     district: 'อัมพรรณ',
//     province: 'หัวร้อน',
//     zipCode: '11101001',
//     telePhone: '0*7654321',
//     phone: '9876543*21',
//     email: 'timestone@f.uc'
// }, {
//     fullName: 'นายสมปอง สนองบุญ',
//     address: '123/4',
//     moo: '5',
//     road: 'ลื่นไหล',
//     Subdistrict: 'น้ำตก',
//     district: 'อัมพรรณ',
//     province: 'หัวร้อน',
//     zipCode: '11101001',
//     telePhone: '0*7654321',
//     phone: '9876543*21',
//     email: 'timestone@f.uc'
// },
// ]


//EX
const ideal = [{
    fullName: 'Peter Parker',
    gender: 'Male',
    age: '20'
}, {
    fullName: 'Barry Allen',
    gender: 'Male',
    age: '30'
}
]



//Method
//Map() การสร้างตัว Array ใหม่โดยที่ตัดข้อมูลบางตัวออก กำหนด element หรือตัวแปรที่จะยังคงเหลือไว้
//filter เป็นการคัดกรองข้อมูลออกมาตามเงื่อนไขที่กำหนดไว้

const friendArray = [{
    fullName: 'นายสมปอง สนองบุญ',
    address: '123/4',
    moo: '3',
    age: '27',
    road: 'ลื่นไหล',
    Subdistrict: 'น้ำตก',
    district: 'อัมพรรณ',
    province: 'หัวร้อน',
    zipCode: '11101001',
    telePhone: '0*7654321',
    phone: '9876543*21',
    email: 'timestone@f.uc'
}, {
    fullName: 'นางสาวสมศรี จี้เอว',
    address: '123/4',
    moo: '5',
    age: '24',
    road: 'ลื่นไหล',
    Subdistrict: 'น้ำตก',
    district: 'อัมพรรณ',
    province: 'หัวร้อน',
    zipCode: '11101001',
    telePhone: '0*7654321',
    phone: '9876543*21',
    email: 'timestone@f.uc'
}, {
    fullName: 'นายสมควร มวนหลายหลาย',
    address: '123/4',
    moo: '4',
    age: '19',
    road: 'ลื่นไหล',
    Subdistrict: 'น้ำตก',
    district: 'อัมพรรณ',
    province: 'หัวร้อน',
    zipCode: '11101001',
    telePhone: '0*7654321',
    phone: '9876543*21',
    email: 'timestone@f.uc'
},
]

//การใช้ Method map()
const  friendArrayPhoneNumber = friendArray.map(function(elemant, index){ //การใช้ map() จะมีการกำหนดค่าตายตัวคือ map(function(elemant, index))
    return ({
        fullName : elemant.fullName,
        email : elemant.email,
        phone: elemant.phone
    })
})

console.log(friendArrayPhoneNumber)


//การใช้ Method filter()
const friendFilter = friendArray.filter(function(elemant, index){
    return Number(elemant.age) > 19 && Number(elemant.moo) === 5 //ถ้าในข้อมูลเราเป็น String ให้แปลงเป็น Number ตามนี่
    // return elemant.age > 19 //ถ้าข้อมูลเป็น Number อยู่แล้วให้ใช้ตามนี้ได้เลย
})

console.log(friendFilter)