<template>
  <div class="page page__home">
    <p>{{ welcomeMessage }}</p>
    <h3>Landing Pages:</h3>
    <ol>
      <li class="landing-page__navigation-item">
        <router-link to="/marketing" class="landing-page__navigation-item-link"
          >Marketing</router-link
        >
      </li>
      <li class="landing-page__navigation-item">
        <router-link to="/campaign" class="landing-page__navigation-item-link"
          >Campaign</router-link
        >
      </li>
    </ol>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Home",
  data() {
    return {
      currentTime: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    };
  },
  computed: {
    welcomeMessage() {
      return "Welcome! Your local time is: " + this.currentTime;
    },
  },
  mounted() {
    const setTimer = () =>
      setTimeout(() => {
        this.currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        setTimer();
      }, 1000);
    setTimer();
  },
};
</script>
