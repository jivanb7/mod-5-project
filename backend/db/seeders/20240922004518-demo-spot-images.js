"use strict";

const { SpotImage } = require("../models");

const spotImageData = [
  {
    spotId: 1,
    url: "https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg",
    preview: true,
  },
  {
    spotId: 1,
    url: "https://www.example-image-two.com",
  },
  {
    spotId: 1,
    url: "https://www.example-image-three.com",
  },
  {
    spotId: 2,
    url: "https://img.freepik.com/free-photo/luxury-cottage-old-suburb-illuminated-by-twilight-lighting-generated-by-artificial-intelligence_188544-150345.jpg",
    preview: true,
  },
  {
    spotId: 2,
    url: "https://www.example-image-five.com",
  },
  {
    spotId: 3,
    url: "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694123.jpg",
    preview: true,
  },
  {
    spotId: 3,
    url: "https://www.example-spotimage-three-two.com",
  },
  {
    spotId: 4,
    url: "https://img.freepik.com/premium-photo/exterior-view-luxury-bungalows-4k-wallpaper-hd-wallpaper_1262886-7872.jpg",
    preview: true,
  },
  {
    spotId: 4,
    url: "https://www.example-spotimage-four-two.com",
  },
  {
    spotId: 5,
    url: "https://img.freepik.com/free-photo/ai-generated-house-design_23-2150666425.jpg",
    preview: true,
  },
  {
    spotId: 5,
    url: "https://www.example-spotimage-five-two.com",
  },
  {
    spotId: 5,
    url: "https://www.example-spotimage-five-three.com",
  },
  {
    spotId: 6,
    url: "https://img.freepik.com/premium-photo/horror-house-landscapes-stock-photos_862994-609422.jpg",
    preview: true,
  },
  {
    spotId: 6,
    url: "https://www.example-spotimage-six-two.com",
  },
  {
    spotId: 6,
    url: "https://www.example-spotimage-six-three.com",
  },
  {
    spotId: 6,
    url: "https://www.example-spotimage-six-four.com",
  },
  {
    spotId: 7,
    url: "https://img.freepik.com/free-photo/large-house-with-red-roof-white-roof-with-blue-roof_1340-27855.jpg",
    preview: true,
  },
  {
    spotId: 7,
    url: "https://www.example-spotimage-seven-two.com",
  },
  {
    spotId: 8,
    url: "https://img.freepik.com/free-photo/beautiful-summer-day-modern-suburban-backyard-oasis-generated-by-artificial-intelligence_188544-150104.jpg",
    preview: true,
  },
  {
    spotId: 9,
    url: "https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498219.jpg",
    preview: true,
  },
  {
    spotId: 9,
    url: "https://www.example-spotimage-nine-two.com",
  },
  {
    spotId: 9,
    url: "https://www.example-spotimage-nine-three.com",
  },
  {
    spotId: 10,
    url: "https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg",
    preview: true,
  },
  {
    spotId: 10,
    url: "https://www.example-spotimage-ten-two.com",
  },
  {
    spotId: 11,
    url: "https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302722.jpg",
    preview: true,
  },
  {
    spotId: 11,
    url: "https://www.example-spotimage-eleven-two.com",
  },
  {
    spotId: 12,
    url: "https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302655.jpg",
    preview: true,
  },
  {
    spotId: 12,
    url: "https://www.example-spotimage-twelve-two.com",
  },
  {
    spotId: 12,
    url: "https://www.example-spotimage-twelve-three.com",
  },
  {
    spotId: 12,
    url: "https://www.example-spotimage-twelve-four.com",
  },
  {
    spotId: 13,
    url: "https://as1.ftcdn.net/v2/jpg/08/92/92/28/1000_F_892922865_64eD2s9sOO0dvbE6TwKgDXBuBoDpFLU8.jpg",
    preview: true,
  },
  {
    spotId: 13,
    url: "https://www.example-spotimage-thirteen-two.com",
  },
  {
    spotId: 13,
    url: "https://www.example-spotimage-thirteen-three.com",
  },
  {
    spotId: 14,
    url: "https://img.freepik.com/free-photo/coastal-cliff-house-architecture-background_1409-5481.jpg",    
    preview: true,
  },
  {
    spotId: 14,
    url: "https://www.example-spotimage-fourteen-two.com",    
  },
  {
    spotId: 15,
    url: "https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302626.jpg",
    preview: true,
  },
  {
    spotId: 15,
    url: "https://www.example-spotimage-fifteen-two.com",
  },
  {
    spotId: 15,
    url: "https://www.example-spotimage-fifteen-three.com",
  },
  {
    spotId: 16,
    url: "https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302653.jpg",
    preview: true,
  },
  {
    spotId: 16,
    url: "https://www.example-spotimage-sixteen-two.com",
  },
  {
    spotId: 17,
    url: "https://img.freepik.com/free-photo/facade-modern-house_1268-24725.jpg",
    preview: true,
  },
  {
    spotId: 17,
    url: "https://www.example-spotimage-seventeen-two.com",
  },
  {
    spotId: 17,
    url: "https://www.example-spotimage-seventeen-three.com",
  },
  {
    spotId: 18,
    url: "https://img.freepik.com/free-photo/night-architecture-outdoors-dusk-building-exterior-tree-grass-illuminated-generative-ai_188544-7729.jpg",
    preview: true,
  },
  {
    spotId: 18,
    url: "https://www.example-spotimage-eighteen-two.com",
  },
  {
    spotId: 18,
    url: "https://www.example-spotimage-eighteen-three.com",
  },
  {
    spotId: 18,
    url: "https://www.example-spotimage-eighteen-four.com",
  },
  {
    spotId: 18,
    url: "https://www.example-spotimage-eighteen-five.com",
  },
  {
    spotId: 19,
    url: "https://img.freepik.com/free-photo/ai-generated-house-design_23-2150666166.jpg",
    preview: true,
  },
  {
    spotId: 19,
    url: "https://www.example-spotimage-nineteen-two.com",
  },
  {
    spotId: 20,
    url: "https://img.freepik.com/free-photo/fantasy-house-moon-illustration_23-2151627918.jpg",
    preview: true,
  },
  {
    spotId: 20,
    url: "https://www.example-spotimage-twenty-two.com",
  },
  {
    spotId: 20,
    url: "https://www.example-spotimage-twenty-three.com",
  },
  {
    spotId: 20,
    url: "https://www.example-spotimage-twenty-four.com",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await SpotImage.bulkCreate(spotImageData, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    for (let spotImage of spotImageData) {
      await SpotImage.destroy({
        where: spotImage,
      });
    }
  },
};
