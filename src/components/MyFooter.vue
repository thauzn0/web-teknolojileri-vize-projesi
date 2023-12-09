<template>
  <footer class="main-footer">
    <div
      class="logo-text-container"
      style="display: flex; justify-content: center"
    >
      <div class="logo-item" style="text-align: center; margin-left: 0 50px">
        <img
          src="../assets/ss.webp"
          alt="SSL Logo"
          style="width: 50px; margin-bottom: 10px"
        />
        <p style="color: white">256 Bit SSL ile güvende alışveriş</p>
      </div>
      <div class="logo-item" style="text-align: center; margin-left: 0 100px">
        <img
          src="../assets/kargo.webp"
          alt="Free Shipping Logo"
          style="width: 50px; margin-bottom: 10px"
        />
        <p style="color: white">Türkiye içi kargo bedava</p>
      </div>
      <div class="logo-item" style="text-align: center; margin: 0 100px">
        <img
          src="../assets/c.webp"
          alt="Custom Products Logo"
          style="width: 50px; margin-bottom: 10px"
        />
        <p style="color: white">Kişiye özel ürünler</p>
      </div>
    </div>

    <!-- Koleksiyon, Hesabım, Hakkımızda, Destek -->
    <div class="footer-sections-container">
      <!-- Koleksiyon -->
      <div class="footer-section">
        <h4 style="color: white; font-size: 16px">Koleksiyon</h4>
        <ul>
          <li>
            <router-link
              to="/jewelry/rings"
              style="color: white; font-size: 14px"
              >The Berserkir</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Hesabım -->
      <div class="footer-section">
        <h4 style="color: white; font-size: 16px">Hesabım</h4>
        <ul>
          <li>
            <router-link to="/login" style="color: white; font-size: 14px"
              >Giriş Yap</router-link
            >
          </li>
          <li>
            <router-link to="/register" style="color: white; font-size: 14px"
              >Kayıt Ol</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Hakkımızda -->
      <div class="footer-section">
        <h4 style="color: white; font-size: 16px">Hakkımızda</h4>
        <ul>
          <li>
            <router-link to="/contact" style="color: white; font-size: 14px"
              >İletişim</router-link
            >
          </li>
          <li>
            <router-link to="/faq" style="color: white; font-size: 14px"
              >S.S.S.</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Destek -->
      <div class="footer-section">
        <h4 style="color: white; font-size: 16px">Destek</h4>
        <ul>
          <li>
            <router-link
              to="/shipping-returns"
              style="color: white; font-size: 14px"
              >Kargo ve İade</router-link
            >
          </li>
          <li>
            <router-link
              to="/privacy-policy"
              style="color: white; font-size: 14px"
              >Gizlilik Sözleşmesi</router-link
            >
          </li>
          <li>
            <router-link
              to="/terms-of-use"
              style="color: white; font-size: 14px"
              >Kullanıcı Sözleşmesi</router-link
            >
          </li>
          <li>
            <router-link
              to="/distance-selling"
              style="color: white; font-size: 14px"
              >Mesafeli Satış Sözleşmesi</router-link
            >
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <img
          src="../assets/jaho33.webp"
          alt="Instagram Logo"
          style="width: 200px; margin-right: 30px"
        />
      </div>
    </div>

    <!-- Social Media and Payment Logos -->
    <div class="bottom-section">
      <div class="social-media-section">
        <a href="https://www.instagram.com/" target="_blank">
          <img
            src="../assets/insta_Background_Removed.png"
            alt="Instagram Logo"
            style="width: 30px; margin-right: 10px"
          />
        </a>
      </div>
      <div class="payment-logos-section">
        <img
          src="../assets/Visa.svg"
          alt="Visa Logo"
          style="width: 40px; margin-right: ; margin-left: 1500px"
        />
        <img
          src="../assets/Maestro.svg"
          alt="Mastercard Logo"
          style="width: 40px; margin-left: 10px"
        />
        <img
          src="../assets/Mastercard.svg"
          alt="Mastercard Logo"
          style="width: 40px"
        />
      </div>
      <div class="copyright-section">
        <p style="color: white; margin-right: 1500px; font-size: 14px">
          @2023 Tüm Hakları Saklıdır.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  // Gerekirse bileşenlerinizi buraya ekleyebilirsiniz
};
</script>

<style>
.logo-text-container {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.logo-item {
  text-align: center;
  flex: 1; /* Logoların eşit genişlikte olmasını sağlar */
  margin: 0 20px; /* Logolar arasına boşluk ekler */
}

.main-footer {
  background-color: black;
  color: white;
  padding: 20px;
}

.footer-sections-container {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
}

.social-media-section,
.payment-logos-section {
  display: flex;
  align-items: center;
  margin-right: 50px;
}

.payment-logos-section img {
  margin-right: 10px;
}

.copyright-section {
  text-align: center;
}
.footer-section ul {
  padding: 0;
  list-style: none;
}

.footer-section ul p {
  color: white;
  font-size: 14px;
  text-decoration: none; /* Alt çizgiyi kaldırır */
  cursor: pointer; /* Fare üzerine gelince el işareti çıkar */
  margin-bottom: 5px;
  transition: color 0.3s; /* Renk değişimini yumuşatır */
}

.footer-section ul p:hover {
  color: lightgray; /* Üzerine gelince rengi değiştirir */
}
</style>
