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
    url: "https://img.freepik.com/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263557.jpg",
  },
  {
    spotId: 1,
    url: "https://img.freepik.com/free-photo/modern-kitchen-with-contemporary-interior-decor-furnishings_23-2150886708.jpg",
  },
  {
    spotId: 1,
    url: "https://img.freepik.com/free-photo/ai-generated-modern-styled-entryway_23-2150692395.jpg",
  },
  {
    spotId: 1,
    url: "https://img.freepik.com/free-photo/modern-bookshelf-collection-vase-flowers-generated-by-ai_188544-10647.jpg",
  },
  {
    spotId: 2,
    url: "https://img.freepik.com/free-photo/luxury-cottage-old-suburb-illuminated-by-twilight-lighting-generated-by-artificial-intelligence_188544-150345.jpg",
    preview: true,
  },
  {
    spotId: 2,
    url: "https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152143.jpg",
  },
  {
    spotId: 2,
    url: "https://img.freepik.com/free-photo/modern-styled-small-entryway_23-2150712995.jpg",
  },
  {
    spotId: 2,
    url: "https://img.freepik.com/free-photo/interior-space-decorated-boho-style_23-2150771543.jpg",
  },
  {
    spotId: 2,
    url: "https://img.freepik.com/free-photo/ai-generated-modern-styled-entryway_23-2150692381.jpg",
  },
  {
    spotId: 3,
    url: "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694123.jpg",
    preview: true,
  },
  {
    spotId: 3,
    url: "https://img.freepik.com/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263558.jpg",
  },
  {
    spotId: 3,
    url: "https://img.freepik.com/free-photo/interior-space-decorated-boho-style_23-2150771597.jpg",
  },
  {
    spotId: 3,
    url: "https://img.freepik.com/free-photo/coffee-machine-making-perfect-cup-coffee_23-2151699660.jpg",
  },
  {
    spotId: 3,
    url: "https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695867.jpg",
  },
  {
    spotId: 4,
    url: "https://img.freepik.com/premium-photo/exterior-view-luxury-bungalows-4k-wallpaper-hd-wallpaper_1262886-7872.jpg",
    preview: true,
  },
  {
    spotId: 4,
    url: "https://img.freepik.com/free-photo/ai-generated-modern-styled-entryway_23-2150692279.jpg",
  },
  {
    spotId: 4,
    url: "https://img.freepik.com/free-psd/panorama-luxury-living-room-generative-ai_587448-2144.jpg",
  },
  {
    spotId: 4,
    url: "https://img.freepik.com/free-photo/ai-generated-modern-styled-entryway_23-2150692161.jpg",
  },
  {
    spotId: 4,
    url: "https://img.freepik.com/free-photo/modern-kitchen-dining-room-house_587448-8120.jpg",
  },
  {
    spotId: 5,
    url: "https://img.freepik.com/free-photo/ai-generated-house-design_23-2150666425.jpg",
    preview: true,
  },
  {
    spotId: 5,
    url: "https://img.freepik.com/free-photo/ai-generated-modern-styled-entryway_23-2150692259.jpg",
  },
  {
    spotId: 5,
    url: "https://img.freepik.com/free-photo/room-with-plants-large-window_1340-33544.jpg",
  },
  {
    spotId: 5,
    url: "https://img.freepik.com/free-photo/window-with-plant-it-plant-table_1340-33522.jpg",
  },
  {
    spotId: 5,
    url: "https://img.freepik.com/free-photo/bedroom-with-bed-plant-wall_1340-38402.jpg",
  },
  {
    spotId: 6,
    url: "https://img.freepik.com/premium-photo/horror-house-landscapes-stock-photos_862994-609422.jpg",
    preview: true,
  },
  {
    spotId: 6,
    url: "https://img.freepik.com/free-photo/modern-living-room-interior-design-3d-render-illustration-mock-up_1142-40501.jpg",
  },
  {
    spotId: 6,
    url: "https://img.freepik.com/free-photo/minimalist-home-office-featuring-white-desk-plants_157027-2987.jpg",
  },
  {
    spotId: 6,
    url: "https://img.freepik.com/free-psd/arabic-living-room-decorated-generative-ai_587448-1872.jpg",
  },
  {
    spotId: 6,
    url: "https://img.freepik.com/free-photo/bedroom-with-green-wall-plant-it_1340-38415.jpg",
  },
  {
    spotId: 7,
    url: "https://img.freepik.com/free-photo/large-house-with-red-roof-white-roof-with-blue-roof_1340-27855.jpg",
    preview: true,
  },
  {
    spotId: 7,
    url: "https://img.freepik.com/free-photo/luxury-modern-style-bedroom-interior-hotel-bedroom-generative-ai-illustration_1258-151610.jpg",
  },
  {
    spotId: 7,
    url: "https://img.freepik.com/free-photo/charming-cactus-vintage-wooden-table-complemented-by-sunny-yellow-walls_157027-3804.jpg",
  },
  {
    spotId: 7,
    url: "https://img.freepik.com/free-psd/classic-ballroom-award-ceremony-generative-ai_587448-1830.jpg",
  },
  {
    spotId: 7,
    url: "https://img.freepik.com/free-photo/interior-christmas-magic-glowing-tree-fireplace-gifts-white-wooden-floor_123827-27684.jpg",
  },
  {
    spotId: 8,
    url: "https://img.freepik.com/free-photo/beautiful-summer-day-modern-suburban-backyard-oasis-generated-by-artificial-intelligence_188544-150104.jpg",
    preview: true,
  },
  {
    spotId: 8,
    url:"https://img.freepik.com/free-photo/living-room-mid-century-style-with-warm-colors-ai-generative_123827-23931.jpg"
  },
  {
    spotId: 8,
    url:"https://img.freepik.com/free-photo/home-interior-lounge-area-design_1409-6595.jpg"
  },
  {
    spotId: 8,
    url:"https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152152.jpg"
  },
  {
    spotId: 8,
    url:"https://img.freepik.com/free-photo/room-with-plants-lamp-wall_1340-33532.jpg"
  },
  {
    spotId: 9,
    url: "https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498219.jpg",
    preview: true,
  },
  {
    spotId: 9,
    url: "https://img.freepik.com/free-photo/dark-room-with-desk-lamp-with-plants-wall_188544-26708.jpg",
  },
  {
    spotId: 9,
    url: "https://img.freepik.com/free-photo/living-room-with-couch-table-with-plant-it_1340-43822.jpg",
  },
  {
    spotId: 9,
    url: "https://img.freepik.com/free-photo/bed-with-stacked-assortment-sheets_91128-3951.jpg",
  },
  {
    spotId: 9,
    url: "https://img.freepik.com/free-photo/classic-console-table-mirror-furniture-interior-design-luxurious-room_1268-27903.jpg",
  },
  {
    spotId: 10,
    url: "https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg",
    preview: true,
  },
  {
    spotId: 10,
    url: "https://img.freepik.com/free-photo/interior-christmas-magic-glowing-tree-fireplace-gifts-wooden-floor_123827-27687.jpg",
  },
  {
    spotId: 10,
    url: "https://img.freepik.com/free-photo/bedroom-with-large-window-bed-with-white-bed-plant-it_1340-32736.jpg",
  },
  {
    spotId: 10,
    url: "https://img.freepik.com/free-photo/indoor-flower-background-white-wall_1268-30049.jpg",
  },
  {
    spotId: 10,
    url: "https://img.freepik.com/free-photo/greenhouse-with-plants-plants-walls_1340-33535.jpg",
  },
  {
    spotId: 11,
    url: "https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302722.jpg",
    preview: true,
  },
  {
    spotId: 11,
    url: "https://img.freepik.com/free-photo/plant-table-window-with-white-wall-it_1340-34506.jpg",
  },
  {
    spotId: 11,
    url: "https://img.freepik.com/free-photo/modern-kitchen-with-contemporary-interior-decor-furnishings_23-2150886638.jpg",
  },
  {
    spotId: 11,
    url: "https://img.freepik.com/free-photo/elegant-bedroom-interior-with-bedforniture-framefront-view-ai-generative_123827-23460.jpg",
  },
  {
    spotId: 11,
    url: "https://img.freepik.com/free-photo/loft-cozy-interior-with-wide-windows-cozy-natural-light-trendy-styles_1268-29359.jpg",
  },
  {
    spotId: 12,
    url: "https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302655.jpg",
    preview: true,
  },
  {
    spotId: 12,
    url: "https://img.freepik.com/free-photo/modern-room_677411-2416.jpg",
  },
  {
    spotId: 12,
    url: "https://img.freepik.com/free-photo/empty-bedroom-with-white-paint-gray-walls_91128-3693.jpg",
  },
  {
    spotId: 12,
    url: "https://img.freepik.com/free-photo/pillow-sofa_1203-3388.jpg",
  },
  {
    spotId: 12,
    url: "https://img.freepik.com/free-photo/bedroom-with-balcony-plants-wall_1340-34194.jpg",
  },
  {
    spotId: 13,
    url: "https://as1.ftcdn.net/v2/jpg/08/92/92/28/1000_F_892922865_64eD2s9sOO0dvbE6TwKgDXBuBoDpFLU8.jpg",
    preview: true,
  },
  {
    spotId: 13,
    url: "https://img.freepik.com/free-photo/classic-console-table-mirror-furniture-interior-design-luxurious-room_1268-27735.jpg",
  },
  {
    spotId: 13,
    url: "https://img.freepik.com/free-photo/interior-design-with-photoframes-plants_23-2149385437.jpg",
  },
  {
    spotId: 13,
    url: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2104.jpg",
  },
  {
    spotId: 13,
    url: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg",
  },
  {
    spotId: 14,
    url: "https://img.freepik.com/free-photo/coastal-cliff-house-architecture-background_1409-5481.jpg",    
    preview: true,
  },
  {
    spotId: 14,
    url: "https://img.freepik.com/free-photo/sofa-living-room-decorated-with-brazilian-folklore-design_23-2150793983.jpg",    
  },
  {
    spotId: 14,
    url: "https://img.freepik.com/free-photo/mockup-frames-living-room-interior-with-chair-decorscandinavian-style_41470-5148.jpg",    
  },
  {
    spotId: 14,
    url: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2099.jpg",    
  },
  {
    spotId: 14,
    url: "https://img.freepik.com/free-photo/living-room-arrangement-with-yoga-mat_23-2148741917.jpg",    
  },
  {
    spotId: 15,
    url: "https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302626.jpg",
    preview: true,
  },
  {
    spotId: 15,
    url: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table-counter_105762-2105.jpg",
  },
  {
    spotId: 15,
    url: "https://img.freepik.com/premium-photo/luxury-beautiful-dining-room-interior-design_305343-1578.jpg",
  },
  {
    spotId: 15,
    url: "https://img.freepik.com/premium-photo/living-room-with-couch-table-with-lamp-it_1266854-89.jpg",
  },
  {
    spotId: 15,
    url: "https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695943.jpg",
  },
  {
    spotId: 16,
    url: "https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302653.jpg",
    preview: true,
  },
  {
    spotId: 16,
    url: "https://img.freepik.com/free-photo/living-room-design-with-couch_23-2148848676.jpg",
  },
  {
    spotId: 16,
    url: "https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen-dining-room_181624-2870.jpg",
  },
  {
    spotId: 16,
    url: "https://img.freepik.com/free-photo/modern-living-fresh-interior-vintage_1203-6256.jpg",
  },
  {
    spotId: 16,
    url: "https://img.freepik.com/premium-photo/interior-home_1048944-23771528.jpg",
  },
  {
    spotId: 17,
    url: "https://img.freepik.com/free-photo/facade-modern-house_1268-24725.jpg",
    preview: true,
  },
  {
    spotId: 17,
    url: "https://img.freepik.com/free-photo/double-bed-with-white-sheets_1203-1109.jpg",
  },
  {
    spotId: 17,
    url: "https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794712.jpg",
  },
  {
    spotId: 17,
    url: "https://img.freepik.com/free-photo/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf_105762-2162.jpg",
  },
  {
    spotId: 17,
    url: "https://img.freepik.com/free-photo/interior-design-with-photoframes-nice-chairs_23-2149385446.jpg",
  },
  {
    spotId: 18,
    url: "https://img.freepik.com/free-photo/night-architecture-outdoors-dusk-building-exterior-tree-grass-illuminated-generative-ai_188544-7729.jpg",
    preview: true,
  },
  {
    spotId: 18,
    url: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2052.jpg",
  },
  {
    spotId: 18,
    url: "https://img.freepik.com/free-photo/interior-design-with-photoframes-blue-couch_23-2149385429.jpg",
  },
  {
    spotId: 18,
    url: "https://img.freepik.com/premium-photo/modern-living-room-furniture-with-stone-wall_1123896-133601.jpg",
  },
  {
    spotId: 18,
    url: "https://img.freepik.com/free-vector/interior-background-video-conference_23-2148641135.jpg",
  },
  {
    spotId: 19,
    url: "https://img.freepik.com/free-photo/ai-generated-house-design_23-2150666166.jpg",
    preview: true,
  },
  {
    spotId: 19,
    url: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor-green-sofa_105762-2140.jpg",
  },
  {
    spotId: 19,
    url: "https://img.freepik.com/premium-photo/modern-home-interior-design_21085-77082.jpg",
  },
  {
    spotId: 19,
    url: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor-yellow-lamp_105762-2232.jpg",
  },
  {
    spotId: 19,
    url: "https://img.freepik.com/premium-photo/living-room-with-couch-coffee-table-fireplace_972969-71085.jpg",
  },
  {
    spotId: 20,
    url: "https://img.freepik.com/free-photo/fantasy-house-moon-illustration_23-2151627918.jpg",
    preview: true,
  },
  {
    spotId: 20,
    url: "https://img.freepik.com/free-photo/couch-armchair-near-window_1203-738.jpg",
  },
  {
    spotId: 20,
    url: "https://img.freepik.com/free-photo/interior-decoration-inspired-by-mexican-folklore_23-2150711361.jpg",
  },
  {
    spotId: 20,
    url: "https://img.freepik.com/free-photo/sofa-decoration-livingroom-interior_74190-7315.jpg",
  },
  {
    spotId: 20,
    url: "https://img.freepik.com/free-photo/living-room-interior_1048-9888.jpg",
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
