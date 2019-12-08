export default new Vuex.Store({
  state: {
    allRecipes: [],
    recipesById: {},
    recipesByName: {},
    recipesBySearchTerms: {},
    recipesByIngredients: {},
    recipesByCreator: {},
    recipesByDependency: {},
    recipesByDependents: {}
  },
  mutations: {
    addRecipe(state, recipe) {
      state.allRecipes.push(recipe);
      if (recipe.id) {
        if (state.recipesById[recipe.id]) {
          throw new Error("Cannot add recipe that already exists.");
        }
        state.recipesById[recipe.id] = recipe;
      }
      if (!state.recipesByCreator[recipe.creator]) {
        state.recipesByCreator[recipe.creator] = [];
      }
      state.recipesByCreator[recipes.creator].push(recipe);
      if (!state.recipesByName[recipe.name]) {
        state.recipesByName[recipe.name] = [];
      }
      state.recipesByName[recipes.name].push(recipe);
    }
  },
  actions: {
    recipeById(id) {
      return null;
    },
    recipeByName(name) {
      return null;
    },
    recipesBySearchTerms(terms) {
      return [];
    },
    recipesByIngredients(ingredients) {
      return [];
    }
  },
  getters: {}
});
