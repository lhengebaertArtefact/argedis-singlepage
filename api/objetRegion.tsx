import accueil_map from "../public/accueil_map.png";
import bg from "../public/bg.png";
import map_big from "../public/map_big.png";
import map_small from "../public/small_map.png";
import img_produit_1 from "../public/img_produit_1.png";
import img_produit_2 from "../public/img_produit_2.png";
import img_produit_3 from "../public/img_produit_3.png";
import grande_photo_du_fournisseur from "../public/grande_photo_du_fournisseur.png";
import fournisseur2 from "../public/fournisseur2.png";
import fournisseur3 from "../public/fournisseur3.png";

export const obj: any = {
  regions: [
    {
      uid: "bretagne",
      name: "Bretagne",
      lang: "fr", // text commun ou en dur
      map: "URL de l'image de la carte de la Bretagne",
      backgroundMap: accueil_map.src,
      smallMap: map_small.src,
      producers: [
        {
          uid: "producer1",
          name: "Le Fromager Breton",
          photo: grande_photo_du_fournisseur.src,
          coordinates: {
            x: 500,
            y: 1000,
          },
          products: [
            {
              uid: "...",
              name: "Fromage artisanal",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Beurre breton",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Caramels au sel de mer",
              photo: img_produit_1.src,
            },
          ],
          title: "...",
          description:
            "Le Fromager Breton est spécialisé dans les fromages traditionnels bretons fabriqués à partir d'ingrédients locaux.",
          distance: "3,5 km de la station-service",
          map: "../public/map_small.png",
        },
        {
          uid: "producer2",
          name: "La Brasserie Bretonne",
          photo: fournisseur3.src,
          coordinates: {
            x: 600,
            y: 1200,
          },
          products: [
            {
              uid: "...",
              name: "Bières artisanales bretonnes",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Cidre breton",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Cidre breton",
              photo: img_produit_1.src,
            },
          ],
          title: "...",
          description:
            "La Brasserie Bretonne propose une sélection de bières artisanales et de cidres traditionnels bretons.",
          distance: "5 km de la station-service",
          map: "../public/map_small.png",
        },
        {
          uid: "producer3",
          name: "La Crêperie Bretonne",
          photo: fournisseur2.src,
          coordinates: {
            x: 400,
            y: 1500,
          },
          products: [
            {
              uid: "...",
              name: "Crêpes bretonnes",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Galette complète",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Galette complète",
              photo: img_produit_1.src,
            },
          ],
          title: "...",
          description:
            "La Crêperie Bretonne propose une variété de crêpes et de galettes préparées selon les recettes traditionnelles bretonnes.",
          distance: "2 km de la station-service",
          map: "../public/map_small.png",
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
      map: "URL of the map image of Brittany",
      backgroundMap: accueil_map.src,
      smallMap: map_small.src,
      producers: [
        {
          uid: "producer1",
          name: "The Breton Cheese Maker",
          photo: grande_photo_du_fournisseur.src,
          coordinates: {
            x: 500,
            y: 1000,
          },
          products: [
            {
              uid: "...",
              name: "Artisanal Cheese",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Breton Butter",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Sea Salt Caramels",
              photo: img_produit_1.src,
            },
          ],
          title: "...",
          description:
            "The Breton Cheese Maker specializes in traditional Breton cheeses made from local ingredients.",
          distance: "3.5 km from the gas station",
          map: "../public/map_small.png",
        },
        {
          uid: "producer2",
          name: "The Breton Brewery",
          photo: fournisseur3.src,
          coordinates: {
            x: 600,
            y: 1200,
          },
          products: [
            {
              uid: "...",
              name: "Artisanal Breton Beers",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Breton Cider",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Breton Cider",
              photo: img_produit_1.src,
            },
          ],
          title: "...",
          description:
            "The Breton Brewery offers a selection of artisanal beers and traditional Breton ciders.",
          distance: "5 km from the gas station",
          map: "../public/map_small.png",
        },
        {
          uid: "producer3",
          name: "The Breton Crêperie",
          photo: fournisseur2.src,
          coordinates: {
            x: 400,
            y: 1500,
          },
          products: [
            {
              uid: "...",
              name: "Breton Crêpes",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Complete Galette",
              photo: img_produit_1.src,
            },
            {
              uid: "...",
              name: "Complete Galette",
              photo: img_produit_1.src,
            },
          ],
          title: "...",
          description:
            "The Breton Crêperie offers a variety of crêpes and galettes prepared according to traditional Breton recipes.",
          distance: "2 km from the gas station",
          map: "../public/map_small.png",
        },

        // Other producers à rajouter
      ],
      previousSupplierButton: "Previous Supplier",
      nextSupplierButton: "Next Supplier",
      returnToMapButton: "Return to Map",
    },
  ],
};
