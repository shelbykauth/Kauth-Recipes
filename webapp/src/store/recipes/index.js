import Recipe from "./Recipe.js";

export default {
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
      recipe = new Recipe(recipe);
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
      state.recipesByCreator[recipe.creator].push(recipe);
      if (!state.recipesByName[recipe.name]) {
        state.recipesByName[recipe.name] = [];
      }
      state.recipesByName[recipe.name].push(recipe);
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
      let list = [];
      return list;
    },
    recipesByIngredients(ingredients) {
      let list = [];
      return list;
    }
  },
  getters: {
    allRecipes(state, getters) {
      if (!(state.allRecipes instanceof Array)) {
        return [];
      }
      return state.allRecipes.filter(function(recipe) {
        return recipe instanceof Recipe;
      });
    },
    genericSearch(state, getters) {
      return function search(terms) {
        if (terms instanceof Array) {
          // Do a thing
        } else if (typeof terms === "string") {
          if (terms.indexOf(",") !== -1) {
            terms = terms.split(",");
          } else {
            terms = terms.split(" ");
          }
        }
        let list = getters.allRecipes;
        for (let i in terms) {
          let term = terms[i].toLowerCase();

          list = list.filter(function(recipe) {
            if (recipe.id.toLowerCase().indexOf(term) !== -1) {
              return true;
            }
            if (recipe.name.toLowerCase().indexOf(term) !== -1) {
              return true;
            }
            if (recipe.creator.toLowerCase().indexOf(term) !== -1) {
              return true;
            }
            return false;
          });
        }
        return list;
      };
    }
  }
};
