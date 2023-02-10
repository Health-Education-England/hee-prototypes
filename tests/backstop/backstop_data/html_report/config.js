report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_landing_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230210-093515/back_end_visual_regression_default_landing_page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_landing_page_0_document_0_desktop.png",
        "label": "landing_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/landing-page-backstop.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -6
          },
          "rawMisMatchPercentage": 7.202244113097284,
          "misMatchPercentage": "7.20",
          "analysisTime": 216
        },
        "diffImage": "../bitmaps_test/20230210-093515/failed_diff_back_end_visual_regression_default_landing_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_landing_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230210-093515/back_end_visual_regression_default_landing_page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_landing_page_0_document_1_tablet.png",
        "label": "landing_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/landing-page-backstop.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -10
          },
          "rawMisMatchPercentage": 10.69990898907869,
          "misMatchPercentage": "10.70",
          "analysisTime": 195
        },
        "diffImage": "../bitmaps_test/20230210-093515/failed_diff_back_end_visual_regression_default_landing_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_landing_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230210-093515/back_end_visual_regression_default_landing_page_0_document_2_mobile.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_landing_page_0_document_2_mobile.png",
        "label": "landing_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/landing-page-backstop.html",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -2
          },
          "rawMisMatchPercentage": 21.37594301440829,
          "misMatchPercentage": "21.38",
          "analysisTime": 127
        },
        "diffImage": "../bitmaps_test/20230210-093515/failed_diff_back_end_visual_regression_default_landing_page_0_document_2_mobile.png"
      },
      "status": "fail"
    }
  ],
  "id": "back_end_visual_regression_default"
});