const data = {
  name: "Glimpse of Switzerland",
  starting_price: 99800.0,
  strike_through_price: 132900.0,
  stays_included: true,
  flights_included: false,
  meals_included: true,
  transport_included: true,
  currency: "INR",
  duration: "6D",
  tags: ["Nature", "Adventure", "Culture", "Skiing"],
  places: ["Zurich", "Gurich", "Lucerne", "Interlaken"],
  inclusions: ["Stay", "Meals", "Transport", "Sightseeing"],
  exclusions: ["Flights", "Visa", "Insurance"],
  highlights: [
    "Explore the charming city of Zurich",
    "Visit the Swiss National Museum",
    "Discover the beauty of Lake Gurich",
    "Enjoy a boat ride on Lake Gurich",
    "Experience the vibrant culture of Switzerland",
  ],
  overview: `Switzerland is a land of stunning natural beauty, rich history, and unparalleled precision. Bordered by France, Germany, Italy, Austria, and Liechtenstein, this small yet mighty country boasts breathtaking landscapes, including majestic mountains, crystal-clear lakes, and picturesque valleys. `,
  itinerary: [
    {
      day: 1,
      title: "Arrival in Zurich",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, tempora blanditiis iure voluptate ratione, quos minima excepturi ad soluta culpa obcaecati vel officiis magni error est placeat perferendis consequatur ab.",
      location: "Zurich",
      activities: [
        "Bus tour of Zurich",
        "Visit to the Swiss National Museum",
        "Dinner at a local restaurant",
      ],
      stay: {
        name: "Hotel ABC",
        address: "123, ABC Street, Zurich",
        checkin: "12:00 PM",
        checkout: "10:00 AM",
      },
      id: 7048,
    },
    {
      day: 2,
      location: "Gurich",
      title: "Exploring Gurich",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, tempora blanditiis iure voluptate ratione, quos minima excepturi ad soluta culpa obcaecati vel officiis magni error est placeat perferendis consequatur ab.",
      activities: [
        "Visit to the Gurich Zoo",
        "Boat ride on Lake Gurich",
        "Lunch at a local cafe",
      ],
      stay: {
        name: "Hotel XYZ",
        address: "456, XYZ Street, Gurich",
        checkin: "12:00 PM",
        checkout: "10:00 AM",
      },

      id: 7048,
    },
  ],
  reviews: {
    total_reviews: 1000,
    rating: 4.5,
    five: 500,
    four: 300,
    three: 100,
    two: 50,
    one: 50,
  },
  desc: `Switzerland, nestled in the heart of Europe, is a land of stunning natural beauty, rich history, and unparalleled precision. Bordered by France, Germany, Italy, Austria, and Liechtenstein, this small yet mighty country boasts breathtaking landscapes, including majestic mountains, crystal-clear lakes, and picturesque valleys.

One of Switzerland's most iconic features is its towering Alps, which dominate much of the country's landscape. These snow-capped peaks not only provide a dramatic backdrop but also offer endless opportunities for outdoor adventure. From skiing and snowboarding in world-renowned resorts like Zermatt and St. Moritz to hiking and mountaineering along scenic trails, Switzerland is a paradise for nature enthusiasts.

In addition to its natural splendor, Switzerland is renowned for its impeccable craftsmanship and precision engineering. The country is home to some of the world's most famous watchmakers, including Rolex, Patek Philippe, and Omega. Swiss watches are synonymous with luxury, quality, and precision, reflecting the country's dedication to excellence.

Switzerland's cities are vibrant hubs of culture, innovation, and international diplomacy. Zurich, the largest city, is a dynamic metropolis known for its thriving financial sector, bustling nightlife, and cutting-edge art scene. Geneva, nestled along the shores of Lake Geneva, is a cosmopolitan city renowned for its role as a global center for diplomacy and human rights.

The Swiss are proud of their rich cultural heritage, which is reflected in their traditions, cuisine, and festivals. From the colorful Fasnacht celebrations in Basel to the lively folk music festivals in Appenzell, Switzerland offers a vibrant tapestry of cultural experiences.

No discussion of Switzerland would be complete without mentioning its world-famous cheese and chocolate. Swiss cheese, particularly varieties like Emmental and Gruyère, is celebrated for its rich flavor and creamy texture. Meanwhile, Swiss chocolate is renowned for its smoothness and complexity, with brands like Lindt and Toblerone delighting taste buds around the globe.

Switzerland's commitment to environmental sustainability and quality of life is evident in its efficient public transportation system, clean cities, and high standard of living. The country consistently ranks among the top in global quality of life indexes, thanks to its excellent healthcare, education, and social welfare systems.

Despite its small size, Switzerland punches above its weight on the global stage, serving as a neutral ground for international diplomacy and hosting numerous international organizations, including the United Nations and the International Red Cross.

In conclusion, Switzerland captivates visitors with its breathtaking landscapes, world-class craftsmanship, and vibrant cultural scene. Whether you're exploring the Alpine peaks, savoring Swiss chocolate, or marveling at the precision of Swiss watches, Switzerland offers a truly unforgettable experience.`,
  faqs: [
    {
      question: "What is the best time to visit Switzerland?",
      answer:
        "The best time to visit Switzerland is during the summer months of June to September. The weather is pleasant and the days are long. The winter months of December to February are ideal for skiing and snowboarding.",
    },
    {
      question: "What are the top attractions in Switzerland?",
      answer:
        "Switzerland is known for its stunning landscapes, charming cities, and outdoor activities. Some of the top attractions in Switzerland include the Matterhorn, Lake Geneva, the Jungfrau region, and the city of Lucerne.",
    },
    {
      question: "What are the best outdoor activities in Switzerland?",
      answer:
        "Switzerland is a paradise for outdoor enthusiasts. Some of the best outdoor activities in Switzerland include hiking in the Swiss Alps, skiing and snowboarding in the winter, paragliding in Interlaken, and mountain biking in the Jura Mountains.",
    },
    {
      question: "What are the best outdoor activities in Switzerland?",
      answer:
        "Switzerland is a paradise for outdoor enthusiasts. Some of the best outdoor activities in Switzerland include hiking in the Swiss Alps, skiing and snowboarding in the winter, paragliding in Interlaken, and mountain biking in the Jura Mountains.",
    },
  ],

  images: [
    "https://media1.thrillophilia.com/filestore/b9pz8goa40y5e6x3oytte30voazt_m0ta18746mupo0sg3dn1983qiy0u_shutterstock_280183490.jpg",
    "https://media1.thrillophilia.com/filestore/3x8vnit285jli7m8hyurkhapvcd5_asisai7c06znuf3kx7kaf12f15c3_shutterstock_332148542.jpg",
    "https://media1.thrillophilia.com/filestore/fchf25rloxkwqdpmzzokcxxq1u5h_4lgkpvphpxdmexate8vhgbxpcgwu_shutterstock_391379860.jpg",
    "https://media1.thrillophilia.com/filestore/x4o5xkhgjz97jpbrw4m5z8gvc688_tqw96ktwjvxqvkj1pnuv4hp6vzh0_shutterstock_519605656.webp",
    "https://media1.thrillophilia.com/filestore/3x8vnit285jli7m8hyurkhapvcd5_asisai7c06znuf3kx7kaf12f15c3_shutterstock_332148542.jpg",
    "https://media1.thrillophilia.com/filestore/t1k6tt5bi010pog5d3zrwisudjqa_dl.beatsnoop.com-high-9c47803d11755f98ee.jpg",
    "https://media1.thrillophilia.com/filestore/gx4anc560j90y57i9ywj8ui194py_dl.beatsnoop.com-final-IVdGcXJHOB.jpg",
  ],
  simillar_tours: [
    {
      name: "Glimpse Of Switzerland | FREE FIFA Museum Tickets",
      slug: "glimpse-of-switzerland",
      starting_price: 99800.0,
      strike_through_price: 132900.0,
      rating: 4.86,
      review_count: 326,
      currency: "INR",
      currency_multipliers: [],
      summarized_duration: "5 days \u0026 4 nights",
      flights_included: false,

      images: [
        "https://media1.thrillophilia.com/filestore/3x8vnit285jli7m8hyurkhapvcd5_asisai7c06znuf3kx7kaf12f15c3_shutterstock_332148542.jpg",
        "https://media1.thrillophilia.com/filestore/3x8vnit285jli7m8hyurkhapvcd5_asisai7c06znuf3kx7kaf12f15c3_shutterstock_332148542.jpg",
        "https://media1.thrillophilia.com/filestore/fchf25rloxkwqdpmzzokcxxq1u5h_4lgkpvphpxdmexate8vhgbxpcgwu_shutterstock_391379860.jpg",
        "https://media1.thrillophilia.com/filestore/b9pz8goa40y5e6x3oytte30voazt_m0ta18746mupo0sg3dn1983qiy0u_shutterstock_280183490.jpg",
        "https://media1.thrillophilia.com/filestore/x4o5xkhgjz97jpbrw4m5z8gvc688_tqw96ktwjvxqvkj1pnuv4hp6vzh0_shutterstock_519605656.webp",
        "https://media1.thrillophilia.com/filestore/t1k6tt5bi010pog5d3zrwisudjqa_dl.beatsnoop.com-high-9c47803d11755f98ee.jpg",
        "https://media1.thrillophilia.com/filestore/gx4anc560j90y57i9ywj8ui194py_dl.beatsnoop.com-final-IVdGcXJHOB.jpg",
      ],
      enable_online_booking: false,
      enable_send_enquiry: true,
      product_region: {
        name: "Europe Tours",
        id: 54,
      },
      region_contact_number: "+91 8069144116",
      itinerary_destinations: [
        {
          location: "Zurich",
          days: 6,
          id: 7048,
        },
      ],
    },
    {
      name: "Glimpse Of Switzerland | FREE FIFA Museum Tickets",
      slug: "glimpse-of-switzerland",
      starting_price: 99800.0,
      strike_through_price: 132900.0,
      rating: 4.86,
      review_count: 326,
      currency: "INR",
      currency_multipliers: [],
      summarized_duration: "5 days \u0026 4 nights",
      flights_included: false,

      images: [
        "https://media1.thrillophilia.com/filestore/3x8vnit285jli7m8hyurkhapvcd5_asisai7c06znuf3kx7kaf12f15c3_shutterstock_332148542.jpg",
        "https://media1.thrillophilia.com/filestore/3x8vnit285jli7m8hyurkhapvcd5_asisai7c06znuf3kx7kaf12f15c3_shutterstock_332148542.jpg",
        "https://media1.thrillophilia.com/filestore/fchf25rloxkwqdpmzzokcxxq1u5h_4lgkpvphpxdmexate8vhgbxpcgwu_shutterstock_391379860.jpg",
        "https://media1.thrillophilia.com/filestore/b9pz8goa40y5e6x3oytte30voazt_m0ta18746mupo0sg3dn1983qiy0u_shutterstock_280183490.jpg",
        "https://media1.thrillophilia.com/filestore/x4o5xkhgjz97jpbrw4m5z8gvc688_tqw96ktwjvxqvkj1pnuv4hp6vzh0_shutterstock_519605656.webp",
        "https://media1.thrillophilia.com/filestore/t1k6tt5bi010pog5d3zrwisudjqa_dl.beatsnoop.com-high-9c47803d11755f98ee.jpg",
        "https://media1.thrillophilia.com/filestore/gx4anc560j90y57i9ywj8ui194py_dl.beatsnoop.com-final-IVdGcXJHOB.jpg",
      ],
      enable_online_booking: false,
      enable_send_enquiry: true,
      product_region: {
        name: "Europe Tours",
        id: 54,
      },
      region_contact_number: "+91 8069144116",
      itinerary_destinations: [
        {
          location: "Zurich",
          days: 6,
          id: 7048,
        },
      ],
    },
    {
      name: "Glimpse Of Switzerland | FREE FIFA Museum Tickets",
      slug: "glimpse-of-switzerland",
      starting_price: 99800.0,
      strike_through_price: 132900.0,
      rating: 4.86,
      review_count: 326,
      currency: "INR",
      currency_multipliers: [],
      summarized_duration: "5 days \u0026 4 nights",
      flights_included: false,

      images: [
        "https://media1.thrillophilia.com/filestore/3x8vnit285jli7m8hyurkhapvcd5_asisai7c06znuf3kx7kaf12f15c3_shutterstock_332148542.jpg",
        "https://media1.thrillophilia.com/filestore/3x8vnit285jli7m8hyurkhapvcd5_asisai7c06znuf3kx7kaf12f15c3_shutterstock_332148542.jpg",
        "https://media1.thrillophilia.com/filestore/fchf25rloxkwqdpmzzokcxxq1u5h_4lgkpvphpxdmexate8vhgbxpcgwu_shutterstock_391379860.jpg",
        "https://media1.thrillophilia.com/filestore/b9pz8goa40y5e6x3oytte30voazt_m0ta18746mupo0sg3dn1983qiy0u_shutterstock_280183490.jpg",
        "https://media1.thrillophilia.com/filestore/x4o5xkhgjz97jpbrw4m5z8gvc688_tqw96ktwjvxqvkj1pnuv4hp6vzh0_shutterstock_519605656.webp",
        "https://media1.thrillophilia.com/filestore/t1k6tt5bi010pog5d3zrwisudjqa_dl.beatsnoop.com-high-9c47803d11755f98ee.jpg",
        "https://media1.thrillophilia.com/filestore/gx4anc560j90y57i9ywj8ui194py_dl.beatsnoop.com-final-IVdGcXJHOB.jpg",
      ],
      enable_online_booking: false,
      enable_send_enquiry: true,
      product_region: {
        name: "Europe Tours",
        id: 54,
      },
      region_contact_number: "+91 8069144116",
      itinerary_destinations: [
        {
          location: "Zurich",
          days: 6,
          id: 7048,
        },
      ],
    },
  ],
};

export default data;
