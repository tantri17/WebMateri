// Menangani klik pada metode pembayaran
const paymentButtons = document.querySelectorAll('.payment-methods button');
paymentButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Menghapus kelas 'active' dari semua tombol
        paymentButtons.forEach(btn => btn.classList.remove('active'));
        // Menambahkan kelas 'active' pada tombol yang dipilih
        event.target.classList.add('active');
    });
});

// Fungsi untuk menghitung total pembayaran
function calculateTotal() {
    const productPrices = document.querySelectorAll('.product-quantity');
    let productTotal = 0;
    
    productPrices.forEach(priceElement => {
        const price = parseInt(priceElement.textContent.replace('Rp. ', '').replace(',', ''));
        productTotal += price;
    });
    
    const shippingTotal = 0; // Pengiriman gratis
    const handlingFee = 0;   // Biaya penanganan gratis
    const totalPayment = productTotal + shippingTotal + handlingFee;
    
    // Memperbarui tampilan harga
    const totalPriceElement = document.querySelector('.payment-summary .total span:last-child');
    totalPriceElement.textContent = `Rp. ${totalPayment.toLocaleString()}`;
    
    // Memperbarui subtotal produk
    const productSubtotal = document.querySelector('.payment-summary p:first-child span:last-child');
    productSubtotal.textContent = `Rp. ${productTotal.toLocaleString()}`;
    
    // Memperbarui subtotal pengiriman
    const shippingSubtotal = document.querySelector('.payment-summary p:nth-child(2) span:last-child');
    shippingSubtotal.textContent = `Rp. ${shippingTotal.toLocaleString()}`;
    
    // Memperbarui biaya penanganan
    const handlingSubtotal = document.querySelector('.payment-summary p:nth-child(3) span:last-child');
    handlingSubtotal.textContent = `Rp. ${handlingFee.toLocaleString()}`;
}

// Menangani klik pada tombol checkout
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.addEventListener('click', () => {
    alert('Pembayaran Berhasil!');
});

// Memanggil fungsi calculateTotal untuk memperbarui harga saat halaman dimuat
calculateTotal();
