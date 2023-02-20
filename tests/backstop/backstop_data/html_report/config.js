report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_landing_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_landing_page_0_document_0_desktop.png",
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
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_landing_page_0_document_1_tablet.png",
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
          "analysisTime": 560
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_landing_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_landing_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_landing_page_0_document_2_mobile.png",
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
          "analysisTime": 491
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_landing_page_0_document_2_mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_blog_post_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_blog_post_page_0_document_0_desktop.png",
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
          "rawMisMatchPercentage": 6.014840889054659,
          "misMatchPercentage": "6.01",
          "analysisTime": 1275
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_blog_post_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_blog_post_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_blog_post_page_0_document_1_tablet.png",
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
            "height": -75
          },
          "rawMisMatchPercentage": 9.848900254181698,
          "misMatchPercentage": "9.85",
          "analysisTime": 1177
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_blog_post_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_blog_post_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_blog_post_page_0_document_2_mobile.png",
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
            "height": 89
          },
          "rawMisMatchPercentage": 17.68569225376796,
          "misMatchPercentage": "17.69",
          "analysisTime": 768
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_blog_post_page_0_document_2_mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_mini_hub_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_mini_hub_page_0_document_0_desktop.png",
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
          "rawMisMatchPercentage": 7.708037345240512,
          "misMatchPercentage": "7.71",
          "analysisTime": 963
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_mini_hub_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_mini_hub_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_mini_hub_page_0_document_1_tablet.png",
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
            "height": 60
          },
          "rawMisMatchPercentage": 11.940884476534295,
          "misMatchPercentage": "11.94",
          "analysisTime": 994
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_mini_hub_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_mini_hub_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_mini_hub_page_0_document_2_mobile.png",
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
            "height": 76
          },
          "rawMisMatchPercentage": 12.39386583874306,
          "misMatchPercentage": "12.39",
          "analysisTime": 484
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_mini_hub_page_0_document_2_mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_scp_page_0_document_0_desktop.png",
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
            "height": 77
          },
          "rawMisMatchPercentage": 8.560905673810213,
          "misMatchPercentage": "8.56",
          "analysisTime": 1506
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_scp_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_scp_page_0_document_1_tablet.png",
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
            "height": -80
          },
          "rawMisMatchPercentage": 34.45364932885906,
          "misMatchPercentage": "34.45",
          "analysisTime": 1958
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_scp_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_scp_page_0_document_2_mobile.png",
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
            "height": -64
          },
          "rawMisMatchPercentage": 30.323900925791285,
          "misMatchPercentage": "30.32",
          "analysisTime": 1303
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_scp_page_0_document_2_mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_news_article_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_news_article_page_0_document_0_desktop.png",
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
          "rawMisMatchPercentage": 6.731509642768698,
          "misMatchPercentage": "6.73",
          "analysisTime": 1202
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_news_article_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_news_article_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_news_article_page_0_document_1_tablet.png",
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
            "height": -116
          },
          "rawMisMatchPercentage": 12.824549129353233,
          "misMatchPercentage": "12.82",
          "analysisTime": 1148
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_news_article_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_news_article_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_news_article_page_0_document_2_mobile.png",
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
          "rawMisMatchPercentage": 24.688478126925446,
          "misMatchPercentage": "24.69",
          "analysisTime": 981
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_news_article_page_0_document_2_mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_0_desktop.png",
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
          "analysisTime": 842
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_scp_newsletter_signup_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_1_tablet.png",
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
          "analysisTime": 904
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_scp_newsletter_signup_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_scp_newsletter_signup_page_0_document_2_mobile.png",
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
          "analysisTime": 560
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_scp_newsletter_signup_page_0_document_2_mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_cookies_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_scp_cookies_page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_scp_cookies_page_0_document_0_desktop.png",
        "label": "scp_cookies_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/standard-content-cookies--backstop.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 132
          },
          "rawMisMatchPercentage": 7.978666844947026,
          "misMatchPercentage": "7.98",
          "analysisTime": 1139
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_scp_cookies_page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_cookies_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_scp_cookies_page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_scp_cookies_page_0_document_1_tablet.png",
        "label": "scp_cookies_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/standard-content-cookies--backstop.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -88
          },
          "rawMisMatchPercentage": 24.46742217531576,
          "misMatchPercentage": "24.47",
          "analysisTime": 855
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_scp_cookies_page_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/back_end_visual_regression_default_scp_cookies_page_0_document_2_mobile.png",
        "test": "../bitmaps_test/20230220-100729/back_end_visual_regression_default_scp_cookies_page_0_document_2_mobile.png",
        "selector": "document",
        "fileName": "back_end_visual_regression_default_scp_cookies_page_0_document_2_mobile.png",
        "label": "scp_cookies_page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/templates/examples/standard-content-cookies--backstop.html",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -104
          },
          "rawMisMatchPercentage": 25.15588494794424,
          "misMatchPercentage": "25.16",
          "analysisTime": 610
        },
        "diffImage": "../bitmaps_test/20230220-100729/failed_diff_back_end_visual_regression_default_scp_cookies_page_0_document_2_mobile.png"
      },
      "status": "fail"
    }
  ],
  "id": "back_end_visual_regression_default"
});