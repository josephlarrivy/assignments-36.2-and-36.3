// Part 1: Number Facts
// Make a request to the Numbers API(http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API.

// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

// Use the API to get 4 facts on your favorite number.Once you have them all, put them on the page.It’s okay if some of the facts are repeats.

// (Note: You’ll need to make multiple requests for this.)

let baseUrl = 'http://numbersapi.com/'

async function getNumberFacts() {
    let response = await $.getJSON(`${baseUrl}${number}?json`);
    console.log(response)
}
let number = Math.floor(Math.random() * 20)
getNumberFacts(number);


let numbers = [12,77,43];
async function getMultiple() {
    let response = await $.getJSON(`${baseUrl}${number}?json`);
    console.log(response);
}
getMultiple();


let arr = [];
async function getMultipleAgain() {
    let resp = await Promise.all(
    arr.push () => $.getJSON(`${baseUrl}${num}`);
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
getMultipleAgain()