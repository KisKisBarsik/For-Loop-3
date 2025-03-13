
// ! Spørsmål 1

for (let i = 1; i <=10; i++) {
    document.writeln(`<p style="color: red;">Hello World</p>`)
}



// ! Spørsmål 2

for (let i = 1; i <=50; i++) {
    document.writeln(`<br>${i}</br>`)
}



// ! Spørsmål 3

var sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
document.writeln(`<br>`)
document.writeln(sum)
document.writeln(`<br>`)



// ! Spørsmål 4
var ht = "#"
for (let i = 0; i < 5; i++) {

    document.writeln(`<br>${ht}</br>`)
    ht = ht + "#"
    
}



// ! Spørsmål 5

for (let i = 2; i <= 50; i+= 2) {

    document.writeln(`<br>${i}</br>`)

}



// ! Spørsmål 6

for (let i = 0; i <= 100; i+= 5) {

    document.writeln(`<br>${i}</br>`)

}



// ! Spørsmål 7

let liste = [1, 1, 22, 123, 3]
          // -- --  --  ---  -
let sE = liste[0]

for (let i = 0; i < liste.length; i++) {
    if (liste[i] > liste[i+1]) {
        sE = liste[i]
    }
}

document.writeln(`<br>Dette tall er største: ${sE}</br>`);
