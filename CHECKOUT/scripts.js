// Menangani tombol untuk menutup modal
const closeButton = document.querySelector('.close-btn');
const cartModal = document.querySelector('.cart-modal');

// Fungsi untuk menutup modal
closeButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Menangani tombol untuk menambah dan mengurangi jumlah produk
const increaseButtons = document.querySelectorAll('.increase-btn');
const decreaseButtons = document.querySelectorAll('.decrease-btn');
const quantityValues = document.querySelectorAll('.quantity-value');
const subtotalAmount = document.querySelector('.subtotal-amount');

// Fungsi untuk memperbarui subtotal
function updateSubtotal() {
    let total = 0;
    // Mengambil harga dari setiap item dan jumlah
    const items = document.querySelectorAll('.cart-item');
    items.forEach((item, index) => {
        const price = parseInt(item.querySelector('.item-price').textContent.replace('.', ''));
        const quantity = parseInt(quantityValues[index].textContent);
        total += price * quantity;
    });

    // Memperbarui subtotal
    subtotalAmount.textContent = total.toLocaleString();
}

// Event listener untuk tombol tambah jumlah
increaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantity = quantityValues[index];
        let currentQuantity = parseInt(quantity.textContent);
        quantity.textContent = currentQuantity + 1;
        updateSubtotal(); // Memperbarui subtotal setelah perubahan jumlah
    });
});

// Event listener untuk tombol kurangi jumlah
decreaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantity = quantityValues[index];
        let currentQuantity = parseInt(quantity.textContent);
        if (currentQuantity > 1) { // Mencegah jumlah menjadi kurang dari 1
            quantity.textContent = currentQuantity - 1;
            updateSubtotal(); // Memperbarui subtotal setelah perubahan jumlah
        }
    });
});

// Menangani tombol checkout
const checkoutButton = document.querySelector('.checkout-btn');
checkoutButton.addEventListener('click', () => {
    alert('Checkout berhasil!'); // Tombol checkout sementara hanya menampilkan pesan
    // Di sini Anda dapat menambahkan logika untuk melanjutkan ke halaman checkout atau proses pembayaran
});

// Menampilkan modal keranjang ketika halaman dimuat
window.addEventListener('load', () => {
    cartModal.style.display = 'block'; // Menampilkan modal keranjang pada saat halaman dimuat
});
