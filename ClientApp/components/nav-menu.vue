<template>
  <nav class="navbar has-background-link">
    <div class="navbar-item navbar-title">
      <div class="has-text-centered">
        <h1>Bubble Sort</h1>
      </div>
    </div>
  
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
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