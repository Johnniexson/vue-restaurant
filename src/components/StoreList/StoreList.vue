<template>
  <div class="store-list">
    <p>
      Here you can find all of our restaurants. We have {{ storesCount }} stores
      right now!
    </p>
    <div class="store-list__filter">
      <span>Filter:</span>
      <input
        class="store-list__filter-input"
        type="text"
        name="filter"
        placeholder="Enter store name"
        id="store-filter"
        v-model.trim="searchKey"
      />
      <button
        class="store-list__filter-input__submit"
        type="submit"
        @click="search"
      >
        Search
      </button>
      <small class="store-list__filter__clear" @click="clearFilter"
        >Clear filter</small
      >
    </div>
    <div v-if="storesData.length > 0" class="store-list__wrapper">
      <Store
        class="store-list__item"
        :title="store.name"
        :photo="store.image"
        :location="store.location"
        v-for="store in storesData"
        :key="store.id"
      />
    </div>
    <div v-else-if="searchKey !== ''" class="store-list__no-results">
      No results found!
    </div>
    <div v-else class="store-list__empty">Empty!</div>
  </div>
</template>
<style lang="scss">
@import "./StoreList.scss";
</style>
<script>
import Store from "@/components/Store/Store";
import _ from "lodash";

export default {
  name: "StoreList",
  components: {
    Store,
  },
  props: {
    stores: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchKey: "",
      storesData: [],
    };
  },
  computed: {
    storesWithImages() {
      return _.map(this.stores, function(store) {
        store["image"] = "https://via.placeholder.com/300?text=" + store.name;

        return store;
      });
    },
    storesCount() {
      return _.size(this.stores);
    },
  },
  mounted() {
    this.storesData = this.storesWithImages;
  },
  methods: {
    search() {
      if (this.searchKey === "") {
        return;
      }
      const regex = new RegExp(this.searchKey, "gi");
      this.storesData = this.storesWithImages.filter((store) => {
        if (store.name.match(regex) !== null) {
          return store;
        }
      });
    },
    clearFilter() {
      this.searchKey = "";
      this.storesData = this.storesWithImages;
    },
  },
};
</script>
