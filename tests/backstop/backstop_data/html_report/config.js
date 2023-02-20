report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_landing_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_landing_page_0_document_0_desktop.png",
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
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_landing_page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_landing_page_0_document_1_tablet.png",
        "label": "landing_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/landing-page--backstop.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -28
          },
          "rawMisMatchPercentage": 7.16634521823742,
          "misMatchPercentage": "7.17",
          "analysisTime": 486
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_landing_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_landing_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_landing_page_0_document_2_mobile.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_landing_page_0_document_2_mobile.png",
        "label": "landing_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/landing-page--backstop.html",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -52
          },
          "rawMisMatchPercentage": 9.187115384615385,
          "misMatchPercentage": "9.19",
          "analysisTime": 372
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_landing_page_0_document_2_mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_blog_post_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_blog_post_page_0_document_0_desktop.png",
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
            "height": -38
          },
          "rawMisMatchPercentage": 5.831835752068358,
          "misMatchPercentage": "5.83",
          "analysisTime": 962
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_blog_post_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_blog_post_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_blog_post_page_0_document_1_tablet.png",
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
            "height": -139
          },
          "rawMisMatchPercentage": 10.475671098903101,
          "misMatchPercentage": "10.48",
          "analysisTime": 905
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_blog_post_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_blog_post_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_blog_post_page_0_document_2_mobile.png",
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
            "height": 65
          },
          "rawMisMatchPercentage": 17.461128680863027,
          "misMatchPercentage": "17.46",
          "analysisTime": 860
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_blog_post_page_0_document_2_mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_mini_hub_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_mini_hub_page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_mini_hub_page_0_document_0_desktop.png",
        "label": "mini_hub_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/mini-hub-item--backstop.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 84
          },
          "rawMisMatchPercentage": 7.636413512279278,
          "misMatchPercentage": "7.64",
          "analysisTime": 944
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_mini_hub_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_mini_hub_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_mini_hub_page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_mini_hub_page_0_document_1_tablet.png",
        "label": "mini_hub_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/mini-hub-item--backstop.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -124
          },
          "rawMisMatchPercentage": 14.691674187725631,
          "misMatchPercentage": "14.69",
          "analysisTime": 980
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_mini_hub_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_mini_hub_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_mini_hub_page_0_document_2_mobile.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_mini_hub_page_0_document_2_mobile.png",
        "label": "mini_hub_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/mini-hub-item--backstop.html",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -100
          },
          "rawMisMatchPercentage": 12.70083733182802,
          "misMatchPercentage": "12.70",
          "analysisTime": 416
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_mini_hub_page_0_document_2_mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_scp_page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_scp_page_0_document_0_desktop.png",
        "label": "scp_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/standard-content--backstop.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -77
          },
          "rawMisMatchPercentage": 8.703256226469737,
          "misMatchPercentage": "8.70",
          "analysisTime": 1286
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_scp_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_scp_page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_scp_page_0_document_1_tablet.png",
        "label": "scp_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/standard-content--backstop.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 16
          },
          "rawMisMatchPercentage": 34.58871501904289,
          "misMatchPercentage": "34.59",
          "analysisTime": 1664
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_scp_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_scp_page_0_document_2_mobile.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_scp_page_0_document_2_mobile.png",
        "label": "scp_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/standard-content--backstop.html",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -40
          },
          "rawMisMatchPercentage": 30.335207574654042,
          "misMatchPercentage": "30.34",
          "analysisTime": 1018
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_scp_page_0_document_2_mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_news_article_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_news_article_page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_news_article_page_0_document_0_desktop.png",
        "label": "news_article_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/news-item--backstop.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 37
          },
          "rawMisMatchPercentage": 6.647889967186726,
          "misMatchPercentage": "6.65",
          "analysisTime": 970
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_news_article_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_news_article_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_news_article_page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_news_article_page_0_document_1_tablet.png",
        "label": "news_article_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/news-item--backstop.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -136
          },
          "rawMisMatchPercentage": 13.080564170043822,
          "misMatchPercentage": "13.08",
          "analysisTime": 1119
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_news_article_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_news_article_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_news_article_page_0_document_2_mobile.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_news_article_page_0_document_2_mobile.png",
        "label": "news_article_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/news-item--backstop.html",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 196
          },
          "rawMisMatchPercentage": 24.659346888478126,
          "misMatchPercentage": "24.66",
          "analysisTime": 784
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_news_article_page_0_document_2_mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_scp_newsletter_signup_page_0_document_0_desktop.png",
        "label": "scp_newsletter_signup_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/standard-content-newsletter--backstop.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 132
          },
          "rawMisMatchPercentage": 6.794031881804044,
          "misMatchPercentage": "6.79",
          "analysisTime": 807
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_scp_newsletter_signup_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_scp_newsletter_signup_page_0_document_1_tablet.png",
        "label": "scp_newsletter_signup_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/standard-content-newsletter--backstop.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -40
          },
          "rawMisMatchPercentage": 26.183300752968435,
          "misMatchPercentage": "26.18",
          "analysisTime": 793
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_scp_newsletter_signup_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230217-121211/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_2_mobile.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_scp_newsletter_signup_page_0_document_2_mobile.png",
        "label": "scp_newsletter_signup_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/standard-content-newsletter--backstop.html",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -64
          },
          "rawMisMatchPercentage": 26.288826291079815,
          "misMatchPercentage": "26.29",
          "analysisTime": 494
        },
        "diffImage": "../bitmaps_test/20230217-121211/failed_diff_back_end_visual_regression_default_scp_newsletter_signup_page_0_document_2_mobile.png"
      },
      "status": "fail"
    }
  ],
  "id": "back_end_visual_regression_default"
});