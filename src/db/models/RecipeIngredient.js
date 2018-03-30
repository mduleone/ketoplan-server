const RecipeIngredient = (sequelize, DataTypes) => {
  const Ingredient = sequelize.import('./Ingredient');

  return sequelize.define('RecipeIngredient', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    ingredient: {
      type: DataTypes.UUID,
      references: {
        model: Ingredient,
        key: 'id',
      },
    },
  });
};

export default RecipeIngredient;
