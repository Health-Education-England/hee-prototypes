report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_landing_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230216-115046/back_end_visual_regression_default_landing_page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_landing_page_0_document_0_desktop.png",
        "label": "landing_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/landing-page--backstop.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_landing_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230216-115046/back_end_visual_regression_default_landing_page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_landing_page_0_document_1_tablet.png",
        "label": "landing_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/landing-page--backstop.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_landing_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230216-115046/back_end_visual_regression_default_landing_page_0_document_2_mobile.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_landing_page_0_document_2_mobile.png",
        "label": "landing_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/landing-page--backstop.html",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_blog_post_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230216-115046/back_end_visual_regression_default_blog_post_page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_blog_post_page_0_document_0_desktop.png",
        "label": "blog_post_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/blog-item--backstop.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 2
          },
          "rawMisMatchPercentage": 5.25666313559322,
          "misMatchPercentage": "5.26",
          "analysisTime": 356
        },
        "diffImage": "../bitmaps_test/20230216-115046/failed_diff_back_end_visual_regression_default_blog_post_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_blog_post_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230216-115046/back_end_visual_regression_default_blog_post_page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_blog_post_page_0_document_1_tablet.png",
        "label": "blog_post_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/blog-item--backstop.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 16
          },
          "rawMisMatchPercentage": 2.044837821492233,
          "misMatchPercentage": "2.04",
          "analysisTime": 245
        },
        "diffImage": "../bitmaps_test/20230216-115046/failed_diff_back_end_visual_regression_default_blog_post_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_blog_post_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230216-115046/back_end_visual_regression_default_blog_post_page_0_document_2_mobile.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_blog_post_page_0_document_2_mobile.png",
        "label": "blog_post_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/blog-item--backstop.html",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -32
          },
          "rawMisMatchPercentage": 11.84481822349166,
          "misMatchPercentage": "11.84",
          "analysisTime": 191
        },
        "diffImage": "../bitmaps_test/20230216-115046/failed_diff_back_end_visual_regression_default_blog_post_page_0_document_2_mobile.png"
      },
      "status": "fail"
    }
  ],
  "id": "back_end_visual_regression_default"
});