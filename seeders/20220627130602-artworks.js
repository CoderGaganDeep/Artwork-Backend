"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "artworks",
      [
        {
          title: "Summon by jaime ibarra II",
          imageUrl:
            "https://www.theartofinterior.nl/wp-content/uploads/2021/06/Summon-by-Jaime-Ibarra-II-1-1.jpg",
          hearts: 5,
          minimumBid: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Beauty queen",
          imageUrl:
            "https://www.theartofinterior.nl/wp-content/uploads/2020/11/Beauty-Queen-809x1214.jpg",
          hearts: 5,
          minimumBid: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Before the cinemas",
          imageUrl:
            "https://www.theartofinterior.nl/wp-content/uploads/2020/11/Before-the-cinemas-809x1214.jpg",
          hearts: 5,
          minimumBid: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("artworks", null, {});
  },
};
