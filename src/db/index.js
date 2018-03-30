import Sequelize from 'sequelize';

const dbFactory = (dbHost) => new Sequelize(dbHost);

export default dbFactory;
