const CART_KEY = "vlora_cart";

// on classer les image avec ces noms
const PRODUCTS = [
  //parfum
  { id: "p1", name: " Si", category: "parfum", price: 4500, img: "../images/parfum/p1.jpg" },
  { id: "p2", name: " Chance Eau Tendre", category: "parfum", price: 5200, img: "../images/parfum/p2.jpg" },
  { id: "p3", name: " Chance ", category: "parfum", price: 4500, img: "../images/parfum/p3.jpg" },
  { id: "p4", name: " Coco Mademoiselle ", category: "parfum", price: 5200, img: "../images/parfum/p4.jpg" },
  { id: "p5", name: " Miss Dior", category: "parfum", price: 4500, img: "../images/parfum/p5.jpg" },
  { id: "p6", name: " Ce Que Je Port", category: "parfum", price: 5200, img: "../images/parfum/p6.jpg" },
  { id: "p7", name: "amirate al arabe", category: "parfum", price: 4500, img: "../images/parfum/p7.jpg" },
  { id: "p8", name: "Prada Paradoxe", category: "parfum", price: 5200, img: "../images/parfum/p8.jpg" },
  { id: "p9", name: " My Way", category: "parfum", price: 4500, img: "../images/parfum/p9.jpg" },
  { id: "p10", name: " Y-ves Saint Laurent", category: "parfum", price: 5200, img: "../images/parfum/p10.jpg" },
  { id: "p11", name: "Idole", category: "parfum", price: 4500, img: "../images/parfum/p11.jpg"},
 
  //serume
  { id: "s1", name: "Centella Hyalu-Cica", category: "serum", price: 3200, img: "../images/serum/s1.jpg" },
  { id: "s2", name: "The Ordinary-Hyaluronic Acid 2% + B5'", category: "serum", price: 3600, img: "../images/serum/s2.jpg" },
  { id: "s3", name: "Garnier- Vitamine C Brightening Serum", category: "serum", price: 3200, img: "../images/serum/s3.jpg" },
  { id: "s4", name: "The Ordinary -Vitamin C Suspension", category: "serum", price: 3600, img: "../images/serum/s4.jpg" },
  { id: "s5", name: "Anua-Peach 70 Niacin Serum (Vitamine C)", category: "serum", price: 3200, img: "../images/serum/s5.jpg" },
  { id: "s6", name: "La Roche-Posay-Hyalu B5 Serum", category: "serum", price: 3600, img: "../images/serum/s6.jpg" },
  { id: "s7", name: "Sérum Vitamine C", category: "serum", price: 3200, img: "../images/serum/s7.jpg" },
  { id: "s8", name: "Sérum Hyaluron", category: "serum", price: 3600, img: "../images/serum/s8.jpg" },
  { id: "s9", name: "Sérum Vitamine C", category: "serum", price: 3200, img: "../images/serum/s9.jpg" },
  { id: "s10", name: "The Ordinary Hyaluronic Acid 2% + B5", category: "serum", price: 3600, img: "../images/serum/s10.jpg" },

 //brume
  { id: "b1", name: "Brume Fleurie", category: "brume", price: 1800, img: "../images/brume/b1.jpg" },
  { id: "b2", name: "EVORIA Green Edition ", category: "brume", price: 2000, img: "../images/brume/b2.jpg" },
  { id: "b3", name: "EVORIA Floral Body Mist", category: "brume", price: 1800, img: "../images/brume/b3.jpg" },
  { id: "b4", name: "Monoi Sauvage", category: "brume", price: 2000, img: "../images/brume/b4.jpg" },
  { id: "b5", name: "Victoria's secret Conconut Passion", category: "brume", price: 1800, img: "../images/brume/b5.jpg" },
  { id: "b6", name: "Victoria's secret Midnight Bloom ", category: "brume", price: 2000, img: "../images/brume/b6.jpg" },
  { id: "b7", name: "Victoria's secret Lavender et Vanilla", category: "brume", price: 1800, img: "../images/brume/b7.jpg" },
  { id: "b8", name: "Victoria's secret Love Spell ", category: "brume", price: 2000, img: "../images/brume/b8.jpg" },
  { id: "b9", name: "Victoria's secret Lush Cherry", category: "brume", price: 1800, img: "../images/brume/b9.jpg" },
  { id: "b10", name: "Victoria's secret Bare Vanilla ", category: "brume", price: 2000, img: "../images/brume/b10.jpg" },
  { id: "b11", name: "Victoria's secret Promigranate et Lotu ", category: "brume", price: 1800, img: "../images/brume/b11.jpg" },
  { id: "b12", name: "Victoria's secret Tize Sharchabil", category: "brume", price: 2000, img: "../images/brume/b12.jpg" },
 
 //creme
  { id: "c1", name: "Anua creme", category: "creme", price: 2900, img: "../images/creme/c1.jpg" },
  { id: "c2", name: "Diadearmine", category: "creme", price: 3100, img: "../images/creme/c2.jpg" },
  { id: "c3", name: "Chanel", category: "creme", price: 2900, img: "../images/creme/c3.jpg" },
  { id: "c4", name: "Avene", category: "creme", price: 3100, img: "../images/creme/c4.jpg" },
  { id: "c5", name: "Ordinary creme", category: "creme", price: 2900, img: "../images/creme/c5.jpg" },
  { id: "c6", name: "Hydra Vegitale", category: "creme", price: 3100, img: "../images/creme/c6.jpg" },
  { id: "c7", name: "ACM creme", category: "creme", price: 2900, img: "../images/creme/c7.jpg" },
  { id: "c8", name: "Roche Posay - creme soleir", category: "creme", price: 3100, img: "../images/creme/c8.jpg" },
  { id: "c9", name: "Eucerine -creme soleir", category: "creme", price: 2900, img: "../images/creme/c9.jpg" },
  { id: "c10", name: "creme soleir", category: "creme", price: 3100, img: "../images/creme/c10.jpg" },
];

// ---------- Panier ----------
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartCount(cart) {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
  const el = document.getElementById("cartCount");
  if (!el) return;

  const count = cartCount(loadCart());
  el.textContent = String(count);

  //  si panier > 0
  if (count > 0) el.classList.add("has-items");
  else el.classList.remove("has-items");
}

function addToCart(productId) {
  const cart = loadCart();
  const found = cart.find((x) => x.id === productId);
  if (found) found.qty += 1;
  else cart.push({ id: productId, qty: 1 });
  saveCart(cart);
  updateCartBadge();
}

// ---------- Outils ----------
function formatPrice(n) {
  return n.toLocaleString("fr-FR") + " DA";
}

function labelCategory(cat) {
  const map = { parfum: "Parfums", serum: "Sérums", brume: "Brumes", creme: "Crèmes" };
  return map[cat] || cat;
}

// ---------- Page Produits ----------
function renderProductsPage() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");

  // Récupère la catégorie dans l'URL si elle existe
  const urlParams = new URLSearchParams(window.location.search);
  const urlCat = urlParams.get("cat"); // "parfum", "serum", etc.

  if (categorySelect && urlCat) {
    categorySelect.value = urlCat; // met à jour le select
  }

  function applyFilters() {
    const q = (searchInput ? searchInput.value : "").toLowerCase().trim();
    const cat = categorySelect ? categorySelect.value : "all";

    const filtered = PRODUCTS.filter((p) => {
      const okText = p.name.toLowerCase().includes(q);
      const okCat = cat === "all" || p.category === cat;
      return okText && okCat;
    });

    grid.innerHTML = filtered
      .map((p) => `
        <article class="product-card">
          <div class="product-img" style="background-image:url('${p.img}')"></div>
          <div class="product-body">
            <h3 class="product-title">${p.name}</h3>
            <p class="muted">Catégorie : ${labelCategory(p.category)}</p>
            <div class="product-row">
              <span class="price">${formatPrice(p.price)}</span>
              <button class="btn-add" data-add="${p.id}">Ajouter</button>
            </div>
          </div>
        </article>
      `)
      .join("");

    grid.querySelectorAll("[data-add]").forEach((btn) => {
      btn.addEventListener("click", () => {
        addToCart(btn.getAttribute("data-add"));
      });
    });
  }

  if (searchInput) searchInput.addEventListener("input", applyFilters);
  if (categorySelect) categorySelect.addEventListener("change", applyFilters);

  applyFilters();
}


// ---------- Page Panier ----------
function renderCartPage() {
  const container = document.getElementById("cartContainer");
  const totalEl = document.getElementById("cartTotal");
  const clearBtn = document.getElementById("clearCartBtn");
  if (!container || !totalEl) return;

  const SHIPPING_KEY = "vlora_shipping"; // pour sauvgarder la livraison
  const cart = loadCart();

  // ------ lire le choix de utilisateur de livraison ------
  function getSelectedShipping() {
    const saved = Number(localStorage.getItem(SHIPPING_KEY) || 0);
    const radios = document.querySelectorAll('input[name="shipping"]');
    if (!radios.length) return saved;

    // on prend le choix de utilisateur et l'afficher
    let v = saved;
    radios.forEach((r) => {
      if (r.checked) v = Number(r.value);
    });
    return v;
  }

  // on applique le choix de livraison
  function applyShippingValue(value) {
    const radios = document.querySelectorAll('input[name="shipping"]');
    if (!radios.length) return;

    let found = false;
    radios.forEach((r) => {
      if (Number(r.value) === Number(value)) {
        r.checked = true;
        found = true;
      }
    });

    // si rien trouvé on coche le premier
    if (!found) radios[0].checked = true;
  }

  // si le panier vide
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <p class="muted">Votre panier est vide. <a href="produits.html">Voir les produits</a></p>
      </div>
    `;
    totalEl.textContent = "0 DA";
    updateCartBadge();

    // livraison par defaut est standart
    localStorage.setItem(SHIPPING_KEY, "0");
    applyShippingValue(0);

    if (clearBtn) clearBtn.onclick = null;
    return;
  }

  // rendre itemes
  let totalProducts = 0;

  container.innerHTML = cart
    .map((item) => {
      const p = PRODUCTS.find((x) => x.id === item.id);
      if (!p) return "";

      const line = p.price * item.qty;
      totalProducts += line;

      const img = (typeof imgPath === "function") ? imgPath(p) : p.img;

      return `
        <div class="cart-item">
          <div class="cart-thumb" style="background-image:url('${img}')"></div>

          <div class="cart-info">
            <h3 class="cart-title">${p.name}</h3>
            <p class="muted">${formatPrice(p.price)} × ${item.qty}</p>

            <div class="cart-actions">
              <button class="btn btn-small" data-dec="${p.id}">−</button>
              <span class="qty">${item.qty}</span>
              <button class="btn btn-small" data-inc="${p.id}">+</button>
              <button class="btn btn-outline btn-small" data-remove="${p.id}">Supprimer</button>
            </div>
          </div>

          <div class="cart-line">${formatPrice(line)}</div>
        </div>
      `;
    })
    .join("");

  // Livraison
  // on applique la valeur sauvegardée au chargement
  const savedShipping = Number(localStorage.getItem(SHIPPING_KEY) || 0);
  applyShippingValue(savedShipping);

  // on calcule livraison depuis le choix
  let shippingCost = getSelectedShipping();

  // prix totale
  totalEl.textContent = formatPrice(totalProducts + shippingCost);

  // si il ya changement livraison 
  const shippingRadios = document.querySelectorAll('input[name="shipping"]');
  shippingRadios.forEach((radio) => {
    radio.onchange = () => {
      localStorage.setItem(SHIPPING_KEY, String(Number(radio.value)));
      renderCartPage();
    };
  });

  // ------ +1 ------
  container.querySelectorAll("[data-inc]").forEach((b) => {
    b.onclick = () => {
      const id = b.getAttribute("data-inc");
      const cart2 = loadCart();
      const it = cart2.find((x) => x.id === id);
      if (it) it.qty += 1;
      saveCart(cart2);
      updateCartBadge();
      renderCartPage();
    };
  });

  // ------ -1 ------
  container.querySelectorAll("[data-dec]").forEach((b) => {
    b.onclick = () => {
      const id = b.getAttribute("data-dec");
      let cart2 = loadCart();
      const it = cart2.find((x) => x.id === id);
      if (it) it.qty -= 1;
      cart2 = cart2.filter((x) => x.qty > 0);
      saveCart(cart2);
      updateCartBadge();
      renderCartPage();
    };
  });

  // si on supprime un produit 
  container.querySelectorAll("[data-remove]").forEach((b) => {
    b.onclick = () => {
      const id = b.getAttribute("data-remove");
      const cart2 = loadCart().filter((x) => x.id !== id);
      saveCart(cart2);
      updateCartBadge();
      renderCartPage();
    };
  });

  // on vider le panier
  if (clearBtn) {
    clearBtn.onclick = () => {
      saveCart([]);
      localStorage.setItem(SHIPPING_KEY, "0"); // reset livraison
      updateCartBadge();
      renderCartPage();
    };
  }
// pour confirmer la commande
const shipping = Number(localStorage.getItem(SHIPPING_KEY) || 0);
const checkoutBtn = document.getElementById("checkoutBtn");
const msgEl = document.getElementById("orderMsg");

if (checkoutBtn) {
  checkoutBtn.onclick = () => {
    const cartNow = loadCart();
    if (!cartNow.length) return;

    // recalcule le totale finale
    const subtotal = cartNow.reduce((sum, it) => {
      const p = PRODUCTS.find(x => x.id === it.id);
      return sum + (p ? p.price * it.qty : 0);
    }, 0);

    const SHIPPING_KEY = "vlora_shipping";
    const shipping = Number(localStorage.getItem(SHIPPING_KEY) || 0);
    const grandTotal = subtotal + shipping;

    // afficher le message que la commande est confirmer
    if (msgEl) {
      msgEl.style.display = "block";
      msgEl.textContent =
        " Commande confirmée ! Total : " + formatPrice(grandTotal);
    }
  };
}
}

//initialisation
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  renderProductsPage();
  renderCartPage();
});

//connexion

const USERS_KEY = "vlora_users";
const CURRENT_USER_KEY = "vlora_current_user";

function loadUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
  catch { return []; }
}

function saveCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function initLoginPage() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");
  const msg = document.getElementById("loginMsg");

  const errEmail = document.getElementById("err-loginEmail");
  const errPw = document.getElementById("err-loginPassword");

  function clear() {
    if (errEmail) errEmail.textContent = "";
    if (errPw) errPw.textContent = "";
    if (msg) { msg.textContent = ""; msg.className = "auth-msg"; }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clear();

    const vEmail = (email.value || "").trim().toLowerCase();
    const vPw = password.value || "";

    let ok = true;

    if (!vEmail) { errEmail.textContent = "L’email est obligatoire."; ok = false; }
    else if (!isEmailValid(vEmail)) { errEmail.textContent = "Email invalide."; ok = false; }

    if (!vPw) { errPw.textContent = "Le mot de passe est obligatoire."; ok = false; }

    if (!ok) return;

    const users = loadUsers();
    const found = users.find(u => (u.email || "").toLowerCase() === vEmail);

    if (!found) {
      msg.classList.add("bad");
      msg.textContent = "Aucun compte trouvé avec cet email.";
      return;
    }

    if (found.password !== vPw) {
      msg.classList.add("bad");
      msg.textContent = "Mot de passe incorrect.";
      return;
    }

    saveCurrentUser({ id: found.id, name: found.name, email: found.email });

    msg.classList.add("ok");
    msg.textContent = "Connexion réussie ";

    setTimeout(() => {
      window.location.href = "produits.html";
    }, 700);
  });

  [email, password].forEach((inp) => inp.addEventListener("input", clear));
}

document.addEventListener("DOMContentLoaded", () => {
  initLoginPage();
});

//inscription
function loadUsers(){
  try{ return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
  catch{ return []; }
}

function saveUsers(users){
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function isEmailValid(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initRegisterPage(){
  const form = document.getElementById("registerForm");
  if(!form) return;

  const prenom = document.getElementById("prenom");
  const nom = document.getElementById("nom");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");

  const ePrenom = document.getElementById("err-prenom");
  const eNom = document.getElementById("err-nom");
  const eEmail = document.getElementById("err-email");
  const ePw = document.getElementById("err-password");
  const eConfirm = document.getElementById("err-confirm");
  const msg = document.getElementById("registerMsg");

  function clear(){
    ePrenom.textContent="";
    eNom.textContent="";
    eEmail.textContent="";
    ePw.textContent="";
    eConfirm.textContent="";
    msg.textContent="";
    msg.className="auth-msg";
  }

  form.addEventListener("submit", e=>{
    e.preventDefault();
    clear();

    let ok=true;

    if(!prenom.value.trim()){ ePrenom.textContent="Prénom obligatoire"; ok=false; }
    if(!nom.value.trim()){ eNom.textContent="Nom obligatoire"; ok=false; }

    if(!email.value.trim()){ eEmail.textContent="Email obligatoire"; ok=false; }
    else if(!isEmailValid(email.value)){ eEmail.textContent="Email invalide"; ok=false; }

    if(password.value.length<8){ ePw.textContent="Minimum 8 caractères"; ok=false; }
    if(confirm.value!==password.value){ eConfirm.textContent="Les mots de passe ne correspondent pas"; ok=false; }

    if(!ok) return;

    const users = loadUsers();
    if(users.some(u=>u.email===email.value)){
      eEmail.textContent="Email déjà utilisé";
      return;
    }

    users.push({
      id: Date.now(),
      name: prenom.value+" "+nom.value,
      email: email.value,
      password: password.value
    });

    saveUsers(users);

    msg.classList.add("ok");
    msg.textContent="Inscription réussie ";

    setTimeout(()=>{
      window.location.href="connexion.html";
    },900);
  });

  [prenom,nom,email,password,confirm].forEach(i=>{
    i.addEventListener("input", clear);
  });
}
document.addEventListener("DOMContentLoaded", initRegisterPage);

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});



