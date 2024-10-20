"use strict";

let options = {};
options.tableName = "Reviews";
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Reviews",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        review: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        stars: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        month: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        year: {
          type: Sequelize.INTEGER, 
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
    // await queryInterface.addColumn("Reviews", "month", {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });
    // await queryInterface.addColumn("Reviews", "year", {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    // });
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    await queryInterface.removeColumn("Reviews", "month");
    await queryInterface.removeColumn("Reviews", "year");
    return queryInterface.dropTable(options);
  },
};
