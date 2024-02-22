function showCocktailDetails(cocktailName) {
    // Oculta todos los detalles de los cocteles
    var cocktailDetails = document.querySelectorAll('.cocktail-details');
    cocktailDetails.forEach(function(detail) {
        detail.style.display = 'none';
    });

    // Muestra los detalles del coctel seleccionado
    var selectedCocktail = document.getElementById(cocktailName + '-details');
    selectedCocktail.style.display = 'block';
} 