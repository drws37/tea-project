/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [
      {
        title: 'Ассам',
        place: 'Индия',
        coordinates: '28.632853, 77.219725',
        img: 'some image',
        description: 'some description',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Цейлонский чай',
        place: 'Шри-Ланка',
        img: 'some image',
        coordinates: '7.612990, 80.704933',
        description: 'some description',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Лахиджан',
        place: 'Иран',
        coordinates: '35.699706, 51.337425',
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
