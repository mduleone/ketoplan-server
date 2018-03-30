const DailyFoodGoal = (sequelize, DataTypes) => {
  return sequelize.define('DailyFoodGoal', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    calories: {
      type: DataTypes.INTEGER,
    },
    carbohydrates: {
      type: DataTypes.INTEGER,
    },
    fat: {
      type: DataTypes.INTEGER,
    },
    saturatedFat: {
      type: DataTypes.INTEGER,
    },
    polyunsaturatedFat: {
      type: DataTypes.INTEGER,
    },
    transFat: {
      type: DataTypes.INTEGER,
    },
    protein: {
      type: DataTypes.INTEGER,
    },
    fiber: {
      type: DataTypes.INTEGER,
    },
    sugar: {
      type: DataTypes.INTEGER,
    },
    cholesterol: {
      type: DataTypes.INTEGER,
    },
    sodium: {
      type: DataTypes.INTEGER,
    },
    potassium: {
      type: DataTypes.INTEGER,
    },
    vitaminA: {
      type: DataTypes.INTEGER,
    },
    vitaminC: {
      type: DataTypes.INTEGER,
    },
    calcium: {
      type: DataTypes.INTEGER,
    },
    iron: {
      type: DataTypes.INTEGER,
    },
  });
};

export default DailyFoodGoal;
