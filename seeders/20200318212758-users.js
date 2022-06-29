"use strict";
"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "gagan",
          email: "gagan@codaisseur.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          isArtist: "true",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "kelly",
          email: "kelly@codaisseur.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          isArtist: "true",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "gigi",
          email: "gigi@codaisseur.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          isArtist: "false",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
