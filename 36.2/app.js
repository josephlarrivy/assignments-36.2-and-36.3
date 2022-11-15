// let baseURL = "http://numbersapi.com/";

// let number = 3;
// $.getJSON(`${baseURL}${number}?json`)
//     .then(data => {console.log(data);
// });



// let numbers = [7, 11, 22];

// for (number in numbers) {
//     $.getJSON(`${baseURL}${numbers}?json`)
//         .then(data => {console.log(data);
//     });
// }


// Promise.all(
//     Array.from({ length: 4 }, () => {
//         return $.getJSON(`${baseURL}${favNumber}?json`);
//     })
// ).then(facts => {
//     facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
// });


let baseUrl = 'https://deckofcardsapi.com/api/deck/';

$.getJSON(`${baseUrl}new/draw/`).then(data => {
let { suit, value } = data.cards[0];
console.log(`the ${value} of ${suit}`);
});

let firstCard = 0;
$.getJSON(`${baseUrl}new/draw/`)
.then(data => {
    firstCard = data.cards[0];
    let deckId = data.deck_id;
    return $.getJSON(`${baseUrl}${deckId}/draw/`);
})
.then(data => {
    let secondCard = data.cards[0];
    [firstCard, secondCard].forEach(function(card) {
    console.log(
        `${card.value} of ${card.suit}`
    );
});
});