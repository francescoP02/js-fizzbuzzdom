// Stampare nella pagina i numeri da 0 a 100, se è multiplo di 3 stampa Fizz, se è multiplo di 5 stampa Buzz, se è multiplo di 3 e 5 stampa FizzBuzz

// Stampa nella console
for (let i = 1; i <= 100; i++) {

    // Definire se è multiplo di 3, di 5 o di entrambi

    let multiple;

    if (i % 3 === 0 && i % 5 === 0) {
        multiple = "FizzBuzz";
    }

    else if (i % 3 === 0) {
        multiple = "Fizz";
    }

    else if (i % 5 === 0) {
        multiple = "Buzz";
    }

    else {
        multiple = i;
    }

    // controllo

    console.log(multiple);

    // 2. Stampo i numeri nella pagina
    const rowWrapper = document.querySelector(`.row`);


    rowWrapper.innerHTML += `<div class="box">${multiple}</div> ` 
}
