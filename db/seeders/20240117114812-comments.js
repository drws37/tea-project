/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        text: `
        Чай Ассам просто восхитителен! Богатый вкус, красивый аромат и идеальное сочетание с молоком создают неповторимый чайный опыт. Очарован его насыщенностью и приятной фруктовой сладостью. Новый фаворит в моей коллекции чая! 🍵✨`,
        user_id: 2,
        tea_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Цейлонский чай — это воплощение утонченности в мире чайных сокровищ. Аромат букета этого напитка словно приглашение в знакомство с изысканным вкусом, которым, возможно, не каждый палит в полной мере оценить. Роскошное восприятие цейлонского чая стало для меня истинным искусством, замедляющим бег времени и погружающим в аристократическую роскошь чаепития. ☕🌺✨',
        user_id: 3,
        tea_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Чай Лахиджан поразил своим утонченным вкусом и ароматом. Насыщенные ноты цветов и легкая сладость делают его чудесным выбором для уютных моментов. Это действительно выдающийся чай, который заслуживает внимания ценителей чайного искусства! 🌺🍵',
        user_id: 2,
        tea_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Чай Лахиджан меня немного разочаровал. Вкус оказался слишком терпким, а аромат не таким насыщенным, как я ожидал. Попробовал разные заваривания, но не смог добиться желаемого баланса. В целом, не впечатлил своей гармонией вкуса и аромата. 🍵👎',
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
