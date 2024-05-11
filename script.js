document.addEventListener('DOMContentLoaded', function() {
    // Get all movie posters
    const moviePosters = document.querySelectorAll('.movie-poster');

    // Add click event listener to each movie poster
    moviePosters.forEach(poster => {
        poster.addEventListener('click', function() {
            const title = poster.dataset.title;
            const description = poster.dataset.description;

            // Display movie information (e.g., in alert or modal)
            alert(`${title}: ${description}`);
        });
    });

    // Search form submission
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value;

        // Handle search term (e.g., perform search action)
        alert(`Searching for: ${searchTerm}`);
    });
});
