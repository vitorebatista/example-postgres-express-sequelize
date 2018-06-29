'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'TodoItems',
      'states',
      {
        type:   Sequelize.ENUM,
        values: ['active', 'pending', 'deleted'],
        defaultValue: 'active'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('TodoItems', 'states')
  }
};
