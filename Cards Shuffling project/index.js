const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const cardContainer = document.getElementById('cardContainer');
const shuffleBtn = document.getElementById('shuffleBtn');

function displayCards(deck) {
    cardContainer.innerHTML = '';
    deck.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.textContent = card;
        cardContainer.appendChild(cardDiv);
    });
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[random]] = [deck[random], deck[i]];
    }
}

shuffleBtn.addEventListener('click', () => {
    shuffle(cards);
    displayCards(cards);
});


displayCards(cards);
