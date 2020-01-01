class Recipe {
  constructor(definition) {
    this.id = String(definition.id);
    this.name = String(definition.name);
    this.creator = String(definition.creator);
    this.categories = this.categories || [];
    this.ingredients = this.ingredients || [];
    this.equipment = this.equipment || [];
    this.instructions = this.instructions || [];
    this.positiveSearch = {};
    this.negativeSearch = {};
  }
}

export default Recipe;
