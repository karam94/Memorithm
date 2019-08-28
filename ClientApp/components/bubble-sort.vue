<template>
  <div class="algorithm-container">
    <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
      <div class="box" v-for="element in myArray" :key="element.id" v-html="element.text"></div>
    </draggable>

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
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },

  created() {
    var self = this;
    console.log(self.myArray);
    self.shuffle(self.myArray);
    console.log(self.myArray)
  },

  data() {
    return {
      myArray: [
        { id: 1, text: "swapped = <strong>false</strong>" },
        {
          id: 2,
          text: "for all <strong>elements</strong> of <strong>list</strong>"
        },
        {
          id: 3,
          text: "if <strong>list[i]</strong> > <strong>[list i+1]</strong> then"
        },
        {
          id: 4,
          text: "swap(<strong>list[i]</strong>, <strong>[list i+1]</strong>)"
        },
        { id: 5, text: "swapped = <strong>true</strong>" },
        { id: 6, text: "end if" },
        { id: 7, text: "end for" },
        { id: 8, text: "if swapped = <strong>false</strong>" },
        { id: 9, text: "terminate" }
      ]
    };
  },

  methods: {
    // Fisher-Yates Shuffle
    shuffle(array) {
      let arrayLength = array.length - 1;
      while (arrayLength > 0) {
        let k = Math.floor(Math.random() * arrayLength);
        let temp = array[arrayLength];
        array[arrayLength] = array[k];
        array[k] = temp;
        arrayLength--;
      }
    }
  }
};
</script>

<style>
</style>
