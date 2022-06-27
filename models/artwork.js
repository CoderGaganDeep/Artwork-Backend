"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class artwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      artwork.belongsTo(models.user, { foreignKey: "userId" });
      artwork.hasMany(models.bid);
    }
  }

  artwork.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      hearts: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      minimumBid: { type: DataTypes.INTEGER, allowNull: false },
      // bidId: { type: DataTypes.INTEGER, allowNull: false },
      // userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "artwork",
      // taken from https://sebhastian.com/sequelize-relation-does-not-exist/#:~:text=The%20relation%20does%20not%20exist,to%20the%20right%20table%20name.
      freezeTableName: true,
    }
  );
  return artwork;
};
