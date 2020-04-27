import { Injectable } from '@angular/core';
import { Part } from '../interfaces/part';
import { Feature } from '../interfaces/feature';

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {

  // Parts
  parts: Part[] = [];

  // Mocked data
  exampleParts: Part[]; // measurements
  mainPart: Part; // main page

  loadingParts: boolean = false;

  constructor() {
    this.setExampleData();
    this.getDataFromExample();
  }

  /**
   * Get data from mocked data
   */
  getDataFromExample() {
    // Example main part
    this.mainPart = this.determinateQuality(this.mainPart);

    // Example measurements parts
    this.parts.push(this.determinateQuality(this.exampleParts.shift()));
    if (this.exampleParts.length > 0) {
      this.loadingParts = true;
      setTimeout(() => {
        this.getDataFromExample();
      }, 10000);
    } else {
      this.loadingParts = false;
    }
  }

  /**
   * Determines the quality of the pieces and features obtained
   * @param part 
   */
  determinateQuality(part: Part) {
    part.features.forEach((feature: Feature) => {
      let quality0 = 0;
      let quality1 = 0;
      let quality2 = 0;
      feature.features.forEach((feature) => {
        feature.data.forEach((featureData) => {
          if (featureData.dev > 1) {
            featureData.quality = 0;
            quality0++;
          }
          else if (featureData.dev > 0.3) {
            featureData.quality = 1;
            quality1++;
          } else {
            featureData.quality = 2;
            quality2++;
          }
        })
      })
      if (quality0 > 0) {
        feature.quality = 0;
      } else if (quality1 > 0) {
        feature.quality = 1;
      } else if (quality2 > 0) {
        feature.quality = 2;
      }
    })
    return part;
  }

  /**
   * Set example data
   */
  setExampleData() {

    this.mainPart = {
      name: "Main Part",
      features: [
        {
          name: 'Feature 1', gridColumn: "span 1", gridRow: "span 1", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.4, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              }
            ]
        },
        {
          name: 'Feature 2', gridColumn: "span 1", gridRow: "span 1", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.4, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              }
            ]
        },
        {
          name: 'Feature 3', gridColumn: "span 1", gridRow: "span 1", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.2, devOutTol: 0, quality: null }
                ],

              }
            ]
        },
        {
          name: 'Feature 4', gridColumn: "span 1", gridRow: "span 1", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              }
            ]
        },
        {
          name: 'Feature 5', gridColumn: "span 2", gridRow: "span 1", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              },
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              }
            ]
        },
        {
          name: 'Feature 6', gridColumn: "span 2", gridRow: "span 2", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              },
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              }
            ]
        }

      ]
    }

    this.exampleParts = [{
      name: "Part1",
      features: [
        {
          name: 'Feature 1', gridColumn: "span 2", gridRow: "span 2", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.4, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              },
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              }
            ]
        },
        {
          name: 'Feature 2', gridColumn: "span 1", gridRow: "span 1", quality: 0, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.1, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              }
            ]
        },
        {
          name: 'Feature 3', gridColumn: "span 1", gridRow: "span 1", quality: 0, features:
            [
              {
                data: [
                  { control: 'X', dev: 0.5, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.1, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.8, devOutTol: 0, quality: null }
                ],

              }
            ]
        },
        {
          name: 'Feature 4', gridColumn: "span 1", gridRow: "span 2", quality: 0, features:
            [
              {
                data: [
                  { control: 'X', dev: 2, devOutTol: 0, quality: null },
                  { control: 'X', dev: 5, devOutTol: 0, quality: null },
                  { control: 'X', dev: 3, devOutTol: 0, quality: null },
                  { control: 'X', dev: 1, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              }
            ]
        },
        {
          name: 'Feature 5', gridColumn: "span 1", gridRow: "span 1", quality: 0, features:
            [
              {
                data: [
                  { control: 'X', dev: 2, devOutTol: 0, quality: null },
                  { control: 'X', dev: 5, devOutTol: 0, quality: null },
                  { control: 'X', dev: 3, devOutTol: 0, quality: null },
                  { control: 'X', dev: 1, devOutTol: 0, quality: null }
                ],

              }
            ]
        },
        {
          name: 'Feature 6', gridColumn: "span 1", gridRow: "span 1", quality: 0, features:
            [
              {
                data: [
                  { control: 'X', dev: 2, devOutTol: 0, quality: null },
                  { control: 'X', dev: 5, devOutTol: 0, quality: null },
                  { control: 'X', dev: 3, devOutTol: 0, quality: null },
                  { control: 'X', dev: 1, devOutTol: 0, quality: null }
                ],

              }
            ]
        }

      ]
    },

    {
      name: "Part2",
      features: [
        {
          name: 'Feature 1', gridColumn: "span 1", gridRow: "span 2", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.4, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              },
            ]
        },

        {
          name: 'Feature 2', gridColumn: "span 1", gridRow: "span 2", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.4, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              },
            ]
        },

        {
          name: 'Feature 3', gridColumn: "span 1", gridRow: "span 2", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.4, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              },
            ]
        },

        {
          name: 'Feature 4', gridColumn: "span 1", gridRow: "span 2", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.4, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              },
            ]
        },

        {
          name: 'Feature 5', gridColumn: "span 1", gridRow: "span 2", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.4, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null }
                ],

              },
            ]
        },

      ]
    }, {
      name: "Part3",
      features: [
        {
          name: 'Feature 1', gridColumn: "span 2", gridRow: "span 1", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.4, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },

                ],

              },
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                ],

              }
            ]
        },
        {
          name: 'Feature 2', gridColumn: "span 2", gridRow: "span 1", quality: null, features:
            [
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 2, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.4, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },

                ],

              },
              {
                data: [
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                ],

              }
            ]
        },
        {
          name: 'Feature 3', gridColumn: "span 1", gridRow: "span 1", quality: 0, features:
            [
              {
                data: [
                  { control: 'X', dev: 0.5, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.1, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0, devOutTol: 0, quality: null },
                  { control: 'X', dev: 0.8, devOutTol: 0, quality: null }
                ],

              }
            ]
        }
      ]
    }]
  }
}
