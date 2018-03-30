const User = (sequelize, DataTypes) => {
  const DailyFoodGoal = sequelize.import('./DailyFoodGoal');
  const Ingredient = sequelize.import('./Ingredient');
  const MealPlan = sequelize.import('./MealPlan');
  const Rating = sequelize.import('./Rating');
  const Tag = sequelize.import('./Tag');

  return sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    mealsPerDay: {
      type: DataTypes.INTEGER,
    },
    intermittentFasting: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    startTime: {
      type: DataTypes.DATE,
    },
    endTime: {
      type: DataTypes.DATE,
    },
    dailyGoals: {
      type: DataTypes.ARRAY({
        type: DataTypes.UUID,
        references: {
          model: DailyFoodGoal,
          key: 'id',
        },
      }),
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
    mealPlans: {
      type: DataTypes.ARRAY({
        type: DataTypes.UUID,
        references: {
          model: MealPlan,
          key: 'id',
        },
      }),
    },
    ratings: {
      type: DataTypes.ARRAY({
        type: DataTypes.UUID,
        references: {
          model: Rating,
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
  });
};

export default User;
