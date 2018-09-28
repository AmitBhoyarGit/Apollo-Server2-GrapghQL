import Sequelize from 'sequelize';
require('dotenv').config();
const sequelize = new Sequelize(process.env.DATABASE,
  process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mssql',
    dialectOptions: {
      "domain": process.env.DOMAIN,
    },
    operatorsAliases: false,
    sync: {
      force: true
    },
    pool: {
      max: process.env.PULL_MAXVALUE,
      min: process.env.PULL_MINVALUE,
      idle: process.env.PULL_IDLETIME
    },
  });
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  db: sequelize,
  DataTypes: Sequelize.DataTypes
};