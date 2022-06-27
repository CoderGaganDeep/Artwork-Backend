module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "bids",
      [
        {
          email: "gagan@codaisseur.com",
          amount: 1200,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: "1",
        },
        {
          email: "kelly@codaisseur.com",
          amount: 2200,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: "2",
        },
        {
          email: "gigi@codaisseur.com",
          amount: 1800,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: "3",
        },
        {
          email: "gagan@codaisseur.com",
          amount: 3200,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: "1",
        },
        {
          email: "kelly@codaisseur.com",
          amount: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: "2",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bids", null, {});
  },
};
