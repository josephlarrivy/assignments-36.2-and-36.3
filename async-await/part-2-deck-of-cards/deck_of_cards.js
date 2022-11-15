// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck.Once you have the card, console.log the value and the suit(e.g. “5 of spades”, “queen of diamonds”).

// Make a request to the deck of cards API to request a single card from a newly shuffled deck.Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.

// Build an HTML page that lets you draw cards from a deck.When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card.Every time you click the button, display a new card, until there are no cards left in the deck.


$(function () {
    let baseUrl = 'https://deckofcardsapi.com/api/deck/';

    async function requestOne() {
        let resp = await $.getJSON(`${baseUrl}new/draw/`);
        let {suit,value} = resp.cards[0];
        console.log(`${value} of ${suit}`);
    }

    async function requestTwo() {
        let firstCard = await $.getJSON(`${baseUrl}new/draw/`);
        let deckId = firstCard.deck_id;
        let secondCard = await $.getJSON(`${baseUrl}${deckId}/draw`);
        cardData = [firstCard, secondCard];
        for (data in cardData) {
            let {suit,value} = data.cards;
            console.log(`${value} of ${suit}`)
        }
    }

    async function part3() {
        let $button = $('button');
        let $cardArea = $('#card-area');

        let deckData = await $.getJSON(`${baseUrl}new/shuffle/`);
        $button.show().on('click', async function () {
            let cardData = await $.getJSON(`${baseUrl}${deckData.deck_id}/draw/`);
            let image = cardData.cards[0].image;
            $cardArea.append(
                $('<img>', {
                    src: image,
                })
            );
            if (cardData.remaining === 0) $button.remove();
        });
    }
    part3();
});