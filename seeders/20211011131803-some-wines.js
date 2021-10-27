"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("wines", [
      {
        id: 1,
        name: "Desquiciado",
        picture:
          "https://res.cloudinary.com/dwr3lgrza/image/upload/v1634113506/WhatsApp_Image_2021-10-10_at_17.08.58_zr1kbw.jpg",
        price: 25,
        description:
          "Blend de Blancas 50% Sauvignon Blanc, 35% Pinot Gris, 15% Chardonnay",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Casa Petrini",
        picture:
          "https://res.cloudinary.com/dwr3lgrza/image/upload/v1634113506/WhatsApp_Image_2021-10-10_at_17.09.05_qitumg.jpg",
        price: 35,
        description:
          "100% Chardonnay Tupungato, Mendoza 91 points Robert Parker",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Pispi",
        picture:
          "https://res.cloudinary.com/dwr3lgrza/image/upload/v1634113506/WhatsApp_Image_2021-10-10_at_17.09.00_ajbmfy.jpg",
        price: 20,
        description:
          "Malbec 40% Petit Verdot 20% Bonarda 20% Cabernet Franc 10% Merlot 10%",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Desquiciado Malbec",
        picture:
          "https://res.cloudinary.com/dwr3lgrza/image/upload/v1634113506/WhatsApp_Image_2021-10-10_at_17.09.08_b6co7h.jpg",
        price: 40,
        description:
          "85% Malbec 8% Pinot Noir 7% Cabernet Franc Valle de Uco, Mendoza",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Desquiciado",
        picture:
          "https://res.cloudinary.com/dwr3lgrza/image/upload/v1634113506/WhatsApp_Image_2021-10-10_at_17.09.07_f68hsf.jpg",
        price: 70,
        description: "45% Garnacha 45% Syrah 10% Pinot Gris",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Hey Rose",
        picture:
          "https://res.cloudinary.com/dwr3lgrza/image/upload/v1634113506/WhatsApp_Image_2021-10-10_at_17.09.06_nlromo.jpg",
        price: 20,
        description: "100% Malbec Perfect for a summer afternoon",
        categoryId: 3,
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
    await queryInterface.bulkDelete("wines", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
