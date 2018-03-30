const Meal = (sequelize, DataTypes) => {
  const Tag = sequelize.import('./Tag');
  const Recipe = sequelize.import('./Recipe');
  const MealTime = sequelize.import('./MealTime');

  return sequelize.define('Meal', {
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
    recipes: {
      type: DataTypes.ARRAY({
        type: DataTypes.UUID,
        references: {
          model: Recipe,
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

export default Meal;
