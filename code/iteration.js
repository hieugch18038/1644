//for loop
// in ra day so tu 1 den 10 dung o so 5
for (var i = 1; i <= 10; i++) {
    console.log(i)
    if (i == 5){
        break //stop
    }
}
//in ra day so tu 1 den 10 nhung bo qua so 5
for (var i = 1; i <= 10; i++) {
    if (i ==5){
        continue //skip
    }
    console.log(i)
}
//do while: chay code trong "do" it nhat 1 lan ms check dieu kien trong while
let a = 1
do{
    console.log(a)
    a++
}while (a<=10)
//while: chi chay code trong "while" neu thoa man dieu kien
let b = 1
while (b <=10){
    console.log(b)
    b++
}

var x = 10
//post-fix operator
//x++: gan tri cua x cho y roi ms tang x len 1 don vi
var y = x++ //x = x + 1
//pre-fix operator
//++x: tang x len 1 don vi roi moi gan gia tri cua x cho x
var z = ++x //x = x+1
console.log("x = " + x)
console.log("y = " + y)
console.log("z = " + z)