const Day = (sequelize, DataTypes) => {
  const Meal = sequelize.import('./Meal');

  return sequelize.define('Day', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM,
      values: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
    },
    meals: {
      type: DataTypes.ARRAY({
        type: DataTypes.UUID,
        references: {
          model: Meal,
          key: 'id',
        },
      }),
    },
  });
};

export default Day;
