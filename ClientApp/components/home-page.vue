<template>
  <div class="content">
    <router-link to="/pseudocode">
      <a class="button is-large is-fullwidth">Pseudocode</a>
    </router-link>

    <br />

    <a class="button is-large is-fullwidth" disabled>
      <span>C#</span>
      <span class="icon is-large">
        <i class="fas fa-lock"></i>
      </span>
    </a>

    <br />

    <a class="button is-large is-fullwidth" disabled>
      <span>JavaScript</span>
      <span class="icon is-large">
        <i class="fas fa-lock"></i>
      </span>
    </a>

    <br />

    <a class="button is-large is-fullwidth" disabled>
      <span>Python</span>
      <span class="icon is-large">
        <i class="fas fa-lock"></i>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>
