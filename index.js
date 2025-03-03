document.getElementById('search-bar').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach(product => {
        let productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
