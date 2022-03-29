<template>
  <div class="text-subtitle-1 mt-1 ml-1 federica-font federica-font__date">
    {{ date }}
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  data() {
    return {
      date: "",
    };
  },
  methods: {
    getDate() {
      this.date = format(new Date(), "MMMM d - iiii, H:mm:ss");
      setTimeout(this.getDate, 1000);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style lang="scss">
.federica-font {
  &__date {
    color: rgba(0, 0, 0, 0.9);
  }
}
</style>
