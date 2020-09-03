// method string reverse
String.prototype.reverse = function (n) {
    let hasil = ""
    for (let i = this.length; i >=0; i--) {
        hasil += this[i]
    }
    return hasil
}



// method number isprima()

Number.prototype.isprima = function (n) {
    if (n==1 || n==2 || n==3 || n==5 || n==7) {
        console.log(true)
    } else if (n%2==0 || n%3==0 || n%5==0 || n%7==0) {
        console.log(false)
    } else {
        console.log(true)
    }
}

let a = 31
a.isprima();