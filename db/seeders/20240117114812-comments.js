/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        text: 'some comment - 1',
        user_id: 2,
        tea_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'some comment - 2',
        user_id: 3,
        tea_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'some comment - 3',
        user_id: 2,
        tea_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'some comment - 4',
        user_id: 3,
        tea_id: 3,
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
