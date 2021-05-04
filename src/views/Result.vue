<template>
  <div class="page page__result">
    <h2>Recipies Combination Result</h2>
    <pre>{{ ingredents }}</pre>
    <p v-html="formatedResult"></p>
    <div class="page__result-banner">
      <Banner
        :backgroundMedia="backgroundMedia"
        :text="bannerText"
        :typeText="true"
        :textSize="'large'"
      />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner/Banner";

export default {
  name: "Result",
  components: {
    Banner,
  },
  props: {
    ingredents: {
      type: Object,
      default: () => {},
    },
    result: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    formatedResult() {
      return `You can prepare <strong>${this.result} meal${
        this.result > 1 ? "s" : ""
      }</strong> with your ingredents.`;
    },
  },
  data() {
    return {
      backgroundMedia: {
        src: "https://niexcdn.s3.us-east-2.amazonaws.com/food-reel.mp4",
        type: "video",
      },
      bannerText: "Congratulations!! You did it.",
    };
  },
  mounted() {},
};
</script>
