const kalkaShimlaRailwayData = [
  {
    id: "Kalka",
    pointId: 1,
    name: "Kalka Railway Station",
    desc: {
      elevation: "656 m",
      distt: "Panchkula, Haryana",
    },
    link: "/explore/railwayroutes/detailsMap/1/1",
    thirdPageData: {
      id: 1,
      name: "Kalka Railway Station",
      desc: "Kalka station is situated in the state of Haryana at the northern terminus of the Delhi-Kalka line and mostly serves passengers traveling to Shimla from Kalka, It is the starting point of the UNESCO World Heritage Site Kalka-Shimla Railway. The railway code of Kaka has been allotted as 'KLK' under the jurisdiction of Ambala railway division. The station has 7 platforms and ) tracks. It also has a narrow gauge diesel loco-shed for the maintenance of ZDM-3 8 ZDM-5.",
      glbUrl: "https://d1aog8u7oouudd.cloudfront.net/ImageToStl.com_shimla.glb",
      historicalBackground: "test",
      evolution: "",
      characteristics: {
        yof: 1891,
        location: "Kalka, Haryana",
        authority: "Indian Railways",
        ownership: "Indian Railways",
      },
    },
  },
];

const grandTrunkRoadData = [
  {
    id: "test",
    pointId: 1,
    name: "test",
    desc: {
      elevation: "656 m",
      distt: "Panchkula, Haryana",
    },
    link: "/explore/railwayroutes/detailsMap/2/1",
    thirdPageData: {
      id: 1,
      name: "Kalka Railway Station",
      desc: "",
      glbUrl: "https://d1aog8u7oouudd.cloudfront.net/ImageToStl.com_shimla.glb",
      historicalBackground: "test",
      evolution: "",
      characteristics: {
        yof: 1891,
        location: "Kalka, Haryana",
        authority: "Indian Railways",
        ownership: "Indian Railways",
      },
    },
  },
];

const firstMapDetailsData = [
  {
    id: 1,
    name: "Kalka Shimla Rail Route",
    desc: "Mountain Railways of Kalka-Shimla weaves up through the Himalayan foothills for 96.5km. Traversing spectacular mountain landscape, the route climbs to over 1.5km above sea level, passing through 103 tunnels, crossing 864 bridges and turning 919 times. The Kalka-Shimla Railway was verified as a World Heritage Site by UNESCO in 2008. Linear Property 96.60 kilometers long and 0.76-meter-wide; Buffer zone delineated all along the length of the line of varying width.",
    generalCharacteristics: {
      coordinates:
        "Between 300 51’ 08” N & 310 06’ 17” N. and 760 56’ 15” E & 770 10’ 03” E.",
      region: "Haryana & Himachal Pradesh",
      tDistance: "96.60 kilometers",
      manageAuth: "Northern Railways",
      ownership: "Ministry of Railways, India",
      yof: "1903",
    },
    unescoData: {
      dateOfAward: "2008",
      catagory: "Mountain Railways of India",
      criteria: "ii, iv",
    },
    secondPagePointsData: kalkaShimlaRailwayData,
  },
  {
    id: 2,
    name: "Grand Trunk Road",
    desc: "The history of the GT road dates back to 5th and 4th century BCE. [1] Panini’s Ashtadhyayi mentions various kingdoms along a trade route called – Uttarapath. This ancient route was caravan routes used by armies, traders, pilgrims & travellers. It was once named as Sher Shah Suri’s ‘Shahrah-i-Azim’; during the reign of Mughals it was known as the ‘Badshahi Road’; Rudyard Kipling in his famous novel ‘Kim’ called it the “river of life”; and the English named it ‘Grand Trunk Road’ connecting Eastern India to what is now Pakistan. [2] Around 1700 sarais were to built under the reign of Sher Shah Suri along the major routes of the grand trunk road as resting places for travellers. The first tangible remains can be identified from the Sur dynasty (1540-1556CE). Road was also reconstructed during his reign to connect Agra, his capital to Sasaram his hometown.",
    generalCharacteristics: {
      coordinates:
        "Between 300 51’ 08” N & 310 06’ 17” N. and 760 56’ 15” E & 770 10’ 03” E.",
      region: " Indian Sub-Continent",
      tDistance: "2180.20 kilometers",
      manageAuth: "Northern Railways",
      ownership: "Ministry of Railways, India",
      yof: "1903",
    },
    unescoData: {
      dateOfAward: "2008",
      catagory: "Mountain Railways of India",
      criteria: "iii, iv, vi",
    },
    secondPagePointsData: grandTrunkRoadData,
  },
];

export { firstMapDetailsData, kalkaShimlaRailwayData, grandTrunkRoadData };
