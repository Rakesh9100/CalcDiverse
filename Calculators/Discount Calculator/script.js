function calculateDiscount() {
    var originalPrice = parseFloat(document.getElementById('originalPrice').value);
    var discountPercentage = parseFloat(document.getElementById('discountPercentage').value);

    if (isNaN(originalPrice) || isNaN(discountPercentage)) {
        alert('Please enter valid numbers for original price and discount percentage.');
        return;
    }

    var discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));

    document.getElementById('result').innerHTML = 'Discounted Price: ₹' + discountedPrice.toFixed(2);
}
