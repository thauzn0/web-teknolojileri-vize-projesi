<template>
  <q-header elevated class="bg-black text-white">
    <q-toolbar>
      <div class="q-mx-md" style="margin-left: 130px">
        <q-btn flat dense round @click="redirectTo('/')">Anasayfa</q-btn>
      </div>
      <div class="q-mx-md" />

      <q-btn flat dense round @mouseover="toggleHoverMenu('koleksiyonlar')">
        Koleksiyonlar
        <q-menu
          ref="koleksiyonlar"
          elevated
          style="background-color: black"
          :auto-close="true"
          class="q-menu-hoverable"
        >
          <q-list>
            <q-item @click="redirectTo('/jewelry/rings')" style="color: white">
              The Berserkir
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <div class="q-mx-md" />

      <q-btn flat dense round @mouseover="toggleHoverMenu('takı')">
        Takı
        <q-menu
          elevated
          style="background-color: black"
          :auto-close="true"
          class="q-menu-hoverable"
          ref="takı"
        >
          <q-list>
            <q-item
              @click="redirectTo('/jewelry/rings')"
              style="color: white"
              class="q-mr-md"
            >
              Setler
              <q-menu
                elevated
                style="background-color: black"
                menu-anchor="bottom right"
              >
                <q-list>
                  <q-item
                    @click="redirectTo('/jewelry/rings')"
                    style="color: white"
                  >
                    The Berserkir
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <div class="q-mx-md" />

      <q-btn flat dense round @mouseover="toggleHoverMenu('giyim')">
        Giyim
        <q-menu
          elevated
          style="background-color: black"
          :auto-close="true"
          class="q-menu-hoverable"
          ref="giyim"
        >
          <q-list>
            <q-item
              @click="redirectTo('/jewelry/rings')"
              style="color: white"
              class="q-mr-md"
            >
              Tshirt
              <q-menu
                elevated
                style="background-color: black"
                menu-anchor="bottom right"
              >
                <q-list>
                  <q-item
                    @click="redirectTo('/jewelry/rings')"
                    style="color: white"
                  >
                    The Berserker Oversize Tshirt
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <!-- Logo ve Navigasyon -->
      <div
        class="q-my-auto"
        style="flex-grow: 1; text-align: center; margin-left: -300px"
      >
        <q-img
          src="../assets/image_900.webp"
          alt="Image Alt Text"
          style="max-width: 150px; max-height: 80px; display: inline-block"
        />
      </div>

      <!-- Araçlar -->
      <div class="col-auto">
        <div class="q-gutter-sm" style="margin-right: 130px">
          <q-btn flat dense round icon="search" @click="toggleSearch" />

          <div v-if="isSearchOpen" class="search-overlay">
            <search-bar @close="closeSearch" />
          </div>

          <!-- Close button added when the search bar is open -->
          <q-btn
            v-if="isSearchOpen"
            flat
            dense
            round
            icon="close"
            @click="closeSearch"
          />

          <q-btn flat dense round icon="person" />
          <q-btn flat dense round icon="shopping_basket" @click="toggleCart" />
          <q-drawer v-model="showCart" side="right" overlay behavior="mobile">
            <div style="padding: 20px">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <div
                  style="
                    color: black;
                    font-size: 18px;
                    font-family: 'Poppins', -apple-system, system-ui,
                      BlinkMacSystemFont;
                  "
                >
                  <b>Sepetimdekiler(0)</b>
                </div>
                <q-btn
                  flat
                  dense
                  round
                  icon="close"
                  @click="toggleCart"
                  style="height: fit-content; width: fit-content"
                />
                <q-img src="../assets/shopping-cart5929.jpg"></q-img>
              </div>
              <!-- Sepet içeriği -->

              <right-drawer />
            </div>
          </q-drawer>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import SearchBar from './SearchBar.vue';
import RightDrawer from './RightDrawer.vue';

export default defineComponent({
  components: {
    SearchBar,
    RightDrawer,
  },
  data() {
    return {
      showCart: false,
      isSearchOpen: false,
    };
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },

    toggleLeftDrawer() {
      // Assuming that this.leftDrawerOpen is defined elsewhere in your component
      // Make sure to define it in your component's setup() if it's a reactive property
      // this.leftDrawerOpen = !this.leftDrawerOpen;
    },

    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },

    toggleHoverMenu(menuName: string) {
      const menu = this.$refs[menuName] as { showMenu?: () => void };
      if (menu && menu.showMenu) {
        menu.showMenu();
      }
    },
    redirectTo(path: string) {
      // Assuming that this.$router is defined in your component
      this.$router.push(path);
    },

    openSearch() {
      this.isSearchOpen = true;
    },

    closeSearch() {
      this.isSearchOpen = false;
    },
  },
});
</script>

<style>
/* Header ve toolbar stilleri */
.bg-black {
  background-color: black;
}
.text-white {
  color: white;
}

/* Logo için responsive boyut ayarları */
@media (max-width: 600px) {
  .q-img {
    max-width: 50px;
    max-height: 50px;
  }
}
.custom-router-link {
  color: inherit;
  text-decoration: none;
}

/* Add a custom class for the hover effect */
.q-menu-hoverable {
  display: none;
}

/* Display the menu when the parent is hovered */
.q-btn:hover .q-menu-hoverable {
  display: block;
}
.logo-container {
  display: flex;
  justify-content: space-around;
}

.logo-container img {
  width: 80px;
  margin-right: 20px;
}

.search-close-container {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  padding: 10px;
}
/* Add a custom class for the hover effect */
.q-menu-hoverable {
  display: none;
}

/* Display the menu when the parent is hovered */
.q-btn:hover .q-menu-hoverable {
  display: block;
}

/* Header ve toolbar stilleri */
.bg-black {
  background-color: black;
}
.text-white {
  color: white;
}

/* Logo için responsive boyut ayarları */
@media (max-width: 600px) {
  .q-img {
    max-width: 50px;
    max-height: 50px;
  }
}
.custom-router-link {
  color: inherit;
  text-decoration: none;
}

.q-menu-hoverable {
  display: none;
}

/* Display the menu when the parent is hovered */
.q-btn:hover .q-menu-hoverable {
  display: block;
}

/* Header ve toolbar stilleri */
.bg-black {
  background-color: black;
}
.text-white {
  color: white;
}

/* Logo için responsive boyut ayarları */
@media (max-width: 600px) {
  .q-img {
    max-width: 50px;
    max-height: 50px;
  }
}
.custom-router-link {
  color: inherit;
  text-decoration: none;
}
</style>
