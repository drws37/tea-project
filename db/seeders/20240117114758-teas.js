/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [
      {
        title: 'Ассам',
        place: 'Индия',
        coordsX: 28.632853,
        coordsY: 77.219725,
        img: 'some image',
        description: 'some description',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Цейлонский чай',
        place: 'Шри-Ланка',
        coordsX: 7.61299,
        coordsY: 80.704933,
        img: 'some image',
        description: 'some description',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Лахиджан',
        place: 'Иран',
        coordsX: 35.699706,
        coordsY: 51.337425,
        img: 'some image',
        description: 'some description',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // добавьте больше пользователей по необходимости
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teas', null, {});
  },
};
