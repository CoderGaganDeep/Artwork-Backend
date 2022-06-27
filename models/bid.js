"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bid.belongsTo(models.artwork, { foreignKey: "artworkId" });
    }
  }
  bid.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "bid",
      // taken from https://sebhastian.com/sequelize-relation-does-not-exist/#:~:text=The%20relation%20does%20not%20exist,to%20the%20right%20table%20name.
      // freezeTableName: true,
    }
  );
  return bid;
};
