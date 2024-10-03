async function fetchCardDetails() {
    try {
        const response = await fetch('http://localhost:3000/cards');
        const cards = await response.json();

        const cardContainer = document.getElementById('card-container');

        cards.forEach(card => {
            const cardElement = document.createElement('div');

            cardElement.addEventListener('click', () => {
                window.location.href = `card.html?id=${card.id}`;
                });

            cardElement.classList.add('card');
            cardElement.innerHTML = `
                <img class="fish" src=${card.img} ></img>
                <h3 class="fish-text">${card.title}</h3>
            `;
            cardContainer.appendChild(cardElement);
        });
        } catch (error) {
        console.error('Error fetching card details:', error);
        }
    }

    fetchCardDetails();