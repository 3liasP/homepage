function updateClock() {
    const currentTimeElement = document.getElementById('current-time');
    const welcomeMessageElement = document.getElementById('welcome-message');
    const currentTime = new Date();
    const hours = currentTime.getHours();

    let welcomeMessage = '';

    if (hours >= 0 && hours < 12) {
        welcomeMessage = 'Good morning, Elias!';
    } else if (hours >= 12 && hours < 18) {
        welcomeMessage = 'Good afternoon, Elias!';
    } else {
        welcomeMessage = 'Good evening, Elias!';
    }

    welcomeMessageElement.innerText = welcomeMessage;
    
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    currentTimeElement.innerText = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function searchGoogle() {
    const searchInput = document.getElementById('search-input');
    const searchQuery = searchInput.value;
    if (searchQuery) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchGoogle();
    }
}


// Update clock every second
setInterval(updateClock, 1000);

// Initial clock update
updateClock();

// Add event listener to the search input for Enter key press
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keypress', handleKeyPress);
