/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Иван',
        password: await bcrypt.hash('123', 10),
        img: 'image',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Максим',
        password: await bcrypt.hash('456', 10),
        img: 'image',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Александр',
        password: await bcrypt.hash('789', 10),
        img: 'image',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // добавьте больше пользователей по необходимости
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
