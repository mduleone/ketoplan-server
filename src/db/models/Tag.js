const Tag = (sequelize, DataTypes) => {
  return sequelize.define('Tag', {
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
  });
};

export default Tag;
