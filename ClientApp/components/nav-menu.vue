<template>
  <nav class="navbar has-background-link">
    <div class="navbar-brand">
      <div class="navbar-item navbar-title">
        <div class="has-text-centered">
          <h1>Memorithm</h1>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <router-link to="/">
      <a class="navbar-item">
        <i class="fas fa-home"></i>
      </a>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { routes } from "../router/routes";

export default {
  data() {
    return {
      routes
    };
  }
};
</script>

<style scoped>
.fa-home {
  font-size: 40px;
  color: #ffffff;
}
</style>