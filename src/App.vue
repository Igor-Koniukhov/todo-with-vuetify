<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
      <v-img class="avatar-back" height="170" src="wheat.jpg">
        <div class="img-justify pt-6">
          <v-avatar size="60">
            <img class="img-avatar" src="i_koniukhov.jpg" alt="Igor" />
          </v-avatar>
          <div class="avatar-text avatar-text__frederica">Koniukhov Igor</div>
          <div class="avatar-text">
            <small>ikoniukov </small>
          </div>
        </div>
      </v-img>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      :src="!drawer ? 'rus_nax.jpeg' : 'wheat.jpg'"
      height="170"
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          :gradient="
            !drawer
              ? 'to top right, rgba(0,0,0,.3), rgba(25,32,72,.1)'
              : 'to top right ,  rgba(0, 0, 0, .5), rgba(231, 197, 75, .2)'
          "
        >
        </v-img>
      </template>
      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row class="mt-8">
          <h1 class="ml-4 text-h5 mt-8 federica-font">
            {{ $store.state.appTitle }}
          </h1>
        </v-row>
        <live-date-time :drawer="drawer"></live-date-time>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
      <snack-bar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    "snack-bar": require("@/components/Shared/SnackBar.vue").default,
    search: require("@/components/Tools/Search.vue").default,
    "live-date-time": require("@/components/Tools/LiveDateTime.vue").default,
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
      { title: "Test", icon: "mdi-help-box", to: "/test" },
    ],
  }),
  computed: {
    appTitle() {
      return process.env.VUE_APP_TITLE;
    },
  },
};
</script>
<style lang="scss">
.header-container {
  max-width: none !important;
}

.container {
  .federica-font {
    font-family: "Fredericka the Great", cursive !important;
  }
  .federica-font__red {
    font-family: "Fredericka the Great", cursive !important;
    color: red;
  }
}
.v-responsive__content {
  display: flex;
  justify-content: center;
  .img-justify {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
.avatar-text {
  color: #f3f3f3;
  z-index: 150;
  &__frederica {
    font-family: "Fredericka the Great", cursive;
  }
}
.avatar-back {
  position: relative;
  &:before {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
