import cheesecake from "./recipes/FavoriteCheesecake";
import cheesecake2 from "./recipes/OtherCheesecake";
import thumbprint from "./recipes/ThumbprintCookies";

export default {
  addRecipes: function(store) {
    store.commit("addRecipe", cheesecake);
    store.commit("addRecipe", cheesecake2);
    store.commit("addRecipe", thumbprint);
  },
  recipes: [cheesecake, cheesecake2, thumbprint]
};
