<template>
  <div class="banner">
    <div class="banner__intro" :class="bannerStyles">
      <div class="banner__wrapper">
        <div class="banner__image" v-if="backgroundMedia.type === 'image'">
          <img
            class="banner__image-asset"
            :src="backgroundMedia.src"
            :alt="text"
            :title="text"
          />
        </div>
        <div class="banner__video" v-if="backgroundMedia.type === 'video'">
          <video class="banner__video-asset" loop autoplay muted>
            <source :src="backgroundMedia.src" type="video/mp4" />
          </video>
        </div>
        <div class="banner__text" v-if="text">
          <span class="banner__text-message">{{ bannerText }}</span>
        </div>
      </div>
      <p class="banner__intro-text" v-if="intro">
        {{ intro }}
      </p>
    </div>
    <!-- splash -->
    <div class="photo-splash" v-if="photos.length > 0">
      <h2 class="photo-splash__title">Photo Splash</h2>
      <div class="photo-splash__wrapper">
        <div
          class="photo-splash__wrapper__item"
          v-for="(photo, idx) in photos"
          :key="idx"
        >
          <img
            :src="photo.src"
            alt=""
            width="250px"
            height="400px"
            class="photo-splash__wrapper__item-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "./Banner.scss";
</style>
<script>
export default {
  name: "Banner",
  props: {
    backgroundMedia: {
      type: Object,
      default: () => ({
        type: null, // image/video
        src: null,
      }),
    },
    intro: {
      type: String,
      default: null,
    },
    introPosition: {
      type: String,
      default: "bottom", // top | bottom
    },
    photos: {
      type: Array,
      default: () => [], //[{src: String}]
    },
    text: {
      type: String,
      default: null,
    },
    typeText: {
      type: Boolean,
      default: false,
    },
    textSize: {
      type: String,
      default: "normal", // normal | large
    },
    textDistribution: {
      type: String,
      default: "over", // top | over | bottom
    },
    textVerticalAlignment: {
      type: String,
      default: "center", // top | center | bottom
    },
    textHorizontalAlignment: {
      type: String,
      default: "center", // left || center || right
    },
  },
  data() {
    return {
      bannerText: "",
      typedText: "",
      count: 0,
    };
  },
  watch: {
    typedText(newVal) {
      this.bannerText = newVal;
    },
  },
  computed: {
    bannerStyles() {
      return {
        "banner__text-normal": this.textSize === "normal",
        "banner__text-large": this.textSize === "large",
        "banner__text-distribution-over": this.textDistribution === "over",
        "banner__text-distribution-top": this.textDistribution === "top",
        "banner__text-distribution-bottom": this.textDistribution === "bottom",
        "banner__text-horizontal-left": this.textHorizontalAlignment === "left",
        "banner__text-horizontal-center":
          this.textHorizontalAlignment === "center",
        "banner__text-horizontal-right":
          this.textHorizontalAlignment === "right",
        "banner__text-vertical-top": this.textVerticalAlignment === "top",
        "banner__text-vertical-center": this.textVerticalAlignment === "center",
        "banner__text-vertical-bottom": this.textVerticalAlignment === "bottom",
        "banner__intro-text-top": this.introPosition === "top",
        "banner__intro-text-bottom": this.introPosition === "bottom",
      };
    },
  },
  mounted() {
    this.typeWritter();
  },
  methods: {
    typeWritter() {
      if (this.typeText) {
        setInterval(() => {
          if (this.typedText.length < this.text.length) {
            this.typedText += this.text[this.count];
            this.count++;
          } else {
            clearInterval();
          }
        }, 200);
      } else {
        this.bannerText = this.text;
      }
    },
  },
};
</script>
