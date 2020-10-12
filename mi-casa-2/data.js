var APP_DATA = {
  "scenes": [
    {
      "id": "0-comedor",
      "name": "Comedor",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9288607835391112,
        "pitch": 0.08624906367634466,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.5860458863402087,
          "pitch": 0.08225047834227794,
          "rotation": 0,
          "target": "1-cocina"
        },
        {
          "yaw": 1.3156683584503526,
          "pitch": 0.07168643246829731,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
      "name": "Cocina",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3253812970232968,
        "pitch": 0.045012232971663124,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.4871993519081208,
          "pitch": 0.0884311148529271,
          "rotation": 0,
          "target": "2-pasillo"
        },
        {
          "yaw": -0.6218461620223792,
          "pitch": 0.10201531524085894,
          "rotation": 0,
          "target": "0-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo",
      "name": "Pasillo",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.4450722083669021,
        "pitch": 0.0549309660183539,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.3825555855743055,
          "pitch": 0.1702329510159668,
          "rotation": 0,
          "target": "0-comedor"
        },
        {
          "yaw": -1.6304504430374394,
          "pitch": 0.167962297434471,
          "rotation": 0,
          "target": "1-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mi casa 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
