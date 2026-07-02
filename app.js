function checkno() {
    let input = document.querySelector('#input');
    let num = input.value;

    if (num === "") {
        document.querySelector('.box').textContent = "Please enter a number!";
        return;
    }

    if (num % 2 === 0) {
        document.querySelector('.box').textContent = `${num} number is even`;
    } else {
        document.querySelector('.box').textContent = `${num} number is odd`;
    }

    input.value = ""; 
    input.focus();   
}