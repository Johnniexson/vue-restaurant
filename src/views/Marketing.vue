<template>
  <div class="page page__marketing">
    <h1>Royal Golden Franchise</h1>
    <div class="page__marketing-banner">
      <Banner
        :backgroundMedia="backgroundMedia"
        :text="bannerText"
        :photos="photos"
        :intro="intro"
        :introPosition="'top'"
      />
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner/Banner";

export default {
  name: "Marketing",
  components: {
    Banner,
  },
  data() {
    return {
      backgroundMedia: {
        src:
          "https://images.unsplash.com/photo-1555992457-b8fefdd09069?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        type: "image",
      },
      bannerText: "Royal Golden Franchise: Home of tasty recipies.",
      intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit earum libero
      fuga, molestias explicabo tempora quasi cumque, sequi eligendi ratione,
      sit magni autem ipsam! Dolorem earum nulla asperiores praesentium
      temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Deserunt amet asperiores eveniet? Natus consequatur eum ab blanditiis
      inventore exercitationem itaque ea architecto minima. Similique
      repudiandae provident consectetur quo qui fugiat? Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Vero maiores architecto ullam
      repellendus dicta ipsa assumenda deleniti et tenetur quibusdam veniam ab
      saepe, laborum, illum laboriosam ducimus nam odit exercitationem?`,
      photos: [
        {
          src:
            "https://images.unsplash.com/photo-1555992303-c94a96ab093e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1548696060-8fae845c6452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1549800076-831d7a97afac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1520715293529-bbc0a2793fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1528301392571-0dfab3c00216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1478369402113-1fd53f17e8b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1489489993638-b9e1eff5cd6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1522237825450-a0c44eecddb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80",
        },
      ],
    };
  },
};
</script>
