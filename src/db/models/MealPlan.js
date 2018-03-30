const MealPlan = (sequelize, DataTypes) => {
  const Day = sequelize.import('./Day');

  return sequelize.define('MealPlan', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    days: {
      type: DataTypes.ARRAY({
        type: DataTypes.UUID,
        references: {
          model: Day,
          key: 'id',
        },
      }),
    },
  });
};

export default MealPlan;
