var a=[1,3,4,2,7,9,10,6,8]
var b=[1,3,9,11,5,7,13]
const  c=a.filter(Element=>b.includes(Element))
console.log("Các số tồn tại trong 2 mảng: ",c)