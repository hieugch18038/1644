//ham ko co tham so (parameter) va k co return (gia tri tra ve)
function hello(){
    console.log("hello greenwich")
}
hello()

//ham co tham so va ko co return
function sum(a, b){
    console.log(a+b)
}
sum(20, 30)

//ham ko co tham so nhung co return
function year(){
    return 2022
}
console.log(`Current year is `, year())

//ham co ca tham so va return
function sayHello (name, age){
    var output=("hello" + name +"you are" + age + "year old")
    return output
}
console.log (sayHello("minh", 40))
//var: pham vi tac dung la trong toan bo file code => global variable
//let: pham vi tac dung chi trong 1 doan code (function) => local variable