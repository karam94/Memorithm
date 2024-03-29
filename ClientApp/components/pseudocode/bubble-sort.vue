<template>
  <div class="algorithm-container">
    <div class="notification is-success" v-show="showSuccess">
      <button class="delete" @click="closeModal()"></button>
      <strong>Well Done!</strong>
      <br />You have ordered
      <strong>Bubble Sort</strong> correctly!
    </div>

    <div class="notification is-danger" v-show="showFailure">
      <button class="delete" @click="closeModal()"></button>
      <strong>Oh No!</strong>
      <br />You have ordered
      <strong>Bubble Sort</strong> incorrectly! Please try again.
    </div>

    <div class="notification is-warning" v-show="showHelp">
      <button class="delete" @click="closeModal()"></button>
      <strong>Need some help?</strong>
      <br/>
      <br/>
      <ul>
        <li style="padding-bottom: 10px;">Starting with an unsorted list, iterate through each element and compare it to its neighbouring element.</li>
        <li style="padding-bottom: 10px;">If the element, is greater than its neighbouring element, swap them.</li>
        <li style="padding-bottom: 10px;">Repeated until we reach the end of the list.</li>
        <li style="padding-bottom: 10px;">If a swap has occurred, restart the process.</li>
        <li>If no swap has occurred, the list is sorted.</li>
      </ul>
    </div>

    <draggable v-model="myArray" @start="drag=true" @end="drag=false">
      <div class="box" v-for="element in myArray" :key="element.id" v-html="element.text"></div>
    </draggable>

    <div class="algorithm-footer">
      <hr />
      <a class="button is-success is-medium is-rounded" @click="done()">
        <span class="icon is-large">
          <i class="fas fa-thumbs-up"></i>
        </span>
        <span>Done!</span>
      </a>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a
        class="button is-warning is-medium is-rounded"
        @click="help()"
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
    self.shuffle(self.myArray);
  },

  data() {
    return {
      showSuccess: false,
      showFailure: false,
      showHelp: false,
      myArray: [
        { id: 1, text: "swapped = <strong>false</strong>" },
        {
          id: 2,
          text: "for each <strong>element</strong> of <strong>list</strong>"
        },
        {
          id: 3,
          text: "if <strong>list[i]</strong> > <strong>list[i+1]</strong> then"
        },
        {
          id: 4,
          text: "swap(<strong>list[i]</strong>, <strong>list[i+1]</strong>)"
        },
        { id: 5, text: "swapped = <strong>true</strong>" },
        { id: 6, text: "end if" },
        { id: 7, text: "end for" },
        { id: 8, text: "if swapped = <strong>false</strong>" },
        { id: 9, text: "terminate program" },
        { id: 10, text: "else repeat program" }
      ],

      correctArray: [
        { id: 1, text: "swapped = <strong>false</strong>" },
        {
          id: 2,
          text: "for each <strong>element</strong> of <strong>list</strong>"
        },
        {
          id: 3,
          text: "if <strong>list[i]</strong> > <strong>list[i+1]</strong> then"
        },
        {
          id: 4,
          text: "swap(<strong>list[i]</strong>, <strong>list[i+1]</strong>)"
        },
        { id: 5, text: "swapped = <strong>true</strong>" },
        { id: 6, text: "end if" },
        { id: 7, text: "end for" },
        { id: 8, text: "if swapped = <strong>false</strong>" },
        { id: 9, text: "terminate program" },
        { id: 10, text: "else repeat program" }
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
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },

    closeModal() {
      this.showSuccess = false;
      this.showFailure = false;
      this.showHelp = false;
    },

    done() {
      if (JSON.stringify(this.myArray) === JSON.stringify(this.correctArray)) {
        this.showSuccess = true;
        this.showFailure = false;
        this.scrollToTop();
      } else {
        this.showSuccess = false;
        this.showFailure = true;
        this.scrollToTop();
      }
    },

    help() {
      this.showHelp = true;
      this.scrollToTop();
    }
  }
};
</script>

<style>
</style>
