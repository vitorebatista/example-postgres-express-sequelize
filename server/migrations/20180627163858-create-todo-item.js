const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('TodoItems', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuid()
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      todoId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Todos',
          key: 'id',
          as: 'todoId'
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('TodoItems')
};