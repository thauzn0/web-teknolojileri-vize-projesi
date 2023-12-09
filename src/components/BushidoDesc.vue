<template>
  <div>
    <div class="additional-text">
      <p class="title-text">
        <b>BUSHIDO: SAVAŞÇININ YOLU</b>
      </p>
      <p>
        Biz de Bushido olarak tarihin farklı uygarlıklarının savaşçılarının
        ruhlarını, özgürlüklerini ve cesaretlerini ürünlerimizle sizlere
        sunuyoruz...
      </p>
      <p>
        Bushido, japon savaşçısı samuraiların hayatları boyunca uyması gereken
        yaşam tarzı kurallarıdır. Onur, sadelik, sadakat ve savaş alanında
        cesaret gibi erdemler savaşçının yolu; Bushido'yu oluşturuyordu.
      </p>
      <p>
        Biz de Bushido olarak tarihin farklı uygarlıklarının savaşçılarının
        ruhlarını, özgürlüklerini ve cesaretlerini ürünlerimizle sizlere
        sunuyoruz...
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BushidoDescription',
};
</script>

<style scoped>
.additional-text {
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 0 200px;
  background-color: black; /* Siyah arka plan rengi eklendi */
}

.title-text {
  color: white;
  font-size: 23px;
  text-align: center;
  padding: 0 200px;
}
/* Add space between slider and text */
.additional-text {
  margin-top: 50px;
}

/* Center and format text in additional-text */
.additional-text {
  text-align: center;
}

.additional-text p {
  margin: 0 0 2em; /* Add some bottom margin between paragraphs */
}
</style>
