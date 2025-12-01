let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let cart = [];
let memberPoints = 0;

// ====== INI DITAMBAHKAN ======
let products = [];
let productsData = {
    lipstick: [
        {name:"Gloss Stick", price:25000, img:"LIPSTICK/Gloss Stick.jpeg"},
        {name:"Water Lip Tint", price:66000, img:"LIPSTICK/Water Lip Tint.jpeg"},
        {name:"Pink Lip Serum", price:70000, img:"LIPSTICK/Pink Lip Serum.jpeg"},
        {name:"Luscious Lipstick", price:79000, img:"LIPSTICK/Luscious Lipstick.jpeg"},
        {name:"Liquid Blush Rare Beauty", price:61000, img:"LIPSTICK/Liquid Blush Rare Beauty.jpeg"},
        {name:"Liptint Pudaier", price:53000, img:"LIPSTICK/Liptint Pudaier.jpeg"},
        {name:"Lipstick Wardah", price:49000, img:"LIPSTICK/Lipstick Wardah.jpeg"},
        {name:"Lipstick Sheglam", price:155000, img:"LIPSTICK/Lipstick Sheglam.jpeg"},
        {name:"Lipstick Maybelline", price:125000, img:"LIPSTICK/Lipstick Maybelline.jpeg"},
        {name:"Lip Tint Implora", price:20000, img:"LIPSTICK/Lip Tint Implora.jpeg"},
        {name:"Lip Tint Emina", price:49000, img:"LIPSTICK/Lip Tint Emina.jpeg"},
        {name:"Lip Tint Barenbliss", price:65000, img:"LIPSTICK/Lip Tint Barenbliss.jpeg"},
        {name:"Lip Serum Sheglam", price:120000, img:"LIPSTICK/Lip Serum Sheglam.jpeg"},
        {name:"Lip Serum Skintific", price:109000, img:"LIPSTICK/Lip Serum Skintific.jpeg"},
        {name:"Lip Polish 'Revlon'", price:106000, img:"LIPSTICK/Lip Polish 'Revlon'.jpeg"},
        {name:"Lip Maximizer Dior", price:720000, img:"LIPSTICK/Lip Maximizer Dior.jpeg"},
        {name:"Lip KrimPinkFlash", price:15000, img:"LIPSTICK/Lip KrimPinkFlash.jpeg"},
        {name:"Lip Krim OMG", price:33000, img:"LIPSTICK/Lip Krim OMG.jpeg"},
        {name:"Lip Krim Implora", price:27000, img:"LIPSTICK/Lip Krim Implora.jpeg"},
        {name:"Lip Krim Dior", price:610000, img:"LIPSTICK/Lip Krim Dior.jpeg"},
        {name:"Lip Krim Colorpop", price:120000, img:"LIPSTICK/Lip Krim Colorpop.jpeg"},
        {name:"Lip Krim Chanel", price:750000, img:"LIPSTICK/Lip Krim Chanel.jpeg"},
        {name:"Lip Krim Amuse", price:125000, img:"LIPSTICK/Lip Krim Amuse.jpeg"},
        {name:"Lip Krim Hanasui", price:35000, img:"LIPSTICK/Lip Hanasui.jpeg"},
        {name:"Lip Gloss Romand", price:248000, img:"LIPSTICK/Lip Gloss Romand.jpeg"},
        {name:"Lip Gloss Oil", price:720000, img:"LIPSTICK/Lip Gloss Oil.jpeg"},
        {name:"Lip Gloss Music Rose", price:65000, img:"LIPSTICK/Lip Gloss Music Rose.jpeg"},
        {name:"Lip gloss Dior", price:650000, img:"LIPSTICK/Lip gloss Dior.jpeg"},
        {name:"Lip Balm Pure paw paw", price:59000, img:"LIPSTICK/Lip Balm Pure paw paw.jpeg"},
        {name:"Lip Balm Kiko", price:86000, img:"LIPSTICK/Lip Balm Kiko.jpeg"},
        {name:"Lipstick Loreal", price:110000, img:"LIPSTICK/Lipstick Loreal.jpeg"},
        {name:"Lipstick Becca", price:510000, img:"LIPSTICK/Lipstick Becca.jpeg"},
        {name:"Lipkrim Rose All Day", price:83000, img:"LIPSTICK/Lipkrim Rose All Day.jpeg"},
        {name:"lipcrem Maybelline", price:83000, img:"LIPSTICK/lipcrem Maybelline.jpeg"},
        {name:"Lipstick INK", price:166000, img:"LIPSTICK/Lipstick INK.jpeg"},
        {name:"Lipstick PeriPera", price:150000, img:"LIPSTICK/Lipstick PeriPera.jpeg"},
    ],

    foundation: [
        {name:"Foundation Y.O.U", price:55000, img:"FOUNDATION/Foundation Y.O.U.jpeg"},
        {name:"IFoundation Wardah", price:87000, img:"FOUNDATION/Foundation Wardah.jpeg"},
        {name:"Foundation Studio Tropik", price:80000, img:"FOUNDATION/Foundation Studio Tropik.jpeg"},
        {name:"Foundation Skintific", price:231000, img:"FOUNDATION/Foundation Skintific.jpeg"},
        {name:"Foundation Revlon", price:175000, img:"FOUNDATION/Foundation Revlon.jpeg"},
        {name:"Foundation Pixy", price:30000, img:"FOUNDATION/Foundation Pixy.jpeg"},
        {name:"Foundation Pinkflash", price:45000, img:"FOUNDATION/Foundation Pinkflash.jpeg"},
        {name:"Foundation Note", price:80000, img:"FOUNDATION/Foundation Note.jpeg"},
        {name:"Foundation ND", price:73000, img:"FOUNDATION/Foundation ND.jpeg"},
        {name:"Foundation Nars", price:152000, img:"FOUNDATION/Foundation Nars.jpeg"},
        {name:"Foundation Meybelline", price:122000, img:"FOUNDATION/Foundation Meybelline.jpeg"},
        {name:"Foundation Marc Jacobs", price:90000, img:"FOUNDATION/Foundation Marc Jacobs.jpeg"},
        {name:"Foundation Make Up For Ever", price:113000, img:"FOUNDATION/Foundation Make Up For Ever.jpeg"},
        {name:"Foundation MAC studio", price:75000, img:"FOUNDATION/Foundation MAC studio.jpeg"},
        {name:"Foundation M.A.C", price:92000, img:"FOUNDATION/Foundation M.A.C.jpeg"},
        {name:"Foundation LauraMercier", price:156.000, img:"FOUNDATION/Foundation LauraMercier.jpeg"},
        {name:"Foundation Kosas", price:52000, img:"FOUNDATION/Foundation Kosas.jpeg"},
        {name:"Foundation KIKO milano", price:350000, img:"FOUNDATION/Foundation KIKO milano.jpeg"},
        {name:"Foundation Implora", price:45000, img:"FOUNDATION/Foundation Implora.jpeg"},
        {name:"Foundation HudaBeauty", price:8150000, img:"FOUNDATION/Foundation HudaBeauty.jpeg"},
        {name:"Foundation Haus Labs", price:950000, img:"FOUNDATION/Foundation Haus Labs.jpeg"},
        {name:"Foundation Gucci", price:950000, img:"FOUNDATION/Foundation Gucci.jpeg"},
        {name:"Foundation Givenchy", price:680000, img:"FOUNDATION/Foundation Givenchy.jpeg"},
        {name:"Foundation Giorgio Armani", price:800000, img:"FOUNDATION/Foundation Giorgio Armani.jpeg"},
        {name:"Foundation FlawLass", price:218000, img:"FOUNDATION/Foundation FlawLass.jpeg"},
        {name:"Foundation Fit Me", price:171000, img:"FOUNDATION/Foundation Fit Me.jpeg"},
        {name:"Foundation Fenty Beautyl", price:529000, img:"FOUNDATION/Foundation Fenty Beauty.jpeg"},
        {name:"Foundation Estee Lauder", price:655000, img:"FOUNDATION/Foundation Estee Lauder.jpeg"},
        {name:"Foundation e.l.f.", price:218000, img:"FOUNDATION/Foundation e.l.f.jpeg"},
        {name:"Foundation Dior", price:980000, img:"FOUNDATION/Foundation Dior.jpeg"},
        {name:"Foundation Chanel", price:80000, img:"FOUNDATION/Foundation Chanel.jpeg"},
        {name:"Foundation Born This Way", price:160000, img:"FOUNDATION/Foundation Born This Way.jpeg"},
        {name:"Foundation Bobbi Brown", price:80000, img:"FOUNDATION/Foundation Bobbi Brown.jpeg"},
        {name:"Foundation BeyondBlu", price:170000, img:"FOUNDATION/Foundation BeyondBlur.jpeg"},
        {name:"Foundation All Hours", price:150000, img:"FOUNDATION/Foundation All Hours.jpeg"},
        {name:"Stick Foundation", price:800000, img:"FOUNDATION/Stick Foundation.jpeg"},
    ],

    skincare: [
        {name:"Skintific", price:579000, img:"SKINCARE/Skintific.jpeg"},
        {name:"Facetology", price:13500, img:"SKINCARE/Facetology.jpeg"},
        {name:"Beauty Of Joseon", price:753000, img:"SKINCARE/Beauty Of Joseon.jpeg"},
        {name:"Wardah", price:200000, img:"SKINCARE/Wardah.jpeg"},
        {name:"Scora", price:100000, img:"SKINCARE/Scora.jpeg"},
        {name:"Scarlett", price:220000, img:"SKINCARE/Scarlett.jpeg"},
        {name:"Milk", price:110000, img:"SKINCARE/Milk.jpeg"},
        {name:"Medicube", price:850000, img:"SKINCARE/Medicube.jpeg"},
        {name:"Japan Sakura", price:400000, img:"SKINCARE/Japan Sakura.jpeg"},
        {name:"Glow Recipe", price:950000, img:"SKINCARE/Glow Recipe.jpeg"},
        {name:"Glad2Glow", price:250000, img:"SKINCARE/Glad2Glow.jpeg"},
        {name:"Fenty Skin", price:417000, img:"SKINCARE/Fenty Skin.jpeg"},
        {name:"Emina", price:200000, img:"SKINCARE/Emina.jpeg"},
        {name:"Dr.C.Tuna", price:130000, img:"SKINCARE/Dr.C.Tuna.jpeg"},
        {name:"Dear", price:220000, img:"SKINCARE/Dear.jpeg"},
        {name:"Daviena", price:346000, img:"SKINCARE/Daviena.jpeg"},
        {name:"Collagen Nutriplus", price:399000, img:"SKINCARE/Collagen Nutriplus.jpeg"},
        {name:"Ceramide", price:300000, img:"SKINCARE/Ceramide.jpeg"},
        {name:"Centella", price:500000, img:"SKINCARE/Centella.jpeg"},
        {name:"BioaQua", price:650000, img:"SKINCARE/BioaQua.jpeg"},
        {name:"Beauty Skin", price:720000, img:"SKINCARE/Beauty Skin.jpeg"},
        {name:"Garnier", price:500000, img:"SKINCARE/Garnier.jpeg"},
        {name:"e.i.f Skin", price:650000, img:"SKINCARE/e.i.f Skin.jpeg"},
        {name:"Grace And Glow", price:700000, img:"SKINCARE/Grace And Glow.jpeg"},
    ],

    aksesoris: [
        {name:"Bando Karakter", price:20000, img:"AKSESORIS/Bando Karakter.jpeg"},
        {name:"Sisir", price:30000, img:"AKSESORIS/Sisir.jpeg"},
        {name:"Anting Pita", price:25000, img:"AKSESORIS/Anting Pita.jpeg"},
        {name:"Beauty Blender", price:20000, img:"AKSESORIS/Beauty Blender.jpeg"},
        {name:"Scrunchie", price:10000, img:"AKSESORIS/Scrunchie.jpeg"},
        {name:"Pisau Cukur Alis", price:15000, img:"AKSESORIS/Pisau Cukur Alis.jpeg"},
        {name:"Peralatan Make Up", price:100000, img:"AKSESORIS/Peralatan Make Up.jpeg"},
        {name:"Cincin Manik-Manik", price:18000, img:"AKSESORIS/Cincin Manik-Manik.jpeg"},
        {name:"Penjepit Bulu Mata Magefy", price:35000, img:"AKSESORIS/Penjepit Bulu Mata Magefy.jpeg"},
        {name:"Penata Rambut VGR", price:300000, img:"AKSESORIS/Penata Rambut VGR.jpeg"},
        {name:"Cermin Rias Led", price:90000, img:"AKSESORIS/Cermin Rias Led.jpeg"},
        {name:"Kipas Mini", price:80000, img:"AKSESORIS/Kipas Mini.jpeg"},
        {name:"Kuku Palsu Primark", price:60000, img:"AKSESORIS/Kuku Palsu Primark.jpeg"},
        {name:"Kuas Makeup", price:190000, img:"AKSESORIS/Kuas Makeup.jpeg"},
        {name:"Jepit Rambut", price:10000, img:"AKSESORIS/Jepit Rambut.jpeg"},
        {name:"Cat Kuku Pillbox", price:500000, img:"AKSESORIS/Cat Kuku Pillbox.jpeg"},
        {name:"Mask  bowl", price:15000, img:"AKSESORIS/Mask  bowl.jpeg"},
        {name:"Catokan Rambut mini", price:90000, img:"AKSESORIS/Catokan Rambut mini.jpeg"},
        {name:"Jedai", price:5000, img:"AKSESORIS/Jedai.jpeg"},
        {name:"Kalung Mutiara", price:45000, img:"AKSESORIS/Kalung Mutiara.jpeg"},
        {name:"Hair Dryer", price:150000, img:"AKSESORIS/Hair Dryer.jpeg"},
        {name:"Gelang Manik-Manik", price:35000, img:"AKSESORIS/Gelang Manik-Manik.jpeg"},
        {name:"Gantungan Kunci", price:25000, img:"AKSESORIS/Gantungan Kunci.jpeg"},
        {name:"Cincin Permata", price:35000, img:"AKSESORIS/Cincin Permata.jpeg"},
    ]
};
// ====================================
//  LOGIN & REGISTER
// ====================================
function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

window.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartDisplay();

    if (currentUser) {
        loadUser();
    } else {
        document.getElementById("loginForm").style.display = "block";
    }
});


function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}
// ====== RENDER PRODUCTS ======
function renderProducts() {
    const homeContainer = document.getElementById("products");
    const lipstickContainer = document.getElementById("lipstickProducts");
    const foundationContainer = document.getElementById("foundationProducts");
    const skincareContainer = document.getElementById("skincareProducts");
    const aksesorisContainer = document.getElementById("aksesorisProducts");

    if (!homeContainer) return; // aman kalau elemen belum ada

    homeContainer.innerHTML = "";
    if (lipstickContainer) lipstickContainer.innerHTML = "";
    if (foundationContainer) foundationContainer.innerHTML = "";
    if (skincareContainer) skincareContainer.innerHTML = "";
    if (aksesorisContainer) aksesorisContainer.innerHTML = "";

    for (let category in productsData) {
        productsData[category].forEach((product, idx) => {
            // escape single quote in name to avoid JS string break
            const safeName = product.name.replace(/'/g, "\\'");
            const card = `
                <div class="product-card">
                    <img src="${product.img}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
                    <h4>${product.name}</h4>
                    <p>Rp ${product.price.toLocaleString()}</p>
                    <button onclick="addToCart('${category}', ${idx})">Tambah ke Keranjang</button>
                </div>
            `;
            homeContainer.innerHTML += card;
            if (category === "lipstick" && lipstickContainer) lipstickContainer.innerHTML += card;
            if (category === "foundation" && foundationContainer) foundationContainer.innerHTML += card;
            if (category === "skincare" && skincareContainer) skincareContainer.innerHTML += card;
            if (category === "aksesoris" && aksesorisContainer) aksesorisContainer.innerHTML += card;
        });
    }

    updateCartDisplay();
}

// ====== CART FUNCTIONS ======
function addToCart(category, index) {
    const product = productsData[category] && productsData[category][index];
    if (!product) return alert("Produk tidak ditemukan.");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    alert("Barang ditambahkan!");
}

function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const area = document.getElementById("cartItems");
    if (!area) return;
    area.innerHTML = "";
    let total = 0;
    cart.forEach((item, i) => {
        total += item.price;
        area.innerHTML += `
            <p>${item.name} - Rp ${item.price.toLocaleString()}
            <button onclick="removeItem(${i})">X</button></p>
        `;
    });
    const totalEl = document.getElementById("total");
    if (totalEl) totalEl.innerText = total.toLocaleString();
}

function checkout() {
    if (!currentUser) {
        alert("Silakan login dulu sebelum checkout!");
        return;
    }

    if (cart.length === 0) {
        alert("Keranjang kosong!");
        return;
    }

    if (!points[currentUser.username]) {
        points[currentUser.username] = 0;
    }

    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    let earnedPoints = Math.floor(totalPrice / 1000);

    points[currentUser.username] += earnedPoints;

    localStorage.setItem("points", JSON.stringify(points));
    localStorage.removeItem("cart");

    // clear cart display
    document.getElementById("cartItems").innerHTML = "<p>Keranjang kosong.</p>";

    cart = [];

    // ====== NO HP DAN EMAIL KAMU ======
    let adminWa = "628398748843";  
    let adminEmail = "nurkadri15072005@gmail.com";
    
    let message = `
Checkout Baru!
Nama Pembeli: ${currentUser.username}
Total Belanja: Rp${totalPrice}
Poin Didapat: ${earnedPoints}
Terima kasih telah berbelanja 💗
`.trim();

    // ====== LINK KOMUNIKASI ======
    let waURL = `https://api.whatsapp.com/send?phone=${adminWa}&text=${encodeURIComponent(message)}`;
    let emailURL = `mailto:${adminEmail}?subject=Checkout Baru&body=${encodeURIComponent(message)}`;

    // Pindahkan ke WhatsApp
    setTimeout(() => {
        window.location.href = waURL;
    }, 1000);

    // Popup untuk email
    setTimeout(() => {
        if(confirm("Checkout selesai! Kirim email ke admin juga?")){
            window.location.href = emailURL;
        }
    }, 2000);

    // Tanda visual sukses
    alert(`Checkout Berhasil 🎉\nKamu mendapatkan ${earnedPoints} poin.`);
}


// ====== AUTH ======
function showRegister() {
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function register() {
    const name = document.getElementById("registerName").value.trim();
    const username = document.getElementById("registerUsername").value.trim();
    const password = document.getElementById("registerPassword").value;
    if (!name || !username || !password) return alert("Harus diisi semua!");
    if (users.find(u => u.username === username)) return alert("Username sudah digunakan!");
    users.push({ name, username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Berhasil daftar! Silakan Login");
    showLogin();
}

function login() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return alert("Username/Password salah!");
    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    if (!points[currentUser.username]) points[currentUser.username] = 0;
    localStorage.setItem("points", JSON.stringify(points));
    loadUser();
}

function logout() {
    currentUser = null;
    localStorage.removeItem("currentUser");
    // do not clear points/users/cart
    location.reload();
}

function loadUser() {
    if (!currentUser) return;
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const mainApp = document.getElementById("mainApp");
    if (loginForm) loginForm.style.display = "none";
    if (registerForm) registerForm.style.display = "none";
    if (mainApp) mainApp.style.display = "block";

    const userNameEl = document.getElementById("userName");
    const memberNameEl = document.getElementById("memberName");
    const memberPointsEl = document.getElementById("memberPoints");
    if (userNameEl) userNameEl.innerText = currentUser.name;
    if (memberNameEl) memberNameEl.innerText = currentUser.name;
    if (memberPointsEl) memberPointsEl.innerText = points[currentUser.username] || 0;
}

// ====== NAV ======
function showPage(page) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    const el = document.getElementById(page);
    if (el) el.style.display = "block";
}
function highlightPage(button) {
    document.querySelectorAll(".nav-menu button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

// ====== INIT ON LOAD ======
window.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartDisplay();
    if (currentUser) loadUser();
});