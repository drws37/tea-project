/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [
      {
        title: 'Ассам',
        place: 'Индия',
        coordsX: 28.632853,
        coordsY: 77.219725,
        img: '/img/assam.jpg',
        description:
          'сорт чёрного крупнолистового чая, выращиваемого на северо-востоке Индии, в долине реки Брахмапутры, между Шиллонгом и Восточными Гималаями. В дикой природе растение может достигать высоты до 20 метров, но на плантациях ему не дают вырастать более 2 метров (для удобства сбора). Ассамское дерево достаточно неприхотливо и даёт хороший урожай.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Цейлонский чай',
        place: 'Шри-Ланка',
        coordsX: 7.61299,
        coordsY: 80.704933,
        img: '/img/ceilon.jpg',
        description:
          ' изысканный напиток с оригинальным вкусом и ароматом. Производится на острове Цейлон (Шри-Ланка) с использованием тонколистовых чайных кустов. Яркий медовый оттенок, свежий аромат и насыщенный вкус делают его отличным выбором для ценителей чая. Поднимает настроение и приносит удовольствие в каждой чашке. ☕🌿✨',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Лахиджан',
        place: 'Иран',
        coordsX: 35.699706,
        coordsY: 51.337425,
        img: '/img/lahijan.jpg',
        description: `
        Чай Лахиджан — великолепное сочетание изысканности и традиции. Происходит из известного региона, предлагает утонченный вкус с нотками цветов и легкой сладости. Аромат чая Лахиджан создает атмосферу уюта, а его неповторимый вкус становится настоящим открытием для ценителей уникальных чайных букетов. 🍵🌺✨`,
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
