<template>
  <div class="photo-splash">
    <div class="photo-splash__item" v-for="(photo, idx) in photos" :key="idx">
      <img
        :src="photo.src"
        alt=""
        width="250px"
        height="400px"
        class="photo-splash__item-image"
      />
    </div>
  </div>
</template>
<style lang="scss">
@import "./PhotoSplash.scss";
</style>
<script>
export default {
  name: "PhotoSplash",
  props: {
    photos: {
      type: Array,
      default: () => [
        {
          src: null,
        },
      ],
    },
  },
};
</script>
