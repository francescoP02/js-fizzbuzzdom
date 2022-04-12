// Stampare nella pagina i numeri da 0 a 100, se è multiplo di 3 stampa Fizz, se è multiplo di 5 stampa Buzz, se è multiplo di 3 e 5 stampa FizzBuzz

// Stampa nella console
for (let i = 1; i <= 100; i++) {

    // Definire se è multiplo di 3, di 5 o di entrambi

    let multiple;

    let colorBox;

    if (i % 3 === 0 && i % 5 === 0) {
        multiple = "FizzBuzz";
        colorBox = `red`;
    }

    else if (i % 3 === 0) {
        multiple = "Fizz";
        colorBox = `green`;
    }

    else if (i % 5 === 0) {
        multiple = "Buzz";
        colorBox = `yellow`;
    }

    else {
        multiple = i;
        colorBox = `blu`;
    }

    // controllo

    console.log(multiple, colorBox);

    // 2. Stampo i numeri nella pagina
    const rowWrapper = document.querySelector(`.row`);


    rowWrapper.innerHTML += `<div class="box ${colorBox}">${multiple}</div> ` 
}
