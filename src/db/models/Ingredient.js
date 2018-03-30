const Ingredient = (sequelize, DataTypes) => {
  const Tag = sequelize.import('./Tag');
  const ServingUnit = sequelize.import('./ServingUnit');

  return sequelize.define('Ingredient', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
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
    servingSize: {
      type: DataTypes.FLOAT,
    },
    servingUnit: {
      type: DataTypes.UUID,
      references: {
        model: ServingUnit,
        key: 'id',
      },
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

export default Ingredient;
