<template>
  <div class="recipe-form">
    <p>
      Introduce below the quantity for each ingredient you have and we will
      calculate how many Pasta Carbonara meals you can cook!
    </p>
    <form class="recipe-form__form">
      <label for="recipe-eggs">Eggs</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="eggs"
        id="recipe-eggs"
        v-model.number="formData.eggs"
      />
      <label for="recipe-pasta">Pasta</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="pasta"
        id="recipe-pasta"
        v-model.number="formData.pasta"
      />
      <label for="recipe-butter">Butter</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="butter"
        id="recipe-butter"
        v-model.number="formData.butter"
      />
      <label for="recipe-milk">Milk</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="milk"
        id="recipe-milk"
        v-model.number="formData.milk"
      />
      <label for="recipe-oil">Oil</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="oil"
        id="recipe-oil"
        v-model.number="formData.oil"
      />
      <label for="recipe-bacon">Bacon</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="bacon"
        id="recipe-bacon"
        v-model.number="formData.bacon"
      />
      <button type="submit" @click="calculate">Calculate</button>
    </form>
  </div>
</template>
<style lang="scss">
@import "./RecipeForm.scss";
</style>
<script>
export default {
  name: "RecipeForm",
  data() {
    return {
      meals: 0,
      formData: {
        pasta: 0,
        bacon: 0,
        eggs: 0,
        milk: 0,
        butter: 0,
        oil: 0,
      },
    };
  },
  props: {
    ingredients: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    calculate(event) {
      event.preventDefault();
      const mealPerIngredent = {};
      const mealsCount = {};
      let result;
      for (const ingredent in this.formData) {
        mealPerIngredent[ingredent] = Math.floor(
          this.formData[ingredent] / this.ingredients[ingredent]
        );
      }
      // get number of meal that can be prepared per ingredents
      for (const ingred in mealPerIngredent) {
        const mealNum = mealPerIngredent[ingred];
        mealsCount[mealNum] = mealsCount[mealNum] ? mealsCount[mealNum] + 1 : 1;
      }
      // get final max number of meals that can be prepared
      result = Math.min(...Object.values(mealPerIngredent));
      this.$router.push({
        name: "Result",
        params: { ingredents: this.formData, result },
      });
    },
  },
};
</script>
