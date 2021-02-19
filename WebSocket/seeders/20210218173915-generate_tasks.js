'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('tasks', [
        { description: 'Grabar el curso de Backend',createdAt: new Date(), updatedAt: new Date()},
        { description: 'Editar los vídeos del curso de Backend',createdAt: new Date(), updatedAt: new Date()},
        { description: 'Subir los vídeos',createdAt: new Date(), updatedAt: new Date()}
      ], {});
  },

  down: async (queryInterface, Sequelize) => {


     await queryInterface.bulkDelete('tasks', null, {});

  }
};
