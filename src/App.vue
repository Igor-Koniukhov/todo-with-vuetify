<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-img height="170" src="ukraine.png">
        <div class="img-justify pt-6">
          <v-avatar size="60">
            <img class="img-avatar" src="i_koniukhov.jpg" alt="Igor" />
          </v-avatar>
          <div class="avatar-text text-subtitle-1">Koniukhov Igor</div>
          <div class="avatar-text text-subtitle-2"> <small>ikoniukov </small> </div>
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
              ? 'to top right, rgba(55,236,186,.7), rgba(25,32,72,.5)'
              : 'to top right ,  rgba(231, 197, 75, .8), rgba(231, 197, 75, .5)'
          "
        >
        </v-img>
      </template>
      <v-container class="pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row class="mt-8">
          <h1 class="ml-4 text-h5 federica-font mt-8">UrgentaOpera</h1>
        </v-row>
        <live-date-time></live-date-time>
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
    ],
  }),
};
</script>
<style lang="scss">
.container {
  .federica-font {
    font-family: "Fredericka the Great", cursive !important;
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
.avatar-text{
  color: #333
}
</style>
