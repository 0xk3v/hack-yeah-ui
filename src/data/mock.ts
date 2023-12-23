export type TProject = {
  id: number;
  imageUrl: string;
  title: string;
  beneficiary: string;
  project_value: string;
  co_financing: string;
  voivodeship: string;
  category: string;
  learn_more: string;
};

export const projects: TProject[] = [
  {
    id: 1,
    imageUrl:
      "https://mapadotacji.gov.pl/sb-user-files/5996d38fc1af098051fdd7f329c76157.jpg",
    title:
      "Construction of the S7 expressway, section Moczydło (border of the Świętokrzyskie Voivodeship) - Miechów village",
    beneficiary: "GENERAL DIRECTORATE FOR NATIONAL ROADS AND MOTORWAYS",
    project_value: "977 894 PLN 913.30 ",
    co_financing: "PLN 497,801,099.03",
    voivodeship: "Lesser Poland Voivodeship, Świętokrzyskie Voivodeship",
    category:
      "https://mapadotacji.gov.pl/wp-content/themes/mapa-dotacji/img/ci/transport-black.png",
    learn_more:
      "https://mapadotacji.gov.pl/projekty/?&search-voivodeship=248&search-county=27376&lang=en&search-theme=104",
  },
  {
    id: 2,
    imageUrl:
      "https://mapadotacji.gov.pl/sb-user-files/d51abd754831785d8a31d5d2bd615d33.jpg",
    title:
      "Purchase of low-emission, low-floor buses and stationary KKM ticket vending machines to serve agglomeration lines",
    beneficiary: "MUNICIPAL COMMUNICATION ENTERPRISE SA IN KRAKÓW",
    project_value: "PLN 175,570,727.88",
    co_financing: "PLN 115,718,400.00",
    voivodeship: "Lesser Poland Voivodeship",
    category:
      "https://mapadotacji.gov.pl/wp-content/themes/mapa-dotacji/img/ci/transport-black.png",
    learn_more: "https://mapadotacji.gov.pl/projekty/761831/?lang=en",
  },
  {
    id: 3,
    imageUrl:
      "https://mapadotacji.gov.pl/sb-user-files/35f5e3ba5e36c71d820a29a06b4c8893.jpg",
    title: "Modernization of selected stations on railway lines 68, 91, 94",
    beneficiary: "POLISH STATE RAILWAYS SA",
    project_value: "PLN 86,674,470.47",
    co_financing: "PLN 60,005,812.03",
    voivodeship: "Lesser Poland Voivodeship, Subcarpathian Voivodeship",
    category:
      "https://mapadotacji.gov.pl/wp-content/themes/mapa-dotacji/img/ci/transport-black.png",
    learn_more: "https://mapadotacji.gov.pl/projekty/786662/?lang=en",
  },
  {
    id: 4,
    imageUrl:
      "https://mapadotacji.gov.pl/sb-user-files/35f5e3ba5e36c71d820a29a06b4c8893.jpg",
    title:
      "Construction of the DW 780 connection (Księcia Józefa St. in Krakow) with the southern bypass of Kraków - the Mirowski Node",
    beneficiary: "MAŁOPOLSKIE VOIVODESHIP",
    project_value: "PLN 22,193,559.91",
    co_financing: "PLN 13,764,525.88",
    voivodeship: "Lesser Poland Voivodeship",
    category:
      "https://mapadotacji.gov.pl/wp-content/themes/mapa-dotacji/img/ci/transport-black.png",
    learn_more: "https://mapadotacji.gov.pl/projekty/762124/?lang=en",
  },
];
