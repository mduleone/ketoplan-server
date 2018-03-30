const Rating = (sequelize, DataTypes) => {
  const Recipe = sequelize.import('./Recipe');
  const MealPlan = sequelize.import('./MealPlan');
  const Meal = sequelize.import('./Meal');

  return sequelize.define('Rating', {
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
    score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 10,
        min: 1,
      },
    },
    recipe: {
      type: DataTypes.UUID,
      references: {
        model: Recipe,
        key: 'id',
      },
    },
    meal: {
      type: DataTypes.UUID,
      references: {
        model: Meal,
        key: 'id',
      },
    },
    mealPlan: {
      type: DataTypes.UUID,
      references: {
        model: MealPlan,
        key: 'id',
      },
    },
  });
};

export default Rating;
