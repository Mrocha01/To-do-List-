const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc2', 'root' , 'root1234', {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log('Conectamos ao Mysql!');

} catch (error) {
    logger.error(`Não foi possivel conectar: ${error}`);
};

module.exports = sequelize;