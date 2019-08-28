<template>
  <nav class="navbar has-background-link">
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