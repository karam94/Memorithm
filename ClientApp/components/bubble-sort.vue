<template>
  <div class="algorithm-container">
    <div class="box">
      for all
      <strong>elements</strong> of
      <strong>list</strong>
    </div>

    <div class="box">
      if
      <strong>list[i]</strong> >
      <strong>[list i+1]</strong> then
    </div>

    <div class="box">
      swap(<strong>list[i]</strong>,
      <strong>[list i+1]</strong>)
    </div>

    <div class="algorithm-footer">
      <hr />
      <a class="button is-success is-large is-rounded">
        <span class="icon is-large">
          <i class="fas fa-thumbs-up"></i>
        </span>
        <span>Done!</span>
      </a>

      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a
        class="button is-warning is-large is-rounded"
      >
        <span class="icon is-large">
          <i class="fas fa-question-circle"></i>
        </span>
        <span>Help?</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>
