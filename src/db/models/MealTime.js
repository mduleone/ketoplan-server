const MealTime = (sequelize, DataTypes) => {
  return sequelize.define('MealTime', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM,
      values: [
        'breakfast',
        'lunch',
        'dinner',
        'snack',
      ],
    },
  });
};

export default MealTime;
