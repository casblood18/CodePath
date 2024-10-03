function getCardIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

async function fetchCardDetail() {
    const cardId = getCardIdFromUrl();
    if (!cardId) {
        document.getElementById('card-detail').innerHTML = '<p>Card ID not found.</p>';
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/cards`); 
        const cards = await response.json();
        const card = cards[cardId-1];

        const cardDetailContainer = document.getElementById('card-detail');
        cardDetailContainer.innerHTML = `
        <h3 class="card-title">${card.title}</h3>
        <img class="card-image" src=${card.img} ></img>
        <p class="card-diff"> <strong>Difficulty: </strong>${card.difficulty}</p> 
        <p class="card-diff"> <strong>Location: </strong>${card.location}</p>
        <p class="card-des">${card.description}</p>
        `;
    } catch (error) {
        console.error('Error fetching card details:', error);
        document.getElementById('card-detail').innerHTML = '<p>Error loading card details.</p>';
    }
}

fetchCardDetail();