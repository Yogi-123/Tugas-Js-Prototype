String.prototype.reverse = function (n) {
    let hasil = ""
    for (let i = this.length; i >=0; i--) {
        hasil += this[i]
    }
    return hasil
}

console.log("yogi".reverse())