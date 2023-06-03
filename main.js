let num = +prompt("Raqam Kiriting")

while (num == 0 && isNaN(num)) {
    alert("Bu son emas iltimos son kriting ")
}

if (num % 2 == 1 && num != 0) {
    alert("Siz toq son kritingiz")
} else if (num % 2 == 0 && num != 0) {
    alert("Siz juft son kritingiz")
}