const fetchContentfulData = async (query: string): Promise<any> => {

    const res: any = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  
      {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    );
    const data = res.json();
    return data;
  };
  
  export const getAllRegions = async (): Promise<any | null> => {
  
    let query = ` {
        regCollection {
          items {
            regionName
            sys {
              id
            }
            uid
            background {
              url
            }
           pinpointColor
           colorbackground
           hexapinpointcolor
            lottieMap
            producersCollection(limit: 5) {
                      limit
              items {
                ... on Prod {
                  sys {
                    id
                  }
                  producerName
                  y
                  x
                  prodPhoto{
                    url
                  }
                  mapProducer{
                    url
                  }
                  descriptionProducer
                  productsCollection(limit: 3) {
                                  limit
                    items {
                      ... on Product {
                        sys {
                          id
                        }
                        productName
                        productPhoto{
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`;
    const res = await fetchContentfulData(query);
    const regions: any = res.data.regCollection.items || [];
  
    // Si vous attendez une seule page, vous pouvez simplement retourner la première
    // page de la liste ou null si la liste est vide
    return regions;
  }
  
 
  export const getAllRegionsLangs = async (): Promise<any | null> => {
    let query = `{
      fr: regCollection(locale: "fr") {
        items {
            regionName
            sys {
              id
            }
            uid
            background {
              url
            }
            pinpointColor
            colorbackground
            hexapinpointcolor
            lottieMap
            producersCollection(limit: 5) {
                      limit
              items {
                ... on Prod {
                  sys {
                    id
                  }
                  producerName
                  y
                  x
                  prodPhoto{
                    url
                  }
                  mapProducer{
                    url
                  }
                  descriptionProducer
                  productsCollection(limit: 4) {
                                  limit
                    items {
                      ... on Product {
                        sys {
                          id
                        }
                        productName
                        productPhoto{
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
      }
      en: regCollection(locale: "en-US") {
        items {
            regionName
            sys {
              id
            }
            uid
            background {
              url
            }
            pinpointColor
            colorbackground
            hexapinpointcolor
            lottieMap
            producersCollection(limit: 5) {
                      limit
              items {
                ... on Prod {
                  sys {
                    id
                  }
                  producerName
                  y
                  x
                  prodPhoto{
                    url
                  }
                  mapProducer{
                    url
                  }
                  descriptionProducer
                  productsCollection(limit: 3) {
                                  limit
                    items {
                      ... on Product {
                        sys {
                          id
                        }
                        productName
                        productPhoto{
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
      }
    }`;
  
    const res = await fetchContentfulData(query);
    return { fr: res.data.fr.items, en: res.data.en.items } || null;
  }
  
//   export const getAllRegionsId = async (slug: string): Promise<any | null> => {
//     let query = `{
//       fr: pageCollection(where: {sys: { id: "${slug}" } }, locale: "fr") {
//         items {
//           sys {
//             id
//           }
//           title
//           logo {
//             url
//           }
//           cardContent {
//             json
//           }
//           cardImage {
//             url
//           }
//           producersRefCollection(limit: 10) {
//             limit
//             items {
//               ... on Producer {
//                 sys {
//                   id
//                 }
//                 producer
//                 buttonText
//                 producerPhoto {
//                   url
//                 }
//                 producerDescription {
//                   json
//                 }
//               }
//             }
//           }
//         }
//       }
//       en: pageCollection(where: {sys: { id: "${slug}" } }, locale: "en-US") {
//         items {
//           sys {
//             id
//           }
//           title
//           logo {
//             url
//           }
//           cardContent {
//             json
//           }
//           cardImage {
//             url
//           }
//           producersRefCollection(limit: 10) {
//             limit
//             items {
//               ... on Producer {
//                 sys {
//                   id
//                 }
//                 producer
//                 buttonText
//                 producerPhoto {
//                   url
//                 }
//                 producerDescription {
//                   json
//                 }
//               }
//             }
//           }
//         }
//       }
//     }`;
  
//     const res = await fetchContentfulData(query);
//     return { fr: res.data.fr.items, en: res.data.en.items } || null;
//   }
  
  
  
  
  
//   export const getAllProducerId = async (slug: any): Promise<any | null> => {
  
//     let query = `{
//       producerCollection(where : { sys : { id: "${slug}"}}) {
//         items {
//           sys {
//             id
//           }
//           producer
//           producerPhoto {
//             url
//           }
//           producerDescription{
//             json
//           }
//         }
//       }
//     }`;
  
//     const res = await fetchContentfulData(query);
//     const producer: any | null = res.data.producerCollection?.items.map((element : any) => element.sys.id)
  
//     return producer;
//   };
  
//   export const getAllProducersNames = async (): Promise<any | null> => {
  
//     let query = `{
//       producerCollection {
//         items {
//           sys {
//             id
//           }
//           producer
//           producerPhoto {
//             url
//           }
//           producerDescription{
//             json
//           }
//         }
//       }
//     }`;
  
//     const res = await fetchContentfulData(query);
//     const producer: any | null = res.data.producerCollection?.items.map((element: any) => element.producer)
  
//     return producer;
//   };
  
//   export const getProducerName = async (slug: any, locale: string): Promise<any | null> => {
  
//     const transformLocale = locale === "fr" ? "fr" : "en-US"
  
//     let query = `{
//       producerCollection(where : { sys : { id: "${slug}"}}, locale: "${transformLocale}") {
//       items {
//         sys {
//             id
//           }
//           producer
//           producerPhoto {
//             url
//           }
//           producerDescription{
//             json
//           }
//         }
//       }
//     }`;
  
//     const res = await fetchContentfulData(query);
//     const producer: any | null = res.data.producerCollection?.items[0] || null
  
//     return producer;
//   };
  
  
  
  
  
  