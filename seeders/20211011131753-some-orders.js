"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("orders", [
      {
        status: "done",
        total: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "pending",
        total: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "pending",
        total: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "done",
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
