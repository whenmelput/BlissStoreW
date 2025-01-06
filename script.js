let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('totalPrice').textContent = `Total: Rp ${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang belanja Anda kosong!');
    } else {
        alert('Terima kasih telah berbelanja!');
        cart = [];
        total = 0;
        updateCart();
    }
}

// Menambahkan efek kotak saat mengklik menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        // Menghapus kelas aktif dari semua link
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        // Menambahkan kelas aktif ke link yang diklik
        this.classList.add('active');
    });
});