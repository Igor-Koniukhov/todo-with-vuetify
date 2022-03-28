<template>
  <v-text-field
    v-model="search"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    class="expanding-search mt-1"
    :class="{ closed: searchClosed && !search }"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    filled
    dense
    clearable
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      searchClosed: true,
    };
  },
};
</script>

<style lang="scss">
.expanding-search {
  transition: max-width 0.5s;
  .v-input__slot {
     cursor: pointer !important;
    &:before,
    &:after {
      border-color: transparent !important;
    }
  }
  &.closed {
    max-width: 45px;
    transition: max-width 0.4s;
    .v-input__slot {
      background: transparent !important;
    }
   
  }
}
</style>
