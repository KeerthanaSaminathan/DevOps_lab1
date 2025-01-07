const cards = [
    { id: 1, value: "A" },
    { id: 2, value: "B" },
    { id: 3, value: "C" },
    { id: 4, value: "D" },
    { id: 5, value: "E" },
    { id: 6, value: "F" },
    { id: 7, value: "G" },
    { id: 8, value: "H" },
    { id: 1, value: "A" },
    { id: 2, value: "B" },
    { id: 3, value: "C" },
    { id: 4, value: "D" },
    { id: 5, value: "E" },
    { id: 6, value: "F" },
    { id: 7, value: "G" },
    { id: 8, value: "H" }
];

let selectedCards = [];
let matchedPairs = 0;

function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function createCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-id", card.id);
        cardElement.onclick = () => flipCard(cardElement);
        cardContainer.appendChild(cardElement);
    });
}

function flipCard(cardElement) {
    if (selectedCards.length < 2 && !cardElement.classList.contains("matched") && !selectedCards.includes(cardElement)) {
        cardElement.textContent = cardElement.getAttribute("data-id");
        selectedCards.push(cardElement);
        if (selectedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.getAttribute("data-id") === card2.getAttribute("data-id")) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedPairs++;
        if (matchedPairs === cards.length / 2) {
            document.getElementById("message").textContent = "You won! All pairs matched!";
        }
    } else {
        setTimeout(() => {
            card1.textContent = "";
            card2.textContent = "";
        }, 1000);
    }
    selectedCards = [];
}

shuffleCards();
createCards();
