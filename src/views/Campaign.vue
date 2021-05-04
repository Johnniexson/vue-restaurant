<template>
  <div class="page campaign">
    <h1>Onestics Royal Kitchen</h1>
    <div class="page__campaign-banner">
      <Banner
        :backgroundMedia="backgroundMedia"
        :text="bannerText"
        :intro="intro"
        :typeText="true"
        :textSize="'large'"
      />
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner/Banner";

export default {
  name: "Campaign",
  components: {
    Banner,
  },
  data() {
    return {
      backgroundMedia: {
        src: "https://niexcdn.s3.us-east-2.amazonaws.com/food-reel.mp4",
        type: "video",
      },
      bannerText: "Welcome: Home for secret recipies!!!!",
      intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit earum libero
      fuga, molestias explicabo tempora quasi cumque, sequi eligendi ratione,
      sit magni autem ipsam! Dolorem earum nulla asperiores praesentium
      temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Deserunt amet asperiores eveniet? Natus consequatur eum ab blanditiis
      inventore exercitationem itaque ea architecto minima. Similique
      repudiandae provident consectetur quo qui fugiat? Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Vero maiores architecto ullam
      repellendus dicta ipsa assumenda deleniti et tenetur quibusdam veniam ab
      saepe, laborum, illum laboriosam ducimus nam odit exercitationem?
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Deserunt amet asperiores eveniet? Natus consequatur eum ab blanditiis
      inventore exercitationem itaque ea architecto minima. Similique
      repudiandae provident consectetur quo qui fugiat? Lorem, ipsum dolor sit
      amet consectetur adipisicing elit.`,
    };
  },
};
</script>
