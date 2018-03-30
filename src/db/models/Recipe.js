const Recipe = (sequelize, DataTypes) => {
  const Ingredient = sequelize.import('./Ingredient');
  const Tag = sequelize.import('./Tag');
  const RecipeIngredient = sequelize.import('./RecipeIngredient');
  const MealTime = sequelize.import('./MealTime');

  return sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    servings: {
      type: DataTypes.FLOAT,
    },
    instructions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    ingredients: {
      type: DataTypes.ARRAY({
        type: DataTypes.UUID,
        references: {
          model: Ingredient,
          key: 'id',
        },
      }),
    },
    recipeIngredients: {
      type: DataTypes.ARRAY({
        type: DataTypes.UUID,
        references: {
          model: RecipeIngredient,
          key: 'id',
        },
      }),
    },
    tags: {
      type: DataTypes.ARRAY({
        type: DataTypes.UUID,
        references: {
          model: Tag,
          key: 'id',
        },
      }),
    },
    mealTimes: {
      type: DataTypes.ARRAY({
        type: DataTypes.UUID,
        references: {
          model: MealTime,
          key: 'id',
        },
      }),
    },
  });
};

export default Recipe;
