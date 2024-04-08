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
                  producerName2
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
                  producerName2
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
                  producerName2
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
  

  
  
  
  