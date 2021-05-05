<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <div class="pages__stores-list">
      <StoreList :stores="stores" :loadingData="fetchingData" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import StoreList from "@/components/StoreList/StoreList";
import axios from "axios";

export default {
  name: "Stores",
  components: {
    StoreList,
  },
  data() {
    return {
      currentTime: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      stores: [],
      fetchingData: true,
    };
  },
  computed: {
    welcomeMessage() {
      return (
        "Welcome to our restaurants list! Your local time is: " +
        this.currentTime
      );
    },
  },
  mounted() {
    const setTimer = () =>
      setTimeout(() => {
        this.currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        setTimer();
      }, 1000);
    setTimer();
    this.fetchStores();
  },
  methods: {
    fetchStores() {
      // fetch stores data from s3 bucket to save build size
      axios("https://niexcdn.s3.us-east-2.amazonaws.com/stores.json")
        .then((res) => {
          this.stores = res.data;
        })
        .catch(() => {
          alert("Failed to fetch stores.");
        })
        .finally(() => {
          this.fetchingData = false;
        });
    },
  },
};
</script>
