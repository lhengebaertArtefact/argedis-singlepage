export const obj: any = {
  regions: [
    {
      uid: "bretagne",
      name: "Bretagne",
      lang: "fr", // text commun ou en dur
      title: "Découvrez le savoir faire de nos fournisseurs locaux",
      subtitle: "Cliquez sur le fournisseur de votre choix",
      map: "URL de l'image de la carte de la Bretagne",
      backgroundMap: "URL du background",
      totalLogo: "URL de l'image du logo Total/énergie", // text commun ou en dur
      englishVersionButton: "Version anglaise", // text commun ou en dur
      producers: [
        {
          uid: "producer1",
          name: "Le Fromager Breton",
          photo: "URL de la photo du producteur",
          coordinates: {
            x: 0,
            y: 0,
          },
          products: [
            {
              uid: "...",
              name: "Fromage artisanal",
              photo: "URL de la photo du fromage",
            },
            {
              uid: "...",
              name: "Beurre breton",
              photo: "URL de la photo du beurre",
            },
            {
              uid: "...",
              name: "Caramels au sel de mer",
              photo: "URL de la photo des caramels",
            },
          ],
          title: "...",
          description:
            "Le Fromager Breton est spécialisé dans les fromages traditionnels bretons fabriqués à partir d'ingrédients locaux.",
          distance: "3,5 km de la station-service",
          map: "URL perso du prod",
        },
        // Autres producteurs à rajouter
        // chaque producteurs auraient sa propre mini-map avec sa distance, etc.
        // La régionaura sa map avec tous les chemins en svg
      ],
      previousSupplierButton: "Fournisseur précédent", // text commun ou en dur
      nextSupplierButton: "Fournisseur suivant", // text commun ou en dur
      returnToMapButton: "Retourner à la carte", // text commun ou en dur
    },
    {
      uid: "bretagne",
      name: "Brittany",
      lang: "en",
      title: "Discover Brittany",
      subtitle: "Explore local producers in Brittany",
      map: "URL of the map image of Brittany",
      backgroundMap: "URL du background",
      totalLogo: "URL of Total/Energy logo image",
      frenchVersionButton: "french version",
      producers: [
        {
          name: "Le Fromager Breton",
          photo: "URL of the producer's photo",
          products: [
            { name: "Artisan Cheese", photo: "URL of the cheese photo" },
            { name: "Breton Butter", photo: "URL of the butter photo" },
            { name: "Sea Salt Caramels", photo: "URL of the caramels photo" },
          ],
          description:
            "Le Fromager Breton specializes in traditional Breton cheeses made from locally sourced ingredients.",
          distance: "3.5 km from the service station",
        },
        // Other producers à rajouter
      ],
      previousSupplierButton: "Previous Supplier",
      nextSupplierButton: "Next Supplier",
      returnToMapButton: "Return to Map",
    },
  ],
};
