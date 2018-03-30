const ServingUnit = (sequelize, DataTypes) => {
  return sequelize.define('ServingUnit', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM,
      values: [
        'whole',
        'half',
        'ounce',
        'gram',
        'ml',
        'cup',
        'tsp',
        'tbsp',
        'scoop',
        'slice',
      ],
    },
  });
};

export default ServingUnit;
