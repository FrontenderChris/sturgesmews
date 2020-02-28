var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.192955208584209,
          "pitch": 0.10321541145978408,
          "rotation": 0,
          "target": "1-courtyard-car-parks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7685195416929265,
          "pitch": 0.0033960984878120826,
          "title": "Block D",
          "text": "LOT 16-20<div>2 Bedrooms 73 m2</div>"
        },
        {
          "yaw": -0.8550870526910082,
          "pitch": -0.006320224264655394,
          "title": "Block E",
          "text": "LOT 21-25<div>2 Bedrooms 70 m2</div>"
        },
        {
          "yaw": -1.1307657134164693,
          "pitch": -0.20160026233209294,
          "title": "Block E",
          "text": "LOT 26-27<div>3 Bedrooms 110 m2</div>"
        },
        {
          "yaw": 1.7064990751894253,
          "pitch": 0.05855406510541705,
          "title": "Sturges Road",
          "text": "A short drive to access the North Western Motorway"
        },
        {
          "yaw": -1.354342758475175,
          "pitch": 0.03183912326941751,
          "title": "Sturges Road",
          "text": "Three minutes' distance to railway station by walking"
        }
      ]
    },
    {
      "id": "1-courtyard-car-parks",
      "name": "Courtyard Car Parks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9155917420510056,
          "pitch": 0.06711962147532624,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5446104687187745,
          "pitch": 0.13202267489862685,
          "title": "Block C",
          "text": "LOT 11 - 15<div>2 Bedrooms 70.6 m2</div>"
        },
        {
          "yaw": 2.447863926275251,
          "pitch": 0.07988588486893278,
          "title": "Block D",
          "text": "LOT 16 - 20<div>2 Bedrooms 73 m2</div>"
        },
        {
          "yaw": -2.519117524393069,
          "pitch": 0.18671524298641629,
          "title": "Block E",
          "text": "LOT 21 - 25<div>2 Bedrooms 70m2</div>"
        },
        {
          "yaw": -1.8182734838064132,
          "pitch": -0.02517988007552674,
          "title": "Block E",
          "text": "LOT 26 - 27<div>3 Bedrooms 110 m2</div>"
        },
        {
          "yaw": -0.8670157601497266,
          "pitch": 0.005333284643901592,
          "title": "Block F",
          "text": "LOT 28 - 33<div>3 Bedrooms 117.9 m2</div>"
        },
        {
          "yaw": -0.19761511097126494,
          "pitch": 0.17520975707621034,
          "title": "Block B",
          "text": "LOT 6 - 10<div>2 Bedrooms 70.6 m2</div>"
        },
        {
          "yaw": 0.6176695545900994,
          "pitch": 0.1501312762021474,
          "title": "Block A",
          "text": "LOT 1 - 5<div>2 Bedrooms 73 m2</div>"
        },
        {
          "yaw": 3.0096456950360277,
          "pitch": 0.06788274714216946,
          "title": "Sturges Road - Main Entrance",
          "text": "<div>A short drive to access the North Western Motorway.<br></div><div>Three minutes' distance to railway station by walking.<br></div>"
        }
      ]
    }
  ],
  "name": "Sturges Mews",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
