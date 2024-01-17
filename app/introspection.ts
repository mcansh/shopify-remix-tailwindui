/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * You may import it to create a `graphql()` tag function with `gql.tada`
 * by importing it and passing it to `initGraphQLTada<>()`.
 *
 * @example
 * ```
 * import { initGraphQLTada } from 'gql.tada';
 * import type { introspection } from './introspection';
 *
 * export const graphql = initGraphQLTada<{
 *   introspection: typeof introspection;
 *   scalars: {
 *     DateTime: string;
 *     Json: any;
 *   };
 * }>();
 * ```
 */
const introspection = {
  "__schema": {
    "queryType": {
      "name": "QueryRoot"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "ApiVersion",
        "fields": [
          {
            "name": "displayName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "supported",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ApplePayWalletContentInput",
        "inputFields": [
          {
            "name": "billingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MailingAddressInput",
                "ofType": null
              }
            }
          },
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "header",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ApplePayWalletHeaderInput",
                "ofType": null
              }
            }
          },
          {
            "name": "lastDigits",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "signature",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "version",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ApplePayWalletHeaderInput",
        "inputFields": [
          {
            "name": "applicationData",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ephemeralPublicKey",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "publicKeyHash",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "transactionId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AppliedGiftCard",
        "fields": [
          {
            "name": "amountUsed",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "amountUsedV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "balance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "balanceV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "lastCharacters",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "presentmentAmountUsed",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Article",
        "fields": [
          {
            "name": "author",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ArticleAuthor",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "authorV2",
            "type": {
              "kind": "OBJECT",
              "name": "ArticleAuthor",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "blog",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Blog",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "comments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CommentConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "content",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "truncateAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentHtml",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "HTML",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "excerpt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "truncateAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "excerptHtml",
            "type": {
              "kind": "SCALAR",
              "name": "HTML",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "onlineStoreUrl",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "seo",
            "type": {
              "kind": "OBJECT",
              "name": "SEO",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          },
          {
            "kind": "INTERFACE",
            "name": "OnlineStorePublishable"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ArticleAuthor",
        "fields": [
          {
            "name": "bio",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ArticleConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ArticleEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Article",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ArticleEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ArticleSortKeys",
        "enumValues": [
          {
            "name": "TITLE"
          },
          {
            "name": "BLOG_TITLE"
          },
          {
            "name": "AUTHOR"
          },
          {
            "name": "UPDATED_AT"
          },
          {
            "name": "PUBLISHED_AT"
          },
          {
            "name": "ID"
          },
          {
            "name": "RELEVANCE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Attribute",
        "fields": [
          {
            "name": "key",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AttributeInput",
        "inputFields": [
          {
            "name": "key",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AutomaticDiscountApplication",
        "fields": [
          {
            "name": "allocationMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationAllocationMethod",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetSelection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationTargetSelection",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationTargetType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "PricingValue",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "DiscountApplication"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AvailableShippingRates",
        "fields": [
          {
            "name": "ready",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "shippingRates",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ShippingRate",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INTERFACE",
        "name": "BaseCartLine",
        "fields": [
          {
            "name": "attribute",
            "type": {
              "kind": "OBJECT",
              "name": "Attribute",
              "ofType": null
            },
            "args": [
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "attributes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Attribute",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "cost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CartLineCost",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "discountAllocations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "CartDiscountAllocation",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "estimatedCost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CartLineEstimatedCost",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "merchandise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "Merchandise",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sellingPlanAllocation",
            "type": {
              "kind": "OBJECT",
              "name": "SellingPlanAllocation",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CartLine"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "BaseCartLineConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "BaseCartLineEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "BaseCartLine",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "BaseCartLineEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INTERFACE",
                "name": "BaseCartLine",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Blog",
        "fields": [
          {
            "name": "articleByHandle",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "handle",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "articles",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ArticleConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "ArticleSortKeys",
                  "ofType": null
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "authors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ArticleAuthor",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "onlineStoreUrl",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "seo",
            "type": {
              "kind": "OBJECT",
              "name": "SEO",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          },
          {
            "kind": "INTERFACE",
            "name": "OnlineStorePublishable"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "BlogConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "BlogEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Blog",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "BlogEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Blog",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "BlogSortKeys",
        "enumValues": [
          {
            "name": "HANDLE"
          },
          {
            "name": "TITLE"
          },
          {
            "name": "ID"
          },
          {
            "name": "RELEVANCE"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "OBJECT",
        "name": "Brand",
        "fields": [
          {
            "name": "colors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BrandColors",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "coverImage",
            "type": {
              "kind": "OBJECT",
              "name": "MediaImage",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "logo",
            "type": {
              "kind": "OBJECT",
              "name": "MediaImage",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "shortDescription",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "slogan",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "squareLogo",
            "type": {
              "kind": "OBJECT",
              "name": "MediaImage",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "BrandColorGroup",
        "fields": [
          {
            "name": "background",
            "type": {
              "kind": "SCALAR",
              "name": "Color",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "foreground",
            "type": {
              "kind": "SCALAR",
              "name": "Color",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "BrandColors",
        "fields": [
          {
            "name": "primary",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "BrandColorGroup",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "secondary",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "BrandColorGroup",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CardBrand",
        "enumValues": [
          {
            "name": "VISA"
          },
          {
            "name": "MASTERCARD"
          },
          {
            "name": "DISCOVER"
          },
          {
            "name": "AMERICAN_EXPRESS"
          },
          {
            "name": "DINERS_CLUB"
          },
          {
            "name": "JCB"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Cart",
        "fields": [
          {
            "name": "attribute",
            "type": {
              "kind": "OBJECT",
              "name": "Attribute",
              "ofType": null
            },
            "args": [
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "attributes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Attribute",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "buyerIdentity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CartBuyerIdentity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "checkoutUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "cost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CartCost",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "deliveryGroups",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CartDeliveryGroupConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "discountAllocations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "CartDiscountAllocation",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "discountCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartDiscountCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "estimatedCost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CartEstimatedCost",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "lines",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BaseCartLineConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "note",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "totalQuantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartAttributesUpdatePayload",
        "fields": [
          {
            "name": "cart",
            "type": {
              "kind": "OBJECT",
              "name": "Cart",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartAutomaticDiscountAllocation",
        "fields": [
          {
            "name": "discountedAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CartDiscountAllocation"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartBuyerIdentity",
        "fields": [
          {
            "name": "countryCode",
            "type": {
              "kind": "ENUM",
              "name": "CountryCode",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "deliveryAddressPreferences",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "DeliveryAddress",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "phone",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "walletPreferences",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartBuyerIdentityInput",
        "inputFields": [
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "phone",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "countryCode",
            "type": {
              "kind": "ENUM",
              "name": "CountryCode",
              "ofType": null
            }
          },
          {
            "name": "customerAccessToken",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "deliveryAddressPreferences",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DeliveryAddressInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "walletPreferences",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartBuyerIdentityUpdatePayload",
        "fields": [
          {
            "name": "cart",
            "type": {
              "kind": "OBJECT",
              "name": "Cart",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CartCardSource",
        "enumValues": [
          {
            "name": "SAVED_CREDIT_CARD"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartCodeDiscountAllocation",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "discountedAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CartDiscountAllocation"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CartCompletionAction",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CompletePaymentChallenge"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartCompletionActionRequired",
        "fields": [
          {
            "name": "action",
            "type": {
              "kind": "UNION",
              "name": "CartCompletionAction",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "CartCompletionAttemptResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CartCompletionActionRequired"
          },
          {
            "kind": "OBJECT",
            "name": "CartCompletionFailed"
          },
          {
            "kind": "OBJECT",
            "name": "CartCompletionProcessing"
          },
          {
            "kind": "OBJECT",
            "name": "CartCompletionSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartCompletionFailed",
        "fields": [
          {
            "name": "errors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CompletionError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartCompletionProcessing",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pollDelay",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartCompletionSuccess",
        "fields": [
          {
            "name": "completedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "orderId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "orderUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartCost",
        "fields": [
          {
            "name": "checkoutChargeAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "subtotalAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "subtotalAmountEstimated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalAmountEstimated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalDutyAmount",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "totalDutyAmountEstimated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalTaxAmount",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "totalTaxAmountEstimated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartCreatePayload",
        "fields": [
          {
            "name": "cart",
            "type": {
              "kind": "OBJECT",
              "name": "Cart",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartCustomDiscountAllocation",
        "fields": [
          {
            "name": "discountedAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CartDiscountAllocation"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartDeliveryGroup",
        "fields": [
          {
            "name": "cartLines",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BaseCartLineConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "deliveryAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MailingAddress",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "deliveryOptions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartDeliveryOption",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "selectedDeliveryOption",
            "type": {
              "kind": "OBJECT",
              "name": "CartDeliveryOption",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartDeliveryGroupConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartDeliveryGroupEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartDeliveryGroup",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartDeliveryGroupEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CartDeliveryGroup",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartDeliveryOption",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "deliveryMethodType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DeliveryMethodType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "estimatedCost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartDirectPaymentMethodInput",
        "inputFields": [
          {
            "name": "billingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MailingAddressInput",
                "ofType": null
              }
            }
          },
          {
            "name": "sessionId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "cardSource",
            "type": {
              "kind": "ENUM",
              "name": "CartCardSource",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "CartDiscountAllocation",
        "fields": [
          {
            "name": "discountedAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CartAutomaticDiscountAllocation"
          },
          {
            "kind": "OBJECT",
            "name": "CartCodeDiscountAllocation"
          },
          {
            "kind": "OBJECT",
            "name": "CartCustomDiscountAllocation"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartDiscountCode",
        "fields": [
          {
            "name": "applicable",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartDiscountCodesUpdatePayload",
        "fields": [
          {
            "name": "cart",
            "type": {
              "kind": "OBJECT",
              "name": "Cart",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CartErrorCode",
        "enumValues": [
          {
            "name": "INVALID"
          },
          {
            "name": "LESS_THAN"
          },
          {
            "name": "INVALID_MERCHANDISE_LINE"
          },
          {
            "name": "MISSING_DISCOUNT_CODE"
          },
          {
            "name": "MISSING_NOTE"
          },
          {
            "name": "INVALID_DELIVERY_GROUP"
          },
          {
            "name": "INVALID_DELIVERY_OPTION"
          },
          {
            "name": "INVALID_PAYMENT"
          },
          {
            "name": "PAYMENT_METHOD_NOT_SUPPORTED"
          },
          {
            "name": "INVALID_PAYMENT_EMPTY_CART"
          },
          {
            "name": "INVALID_METAFIELDS"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartEstimatedCost",
        "fields": [
          {
            "name": "checkoutChargeAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "subtotalAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalDutyAmount",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "totalTaxAmount",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartFreePaymentMethodInput",
        "inputFields": [
          {
            "name": "billingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MailingAddressInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartInput",
        "inputFields": [
          {
            "name": "attributes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AttributeInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lines",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CartLineInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "discountCodes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "note",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "buyerIdentity",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CartBuyerIdentityInput",
              "ofType": null
            }
          },
          {
            "name": "metafields",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CartInputMetafieldInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartInputMetafieldInput",
        "inputFields": [
          {
            "name": "key",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartLine",
        "fields": [
          {
            "name": "attribute",
            "type": {
              "kind": "OBJECT",
              "name": "Attribute",
              "ofType": null
            },
            "args": [
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "attributes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Attribute",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "cost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CartLineCost",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "discountAllocations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "CartDiscountAllocation",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "estimatedCost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CartLineEstimatedCost",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "merchandise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "Merchandise",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sellingPlanAllocation",
            "type": {
              "kind": "OBJECT",
              "name": "SellingPlanAllocation",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "BaseCartLine"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartLineCost",
        "fields": [
          {
            "name": "amountPerQuantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "compareAtAmountPerQuantity",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "subtotalAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartLineEstimatedCost",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "compareAtAmount",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "subtotalAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartLineInput",
        "inputFields": [
          {
            "name": "attributes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AttributeInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "quantity",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": "1"
          },
          {
            "name": "merchandiseId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "sellingPlanId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartLineUpdateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "quantity",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "merchandiseId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "attributes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AttributeInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "sellingPlanId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartLinesAddPayload",
        "fields": [
          {
            "name": "cart",
            "type": {
              "kind": "OBJECT",
              "name": "Cart",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartLinesRemovePayload",
        "fields": [
          {
            "name": "cart",
            "type": {
              "kind": "OBJECT",
              "name": "Cart",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartLinesUpdatePayload",
        "fields": [
          {
            "name": "cart",
            "type": {
              "kind": "OBJECT",
              "name": "Cart",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartMetafieldDeleteInput",
        "inputFields": [
          {
            "name": "ownerId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "key",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartMetafieldDeletePayload",
        "fields": [
          {
            "name": "deletedId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MetafieldDeleteUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartMetafieldsSetInput",
        "inputFields": [
          {
            "name": "ownerId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "key",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartMetafieldsSetPayload",
        "fields": [
          {
            "name": "metafields",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MetafieldsSetUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartNoteUpdatePayload",
        "fields": [
          {
            "name": "cart",
            "type": {
              "kind": "OBJECT",
              "name": "Cart",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartPaymentInput",
        "inputFields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MoneyInput",
                "ofType": null
              }
            }
          },
          {
            "name": "sourceIdentifier",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "freePaymentMethod",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CartFreePaymentMethodInput",
              "ofType": null
            }
          },
          {
            "name": "directPaymentMethod",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CartDirectPaymentMethodInput",
              "ofType": null
            }
          },
          {
            "name": "walletPaymentMethod",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CartWalletPaymentMethodInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartPaymentUpdatePayload",
        "fields": [
          {
            "name": "cart",
            "type": {
              "kind": "OBJECT",
              "name": "Cart",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartSelectedDeliveryOptionInput",
        "inputFields": [
          {
            "name": "deliveryGroupId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "deliveryOptionHandle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartSelectedDeliveryOptionsUpdatePayload",
        "fields": [
          {
            "name": "cart",
            "type": {
              "kind": "OBJECT",
              "name": "Cart",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartSubmitForCompletionPayload",
        "fields": [
          {
            "name": "result",
            "type": {
              "kind": "UNION",
              "name": "CartSubmitForCompletionResult",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "CartSubmitForCompletionResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SubmitAlreadyAccepted"
          },
          {
            "kind": "OBJECT",
            "name": "SubmitFailed"
          },
          {
            "kind": "OBJECT",
            "name": "SubmitSuccess"
          },
          {
            "kind": "OBJECT",
            "name": "SubmitThrottled"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CartUserError",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "ENUM",
              "name": "CartErrorCode",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "field",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "DisplayableError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CartWalletPaymentMethodInput",
        "inputFields": [
          {
            "name": "applePayWalletContent",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ApplePayWalletContentInput",
              "ofType": null
            }
          },
          {
            "name": "shopPayWalletContent",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ShopPayWalletContentInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Checkout",
        "fields": [
          {
            "name": "appliedGiftCards",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AppliedGiftCard",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "availableShippingRates",
            "type": {
              "kind": "OBJECT",
              "name": "AvailableShippingRates",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "buyerIdentity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CheckoutBuyerIdentity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "completedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "customAttributes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Attribute",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "discountApplications",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DiscountApplicationConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "lineItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CheckoutLineItemConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "lineItemsSubtotalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "note",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "order",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "orderStatusUrl",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "paymentDue",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "paymentDueV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "ready",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "requiresShipping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "shippingAddress",
            "type": {
              "kind": "OBJECT",
              "name": "MailingAddress",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "shippingDiscountAllocations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DiscountAllocation",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "shippingLine",
            "type": {
              "kind": "OBJECT",
              "name": "ShippingRate",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "subtotalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "subtotalPriceV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "taxExempt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "taxesIncluded",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalDuties",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "totalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalPriceV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalTaxV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "webUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CheckoutAttributesUpdateV2Input",
        "inputFields": [
          {
            "name": "note",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "customAttributes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AttributeInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "allowPartialAddresses",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": "false"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutAttributesUpdateV2Payload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutBuyerIdentity",
        "fields": [
          {
            "name": "countryCode",
            "type": {
              "kind": "ENUM",
              "name": "CountryCode",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CheckoutBuyerIdentityInput",
        "inputFields": [
          {
            "name": "countryCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CountryCode",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutCompleteFreePayload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutCompleteWithCreditCardV2Payload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "payment",
            "type": {
              "kind": "OBJECT",
              "name": "Payment",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutCompleteWithTokenizedPaymentV3Payload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "payment",
            "type": {
              "kind": "OBJECT",
              "name": "Payment",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CheckoutCreateInput",
        "inputFields": [
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lineItems",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CheckoutLineItemInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "shippingAddress",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "MailingAddressInput",
              "ofType": null
            }
          },
          {
            "name": "note",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "customAttributes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AttributeInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "allowPartialAddresses",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "buyerIdentity",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CheckoutBuyerIdentityInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutCreatePayload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "queueToken",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutCustomerAssociateV2Payload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutCustomerDisassociateV2Payload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutDiscountCodeApplyV2Payload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutDiscountCodeRemovePayload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutEmailUpdateV2Payload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CheckoutErrorCode",
        "enumValues": [
          {
            "name": "BLANK"
          },
          {
            "name": "INVALID"
          },
          {
            "name": "TOO_LONG"
          },
          {
            "name": "PRESENT"
          },
          {
            "name": "LESS_THAN"
          },
          {
            "name": "GREATER_THAN_OR_EQUAL_TO"
          },
          {
            "name": "LESS_THAN_OR_EQUAL_TO"
          },
          {
            "name": "ALREADY_COMPLETED"
          },
          {
            "name": "LOCKED"
          },
          {
            "name": "NOT_SUPPORTED"
          },
          {
            "name": "BAD_DOMAIN"
          },
          {
            "name": "INVALID_FOR_COUNTRY"
          },
          {
            "name": "INVALID_FOR_COUNTRY_AND_PROVINCE"
          },
          {
            "name": "INVALID_STATE_IN_COUNTRY"
          },
          {
            "name": "INVALID_PROVINCE_IN_COUNTRY"
          },
          {
            "name": "INVALID_REGION_IN_COUNTRY"
          },
          {
            "name": "SHIPPING_RATE_EXPIRED"
          },
          {
            "name": "GIFT_CARD_UNUSABLE"
          },
          {
            "name": "GIFT_CARD_DISABLED"
          },
          {
            "name": "GIFT_CARD_CODE_INVALID"
          },
          {
            "name": "GIFT_CARD_ALREADY_APPLIED"
          },
          {
            "name": "GIFT_CARD_CURRENCY_MISMATCH"
          },
          {
            "name": "GIFT_CARD_EXPIRED"
          },
          {
            "name": "GIFT_CARD_DEPLETED"
          },
          {
            "name": "GIFT_CARD_NOT_FOUND"
          },
          {
            "name": "CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE"
          },
          {
            "name": "DISCOUNT_EXPIRED"
          },
          {
            "name": "DISCOUNT_DISABLED"
          },
          {
            "name": "DISCOUNT_LIMIT_REACHED"
          },
          {
            "name": "HIGHER_VALUE_DISCOUNT_APPLIED"
          },
          {
            "name": "MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED"
          },
          {
            "name": "DISCOUNT_NOT_FOUND"
          },
          {
            "name": "CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE"
          },
          {
            "name": "DISCOUNT_CODE_APPLICATION_FAILED"
          },
          {
            "name": "EMPTY"
          },
          {
            "name": "NOT_ENOUGH_IN_STOCK"
          },
          {
            "name": "MISSING_PAYMENT_INPUT"
          },
          {
            "name": "TOTAL_PRICE_MISMATCH"
          },
          {
            "name": "LINE_ITEM_NOT_FOUND"
          },
          {
            "name": "UNABLE_TO_APPLY"
          },
          {
            "name": "DISCOUNT_ALREADY_APPLIED"
          },
          {
            "name": "THROTTLED_DURING_CHECKOUT"
          },
          {
            "name": "EXPIRED_QUEUE_TOKEN"
          },
          {
            "name": "INVALID_QUEUE_TOKEN"
          },
          {
            "name": "INVALID_COUNTRY_AND_CURRENCY"
          },
          {
            "name": "PRODUCT_NOT_AVAILABLE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutGiftCardRemoveV2Payload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutGiftCardsAppendPayload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutLineItem",
        "fields": [
          {
            "name": "customAttributes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Attribute",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "discountAllocations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DiscountAllocation",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "unitPrice",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variant",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariant",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutLineItemConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutLineItemEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutLineItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutLineItemEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CheckoutLineItem",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CheckoutLineItemInput",
        "inputFields": [
          {
            "name": "customAttributes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AttributeInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "variantId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CheckoutLineItemUpdateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "variantId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "quantity",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "customAttributes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AttributeInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutLineItemsAddPayload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutLineItemsRemovePayload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutLineItemsReplacePayload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutLineItemsUpdatePayload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutShippingAddressUpdateV2Payload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutShippingLineUpdatePayload",
        "fields": [
          {
            "name": "checkout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkoutUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CheckoutUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CheckoutUserError",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "ENUM",
              "name": "CheckoutErrorCode",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "field",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "DisplayableError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Collection",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "truncateAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "descriptionHtml",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "HTML",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "onlineStoreUrl",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "products",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "ProductCollectionSortKeys",
                  "ofType": null
                }
              },
              {
                "name": "filters",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ProductFilter",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "seo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SEO",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          },
          {
            "kind": "INTERFACE",
            "name": "OnlineStorePublishable"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CollectionConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CollectionEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Collection",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CollectionEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Collection",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CollectionSortKeys",
        "enumValues": [
          {
            "name": "TITLE"
          },
          {
            "name": "UPDATED_AT"
          },
          {
            "name": "ID"
          },
          {
            "name": "RELEVANCE"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Color"
      },
      {
        "kind": "OBJECT",
        "name": "Comment",
        "fields": [
          {
            "name": "author",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CommentAuthor",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "truncateAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentHtml",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "HTML",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CommentAuthor",
        "fields": [
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CommentConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CommentEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Comment",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CommentEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Comment",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CompletePaymentChallenge",
        "fields": [
          {
            "name": "redirectUrl",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CompletionError",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CompletionErrorCode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CompletionErrorCode",
        "enumValues": [
          {
            "name": "ERROR"
          },
          {
            "name": "INVENTORY_RESERVATION_ERROR"
          },
          {
            "name": "PAYMENT_ERROR"
          },
          {
            "name": "PAYMENT_TRANSIENT_ERROR"
          },
          {
            "name": "PAYMENT_AMOUNT_TOO_SMALL"
          },
          {
            "name": "PAYMENT_GATEWAY_NOT_ENABLED_ERROR"
          },
          {
            "name": "PAYMENT_INSUFFICIENT_FUNDS"
          },
          {
            "name": "PAYMENT_INVALID_PAYMENT_METHOD"
          },
          {
            "name": "PAYMENT_INVALID_CURRENCY"
          },
          {
            "name": "PAYMENT_INVALID_CREDIT_CARD"
          },
          {
            "name": "PAYMENT_INVALID_BILLING_ADDRESS"
          },
          {
            "name": "PAYMENT_CARD_DECLINED"
          },
          {
            "name": "PAYMENT_CALL_ISSUER"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Country",
        "fields": [
          {
            "name": "availableLanguages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Language",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Currency",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "isoCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CountryCode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "market",
            "type": {
              "kind": "OBJECT",
              "name": "Market",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "unitSystem",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "UnitSystem",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CountryCode",
        "enumValues": [
          {
            "name": "AF"
          },
          {
            "name": "AX"
          },
          {
            "name": "AL"
          },
          {
            "name": "DZ"
          },
          {
            "name": "AD"
          },
          {
            "name": "AO"
          },
          {
            "name": "AI"
          },
          {
            "name": "AG"
          },
          {
            "name": "AR"
          },
          {
            "name": "AM"
          },
          {
            "name": "AW"
          },
          {
            "name": "AC"
          },
          {
            "name": "AU"
          },
          {
            "name": "AT"
          },
          {
            "name": "AZ"
          },
          {
            "name": "BS"
          },
          {
            "name": "BH"
          },
          {
            "name": "BD"
          },
          {
            "name": "BB"
          },
          {
            "name": "BY"
          },
          {
            "name": "BE"
          },
          {
            "name": "BZ"
          },
          {
            "name": "BJ"
          },
          {
            "name": "BM"
          },
          {
            "name": "BT"
          },
          {
            "name": "BO"
          },
          {
            "name": "BA"
          },
          {
            "name": "BW"
          },
          {
            "name": "BV"
          },
          {
            "name": "BR"
          },
          {
            "name": "IO"
          },
          {
            "name": "BN"
          },
          {
            "name": "BG"
          },
          {
            "name": "BF"
          },
          {
            "name": "BI"
          },
          {
            "name": "KH"
          },
          {
            "name": "CA"
          },
          {
            "name": "CV"
          },
          {
            "name": "BQ"
          },
          {
            "name": "KY"
          },
          {
            "name": "CF"
          },
          {
            "name": "TD"
          },
          {
            "name": "CL"
          },
          {
            "name": "CN"
          },
          {
            "name": "CX"
          },
          {
            "name": "CC"
          },
          {
            "name": "CO"
          },
          {
            "name": "KM"
          },
          {
            "name": "CG"
          },
          {
            "name": "CD"
          },
          {
            "name": "CK"
          },
          {
            "name": "CR"
          },
          {
            "name": "HR"
          },
          {
            "name": "CU"
          },
          {
            "name": "CW"
          },
          {
            "name": "CY"
          },
          {
            "name": "CZ"
          },
          {
            "name": "CI"
          },
          {
            "name": "DK"
          },
          {
            "name": "DJ"
          },
          {
            "name": "DM"
          },
          {
            "name": "DO"
          },
          {
            "name": "EC"
          },
          {
            "name": "EG"
          },
          {
            "name": "SV"
          },
          {
            "name": "GQ"
          },
          {
            "name": "ER"
          },
          {
            "name": "EE"
          },
          {
            "name": "SZ"
          },
          {
            "name": "ET"
          },
          {
            "name": "FK"
          },
          {
            "name": "FO"
          },
          {
            "name": "FJ"
          },
          {
            "name": "FI"
          },
          {
            "name": "FR"
          },
          {
            "name": "GF"
          },
          {
            "name": "PF"
          },
          {
            "name": "TF"
          },
          {
            "name": "GA"
          },
          {
            "name": "GM"
          },
          {
            "name": "GE"
          },
          {
            "name": "DE"
          },
          {
            "name": "GH"
          },
          {
            "name": "GI"
          },
          {
            "name": "GR"
          },
          {
            "name": "GL"
          },
          {
            "name": "GD"
          },
          {
            "name": "GP"
          },
          {
            "name": "GT"
          },
          {
            "name": "GG"
          },
          {
            "name": "GN"
          },
          {
            "name": "GW"
          },
          {
            "name": "GY"
          },
          {
            "name": "HT"
          },
          {
            "name": "HM"
          },
          {
            "name": "VA"
          },
          {
            "name": "HN"
          },
          {
            "name": "HK"
          },
          {
            "name": "HU"
          },
          {
            "name": "IS"
          },
          {
            "name": "IN"
          },
          {
            "name": "ID"
          },
          {
            "name": "IR"
          },
          {
            "name": "IQ"
          },
          {
            "name": "IE"
          },
          {
            "name": "IM"
          },
          {
            "name": "IL"
          },
          {
            "name": "IT"
          },
          {
            "name": "JM"
          },
          {
            "name": "JP"
          },
          {
            "name": "JE"
          },
          {
            "name": "JO"
          },
          {
            "name": "KZ"
          },
          {
            "name": "KE"
          },
          {
            "name": "KI"
          },
          {
            "name": "KP"
          },
          {
            "name": "XK"
          },
          {
            "name": "KW"
          },
          {
            "name": "KG"
          },
          {
            "name": "LA"
          },
          {
            "name": "LV"
          },
          {
            "name": "LB"
          },
          {
            "name": "LS"
          },
          {
            "name": "LR"
          },
          {
            "name": "LY"
          },
          {
            "name": "LI"
          },
          {
            "name": "LT"
          },
          {
            "name": "LU"
          },
          {
            "name": "MO"
          },
          {
            "name": "MG"
          },
          {
            "name": "MW"
          },
          {
            "name": "MY"
          },
          {
            "name": "MV"
          },
          {
            "name": "ML"
          },
          {
            "name": "MT"
          },
          {
            "name": "MQ"
          },
          {
            "name": "MR"
          },
          {
            "name": "MU"
          },
          {
            "name": "YT"
          },
          {
            "name": "MX"
          },
          {
            "name": "MD"
          },
          {
            "name": "MC"
          },
          {
            "name": "MN"
          },
          {
            "name": "ME"
          },
          {
            "name": "MS"
          },
          {
            "name": "MA"
          },
          {
            "name": "MZ"
          },
          {
            "name": "MM"
          },
          {
            "name": "NA"
          },
          {
            "name": "NR"
          },
          {
            "name": "NP"
          },
          {
            "name": "NL"
          },
          {
            "name": "AN"
          },
          {
            "name": "NC"
          },
          {
            "name": "NZ"
          },
          {
            "name": "NI"
          },
          {
            "name": "NE"
          },
          {
            "name": "NG"
          },
          {
            "name": "NU"
          },
          {
            "name": "NF"
          },
          {
            "name": "MK"
          },
          {
            "name": "NO"
          },
          {
            "name": "OM"
          },
          {
            "name": "PK"
          },
          {
            "name": "PS"
          },
          {
            "name": "PA"
          },
          {
            "name": "PG"
          },
          {
            "name": "PY"
          },
          {
            "name": "PE"
          },
          {
            "name": "PH"
          },
          {
            "name": "PN"
          },
          {
            "name": "PL"
          },
          {
            "name": "PT"
          },
          {
            "name": "QA"
          },
          {
            "name": "CM"
          },
          {
            "name": "RE"
          },
          {
            "name": "RO"
          },
          {
            "name": "RU"
          },
          {
            "name": "RW"
          },
          {
            "name": "BL"
          },
          {
            "name": "SH"
          },
          {
            "name": "KN"
          },
          {
            "name": "LC"
          },
          {
            "name": "MF"
          },
          {
            "name": "PM"
          },
          {
            "name": "WS"
          },
          {
            "name": "SM"
          },
          {
            "name": "ST"
          },
          {
            "name": "SA"
          },
          {
            "name": "SN"
          },
          {
            "name": "RS"
          },
          {
            "name": "SC"
          },
          {
            "name": "SL"
          },
          {
            "name": "SG"
          },
          {
            "name": "SX"
          },
          {
            "name": "SK"
          },
          {
            "name": "SI"
          },
          {
            "name": "SB"
          },
          {
            "name": "SO"
          },
          {
            "name": "ZA"
          },
          {
            "name": "GS"
          },
          {
            "name": "KR"
          },
          {
            "name": "SS"
          },
          {
            "name": "ES"
          },
          {
            "name": "LK"
          },
          {
            "name": "VC"
          },
          {
            "name": "SD"
          },
          {
            "name": "SR"
          },
          {
            "name": "SJ"
          },
          {
            "name": "SE"
          },
          {
            "name": "CH"
          },
          {
            "name": "SY"
          },
          {
            "name": "TW"
          },
          {
            "name": "TJ"
          },
          {
            "name": "TZ"
          },
          {
            "name": "TH"
          },
          {
            "name": "TL"
          },
          {
            "name": "TG"
          },
          {
            "name": "TK"
          },
          {
            "name": "TO"
          },
          {
            "name": "TT"
          },
          {
            "name": "TA"
          },
          {
            "name": "TN"
          },
          {
            "name": "TR"
          },
          {
            "name": "TM"
          },
          {
            "name": "TC"
          },
          {
            "name": "TV"
          },
          {
            "name": "UG"
          },
          {
            "name": "UA"
          },
          {
            "name": "AE"
          },
          {
            "name": "GB"
          },
          {
            "name": "US"
          },
          {
            "name": "UM"
          },
          {
            "name": "UY"
          },
          {
            "name": "UZ"
          },
          {
            "name": "VU"
          },
          {
            "name": "VE"
          },
          {
            "name": "VN"
          },
          {
            "name": "VG"
          },
          {
            "name": "WF"
          },
          {
            "name": "EH"
          },
          {
            "name": "YE"
          },
          {
            "name": "ZM"
          },
          {
            "name": "ZW"
          },
          {
            "name": "ZZ"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreditCard",
        "fields": [
          {
            "name": "brand",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "expiryMonth",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "expiryYear",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "firstDigits",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "lastDigits",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "maskedNumber",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreditCardPaymentInputV2",
        "inputFields": [
          {
            "name": "paymentAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MoneyInput",
                "ofType": null
              }
            }
          },
          {
            "name": "idempotencyKey",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "billingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MailingAddressInput",
                "ofType": null
              }
            }
          },
          {
            "name": "vaultId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "test",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": "false"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "CropRegion",
        "enumValues": [
          {
            "name": "CENTER"
          },
          {
            "name": "TOP"
          },
          {
            "name": "BOTTOM"
          },
          {
            "name": "LEFT"
          },
          {
            "name": "RIGHT"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Currency",
        "fields": [
          {
            "name": "isoCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "symbol",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CurrencyCode",
        "enumValues": [
          {
            "name": "USD"
          },
          {
            "name": "EUR"
          },
          {
            "name": "GBP"
          },
          {
            "name": "CAD"
          },
          {
            "name": "AFN"
          },
          {
            "name": "ALL"
          },
          {
            "name": "DZD"
          },
          {
            "name": "AOA"
          },
          {
            "name": "ARS"
          },
          {
            "name": "AMD"
          },
          {
            "name": "AWG"
          },
          {
            "name": "AUD"
          },
          {
            "name": "BBD"
          },
          {
            "name": "AZN"
          },
          {
            "name": "BDT"
          },
          {
            "name": "BSD"
          },
          {
            "name": "BHD"
          },
          {
            "name": "BIF"
          },
          {
            "name": "BZD"
          },
          {
            "name": "BMD"
          },
          {
            "name": "BTN"
          },
          {
            "name": "BAM"
          },
          {
            "name": "BRL"
          },
          {
            "name": "BOB"
          },
          {
            "name": "BWP"
          },
          {
            "name": "BND"
          },
          {
            "name": "BGN"
          },
          {
            "name": "MMK"
          },
          {
            "name": "KHR"
          },
          {
            "name": "CVE"
          },
          {
            "name": "KYD"
          },
          {
            "name": "XAF"
          },
          {
            "name": "CLP"
          },
          {
            "name": "CNY"
          },
          {
            "name": "COP"
          },
          {
            "name": "KMF"
          },
          {
            "name": "CDF"
          },
          {
            "name": "CRC"
          },
          {
            "name": "HRK"
          },
          {
            "name": "CZK"
          },
          {
            "name": "DKK"
          },
          {
            "name": "DOP"
          },
          {
            "name": "XCD"
          },
          {
            "name": "EGP"
          },
          {
            "name": "ERN"
          },
          {
            "name": "ETB"
          },
          {
            "name": "FKP"
          },
          {
            "name": "XPF"
          },
          {
            "name": "FJD"
          },
          {
            "name": "GIP"
          },
          {
            "name": "GMD"
          },
          {
            "name": "GHS"
          },
          {
            "name": "GTQ"
          },
          {
            "name": "GYD"
          },
          {
            "name": "GEL"
          },
          {
            "name": "HTG"
          },
          {
            "name": "HNL"
          },
          {
            "name": "HKD"
          },
          {
            "name": "HUF"
          },
          {
            "name": "ISK"
          },
          {
            "name": "INR"
          },
          {
            "name": "IDR"
          },
          {
            "name": "ILS"
          },
          {
            "name": "IQD"
          },
          {
            "name": "JMD"
          },
          {
            "name": "JPY"
          },
          {
            "name": "JEP"
          },
          {
            "name": "JOD"
          },
          {
            "name": "KZT"
          },
          {
            "name": "KES"
          },
          {
            "name": "KID"
          },
          {
            "name": "KWD"
          },
          {
            "name": "KGS"
          },
          {
            "name": "LAK"
          },
          {
            "name": "LVL"
          },
          {
            "name": "LBP"
          },
          {
            "name": "LSL"
          },
          {
            "name": "LRD"
          },
          {
            "name": "LTL"
          },
          {
            "name": "MGA"
          },
          {
            "name": "MKD"
          },
          {
            "name": "MOP"
          },
          {
            "name": "MWK"
          },
          {
            "name": "MVR"
          },
          {
            "name": "MRU"
          },
          {
            "name": "MXN"
          },
          {
            "name": "MYR"
          },
          {
            "name": "MUR"
          },
          {
            "name": "MDL"
          },
          {
            "name": "MAD"
          },
          {
            "name": "MNT"
          },
          {
            "name": "MZN"
          },
          {
            "name": "NAD"
          },
          {
            "name": "NPR"
          },
          {
            "name": "ANG"
          },
          {
            "name": "NZD"
          },
          {
            "name": "NIO"
          },
          {
            "name": "NGN"
          },
          {
            "name": "NOK"
          },
          {
            "name": "OMR"
          },
          {
            "name": "PAB"
          },
          {
            "name": "PKR"
          },
          {
            "name": "PGK"
          },
          {
            "name": "PYG"
          },
          {
            "name": "PEN"
          },
          {
            "name": "PHP"
          },
          {
            "name": "PLN"
          },
          {
            "name": "QAR"
          },
          {
            "name": "RON"
          },
          {
            "name": "RUB"
          },
          {
            "name": "RWF"
          },
          {
            "name": "WST"
          },
          {
            "name": "SHP"
          },
          {
            "name": "SAR"
          },
          {
            "name": "RSD"
          },
          {
            "name": "SCR"
          },
          {
            "name": "SGD"
          },
          {
            "name": "SDG"
          },
          {
            "name": "SOS"
          },
          {
            "name": "SYP"
          },
          {
            "name": "ZAR"
          },
          {
            "name": "KRW"
          },
          {
            "name": "SSP"
          },
          {
            "name": "SBD"
          },
          {
            "name": "LKR"
          },
          {
            "name": "SRD"
          },
          {
            "name": "SZL"
          },
          {
            "name": "SEK"
          },
          {
            "name": "CHF"
          },
          {
            "name": "TWD"
          },
          {
            "name": "THB"
          },
          {
            "name": "TZS"
          },
          {
            "name": "TTD"
          },
          {
            "name": "TND"
          },
          {
            "name": "TRY"
          },
          {
            "name": "TMT"
          },
          {
            "name": "UGX"
          },
          {
            "name": "UAH"
          },
          {
            "name": "AED"
          },
          {
            "name": "UYU"
          },
          {
            "name": "UZS"
          },
          {
            "name": "VUV"
          },
          {
            "name": "VES"
          },
          {
            "name": "VND"
          },
          {
            "name": "XOF"
          },
          {
            "name": "YER"
          },
          {
            "name": "ZMW"
          },
          {
            "name": "BYN"
          },
          {
            "name": "BYR"
          },
          {
            "name": "DJF"
          },
          {
            "name": "GNF"
          },
          {
            "name": "IRR"
          },
          {
            "name": "LYD"
          },
          {
            "name": "SLL"
          },
          {
            "name": "STD"
          },
          {
            "name": "STN"
          },
          {
            "name": "TJS"
          },
          {
            "name": "TOP"
          },
          {
            "name": "VED"
          },
          {
            "name": "VEF"
          },
          {
            "name": "XXX"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Customer",
        "fields": [
          {
            "name": "acceptsMarketing",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "addresses",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MailingAddressConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "defaultAddress",
            "type": {
              "kind": "OBJECT",
              "name": "MailingAddress",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "displayName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "lastIncompleteCheckout",
            "type": {
              "kind": "OBJECT",
              "name": "Checkout",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "numberOfOrders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UnsignedInt64",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "orders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "OrderSortKeys",
                  "ofType": null
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "phone",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CustomerAccessToken",
        "fields": [
          {
            "name": "accessToken",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CustomerAccessTokenCreateInput",
        "inputFields": [
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CustomerAccessTokenCreatePayload",
        "fields": [
          {
            "name": "customerAccessToken",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessToken",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerAccessTokenCreateWithMultipassPayload",
        "fields": [
          {
            "name": "customerAccessToken",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessToken",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerAccessTokenDeletePayload",
        "fields": [
          {
            "name": "deletedAccessToken",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "deletedCustomerAccessTokenId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerAccessTokenRenewPayload",
        "fields": [
          {
            "name": "customerAccessToken",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessToken",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerActivateByUrlPayload",
        "fields": [
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerAccessToken",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessToken",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CustomerActivateInput",
        "inputFields": [
          {
            "name": "activationToken",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CustomerActivatePayload",
        "fields": [
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerAccessToken",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessToken",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerAddressCreatePayload",
        "fields": [
          {
            "name": "customerAddress",
            "type": {
              "kind": "OBJECT",
              "name": "MailingAddress",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerAddressDeletePayload",
        "fields": [
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "deletedCustomerAddressId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerAddressUpdatePayload",
        "fields": [
          {
            "name": "customerAddress",
            "type": {
              "kind": "OBJECT",
              "name": "MailingAddress",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CustomerCreateInput",
        "inputFields": [
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "phone",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "acceptsMarketing",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CustomerCreatePayload",
        "fields": [
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerDefaultAddressUpdatePayload",
        "fields": [
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CustomerErrorCode",
        "enumValues": [
          {
            "name": "BLANK"
          },
          {
            "name": "INVALID"
          },
          {
            "name": "TAKEN"
          },
          {
            "name": "TOO_LONG"
          },
          {
            "name": "TOO_SHORT"
          },
          {
            "name": "UNIDENTIFIED_CUSTOMER"
          },
          {
            "name": "CUSTOMER_DISABLED"
          },
          {
            "name": "PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE"
          },
          {
            "name": "CONTAINS_HTML_TAGS"
          },
          {
            "name": "CONTAINS_URL"
          },
          {
            "name": "TOKEN_INVALID"
          },
          {
            "name": "ALREADY_ENABLED"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "BAD_DOMAIN"
          },
          {
            "name": "INVALID_MULTIPASS_REQUEST"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CustomerRecoverPayload",
        "fields": [
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerResetByUrlPayload",
        "fields": [
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerAccessToken",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessToken",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CustomerResetInput",
        "inputFields": [
          {
            "name": "resetToken",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CustomerResetPayload",
        "fields": [
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerAccessToken",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessToken",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CustomerUpdateInput",
        "inputFields": [
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "phone",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "acceptsMarketing",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CustomerUpdatePayload",
        "fields": [
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerAccessToken",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessToken",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUserErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerUserError",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "ENUM",
              "name": "CustomerErrorCode",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "field",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "DisplayableError"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "DateTime"
      },
      {
        "kind": "SCALAR",
        "name": "Decimal"
      },
      {
        "kind": "UNION",
        "name": "DeliveryAddress",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MailingAddress"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeliveryAddressInput",
        "inputFields": [
          {
            "name": "deliveryAddress",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "MailingAddressInput",
              "ofType": null
            }
          },
          {
            "name": "customerAddressId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "DeliveryMethodType",
        "enumValues": [
          {
            "name": "SHIPPING"
          },
          {
            "name": "PICK_UP"
          },
          {
            "name": "RETAIL"
          },
          {
            "name": "LOCAL"
          },
          {
            "name": "PICKUP_POINT"
          },
          {
            "name": "NONE"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "DigitalWallet",
        "enumValues": [
          {
            "name": "APPLE_PAY"
          },
          {
            "name": "ANDROID_PAY"
          },
          {
            "name": "GOOGLE_PAY"
          },
          {
            "name": "SHOPIFY_PAY"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DiscountAllocation",
        "fields": [
          {
            "name": "allocatedAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "discountApplication",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INTERFACE",
                "name": "DiscountApplication",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INTERFACE",
        "name": "DiscountApplication",
        "fields": [
          {
            "name": "allocationMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationAllocationMethod",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetSelection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationTargetSelection",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationTargetType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "PricingValue",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AutomaticDiscountApplication"
          },
          {
            "kind": "OBJECT",
            "name": "DiscountCodeApplication"
          },
          {
            "kind": "OBJECT",
            "name": "ManualDiscountApplication"
          },
          {
            "kind": "OBJECT",
            "name": "ScriptDiscountApplication"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "DiscountApplicationAllocationMethod",
        "enumValues": [
          {
            "name": "ACROSS"
          },
          {
            "name": "EACH"
          },
          {
            "name": "ONE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DiscountApplicationConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DiscountApplicationEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "DiscountApplication",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DiscountApplicationEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INTERFACE",
                "name": "DiscountApplication",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DiscountApplicationTargetSelection",
        "enumValues": [
          {
            "name": "ALL"
          },
          {
            "name": "ENTITLED"
          },
          {
            "name": "EXPLICIT"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "DiscountApplicationTargetType",
        "enumValues": [
          {
            "name": "LINE_ITEM"
          },
          {
            "name": "SHIPPING_LINE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DiscountCodeApplication",
        "fields": [
          {
            "name": "allocationMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationAllocationMethod",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "applicable",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetSelection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationTargetSelection",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationTargetType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "PricingValue",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "DiscountApplication"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "DisplayableError",
        "fields": [
          {
            "name": "field",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CartUserError"
          },
          {
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          },
          {
            "kind": "OBJECT",
            "name": "CustomerUserError"
          },
          {
            "kind": "OBJECT",
            "name": "MetafieldDeleteUserError"
          },
          {
            "kind": "OBJECT",
            "name": "MetafieldsSetUserError"
          },
          {
            "kind": "OBJECT",
            "name": "UserError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Domain",
        "fields": [
          {
            "name": "host",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sslEnabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExternalVideo",
        "fields": [
          {
            "name": "alt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "embedUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "embeddedUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "host",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "MediaHost",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "mediaContentType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "MediaContentType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "originUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "presentation",
            "type": {
              "kind": "OBJECT",
              "name": "MediaPresentation",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "previewImage",
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Media"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Filter",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "label",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "FilterType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "values",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FilterValue",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "FilterType",
        "enumValues": [
          {
            "name": "LIST"
          },
          {
            "name": "PRICE_RANGE"
          },
          {
            "name": "BOOLEAN"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FilterValue",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "input",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "label",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Float"
      },
      {
        "kind": "OBJECT",
        "name": "Fulfillment",
        "fields": [
          {
            "name": "fulfillmentLineItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FulfillmentLineItemConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "trackingCompany",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "trackingInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FulfillmentTrackingInfo",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FulfillmentLineItem",
        "fields": [
          {
            "name": "lineItem",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderLineItem",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FulfillmentLineItemConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FulfillmentLineItemEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FulfillmentLineItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FulfillmentLineItemEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FulfillmentLineItem",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FulfillmentTrackingInfo",
        "fields": [
          {
            "name": "number",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GenericFile",
        "fields": [
          {
            "name": "alt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "mimeType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "originalFileSize",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "previewImage",
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "GeoCoordinateInput",
        "inputFields": [
          {
            "name": "latitude",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "longitude",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "HTML"
      },
      {
        "kind": "INTERFACE",
        "name": "HasMetafields",
        "fields": [
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Article"
          },
          {
            "kind": "OBJECT",
            "name": "Blog"
          },
          {
            "kind": "OBJECT",
            "name": "Cart"
          },
          {
            "kind": "OBJECT",
            "name": "Collection"
          },
          {
            "kind": "OBJECT",
            "name": "Customer"
          },
          {
            "kind": "OBJECT",
            "name": "Location"
          },
          {
            "kind": "OBJECT",
            "name": "Market"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "Page"
          },
          {
            "kind": "OBJECT",
            "name": "Product"
          },
          {
            "kind": "OBJECT",
            "name": "ProductVariant"
          },
          {
            "kind": "OBJECT",
            "name": "Shop"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HasMetafieldsIdentifier",
        "inputFields": [
          {
            "name": "namespace",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "key",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "OBJECT",
        "name": "Image",
        "fields": [
          {
            "name": "altText",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "height",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "originalSrc",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "src",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "transformedSrc",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "maxWidth",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "maxHeight",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "crop",
                "type": {
                  "kind": "ENUM",
                  "name": "CropRegion",
                  "ofType": null
                }
              },
              {
                "name": "scale",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preferredContentType",
                "type": {
                  "kind": "ENUM",
                  "name": "ImageContentType",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "transform",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ImageTransformInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "width",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ImageConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ImageEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Image",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ImageContentType",
        "enumValues": [
          {
            "name": "PNG"
          },
          {
            "name": "JPG"
          },
          {
            "name": "WEBP"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ImageEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Image",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ImageTransformInput",
        "inputFields": [
          {
            "name": "crop",
            "type": {
              "kind": "ENUM",
              "name": "CropRegion",
              "ofType": null
            }
          },
          {
            "name": "maxWidth",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "maxHeight",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "scale",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": "1"
          },
          {
            "name": "preferredContentType",
            "type": {
              "kind": "ENUM",
              "name": "ImageContentType",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "InContext",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "InContextType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "InContextType",
        "fields": [
          {
            "name": "kind",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "SCALAR",
        "name": "JSON"
      },
      {
        "kind": "OBJECT",
        "name": "Language",
        "fields": [
          {
            "name": "endonymName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "isoCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "LanguageCode",
        "enumValues": [
          {
            "name": "AF"
          },
          {
            "name": "AK"
          },
          {
            "name": "AM"
          },
          {
            "name": "AR"
          },
          {
            "name": "AS"
          },
          {
            "name": "AZ"
          },
          {
            "name": "BE"
          },
          {
            "name": "BG"
          },
          {
            "name": "BM"
          },
          {
            "name": "BN"
          },
          {
            "name": "BO"
          },
          {
            "name": "BR"
          },
          {
            "name": "BS"
          },
          {
            "name": "CA"
          },
          {
            "name": "CE"
          },
          {
            "name": "CKB"
          },
          {
            "name": "CS"
          },
          {
            "name": "CY"
          },
          {
            "name": "DA"
          },
          {
            "name": "DE"
          },
          {
            "name": "DZ"
          },
          {
            "name": "EE"
          },
          {
            "name": "EL"
          },
          {
            "name": "EN"
          },
          {
            "name": "EO"
          },
          {
            "name": "ES"
          },
          {
            "name": "ET"
          },
          {
            "name": "EU"
          },
          {
            "name": "FA"
          },
          {
            "name": "FF"
          },
          {
            "name": "FI"
          },
          {
            "name": "FIL"
          },
          {
            "name": "FO"
          },
          {
            "name": "FR"
          },
          {
            "name": "FY"
          },
          {
            "name": "GA"
          },
          {
            "name": "GD"
          },
          {
            "name": "GL"
          },
          {
            "name": "GU"
          },
          {
            "name": "GV"
          },
          {
            "name": "HA"
          },
          {
            "name": "HE"
          },
          {
            "name": "HI"
          },
          {
            "name": "HR"
          },
          {
            "name": "HU"
          },
          {
            "name": "HY"
          },
          {
            "name": "IA"
          },
          {
            "name": "ID"
          },
          {
            "name": "IG"
          },
          {
            "name": "II"
          },
          {
            "name": "IS"
          },
          {
            "name": "IT"
          },
          {
            "name": "JA"
          },
          {
            "name": "JV"
          },
          {
            "name": "KA"
          },
          {
            "name": "KI"
          },
          {
            "name": "KK"
          },
          {
            "name": "KL"
          },
          {
            "name": "KM"
          },
          {
            "name": "KN"
          },
          {
            "name": "KO"
          },
          {
            "name": "KS"
          },
          {
            "name": "KU"
          },
          {
            "name": "KW"
          },
          {
            "name": "KY"
          },
          {
            "name": "LB"
          },
          {
            "name": "LG"
          },
          {
            "name": "LN"
          },
          {
            "name": "LO"
          },
          {
            "name": "LT"
          },
          {
            "name": "LU"
          },
          {
            "name": "LV"
          },
          {
            "name": "MG"
          },
          {
            "name": "MI"
          },
          {
            "name": "MK"
          },
          {
            "name": "ML"
          },
          {
            "name": "MN"
          },
          {
            "name": "MR"
          },
          {
            "name": "MS"
          },
          {
            "name": "MT"
          },
          {
            "name": "MY"
          },
          {
            "name": "NB"
          },
          {
            "name": "ND"
          },
          {
            "name": "NE"
          },
          {
            "name": "NL"
          },
          {
            "name": "NN"
          },
          {
            "name": "NO"
          },
          {
            "name": "OM"
          },
          {
            "name": "OR"
          },
          {
            "name": "OS"
          },
          {
            "name": "PA"
          },
          {
            "name": "PL"
          },
          {
            "name": "PS"
          },
          {
            "name": "PT_BR"
          },
          {
            "name": "PT_PT"
          },
          {
            "name": "QU"
          },
          {
            "name": "RM"
          },
          {
            "name": "RN"
          },
          {
            "name": "RO"
          },
          {
            "name": "RU"
          },
          {
            "name": "RW"
          },
          {
            "name": "SA"
          },
          {
            "name": "SC"
          },
          {
            "name": "SD"
          },
          {
            "name": "SE"
          },
          {
            "name": "SG"
          },
          {
            "name": "SI"
          },
          {
            "name": "SK"
          },
          {
            "name": "SL"
          },
          {
            "name": "SN"
          },
          {
            "name": "SO"
          },
          {
            "name": "SQ"
          },
          {
            "name": "SR"
          },
          {
            "name": "SU"
          },
          {
            "name": "SV"
          },
          {
            "name": "SW"
          },
          {
            "name": "TA"
          },
          {
            "name": "TE"
          },
          {
            "name": "TG"
          },
          {
            "name": "TH"
          },
          {
            "name": "TI"
          },
          {
            "name": "TK"
          },
          {
            "name": "TO"
          },
          {
            "name": "TR"
          },
          {
            "name": "TT"
          },
          {
            "name": "UG"
          },
          {
            "name": "UK"
          },
          {
            "name": "UR"
          },
          {
            "name": "UZ"
          },
          {
            "name": "VI"
          },
          {
            "name": "WO"
          },
          {
            "name": "XH"
          },
          {
            "name": "YI"
          },
          {
            "name": "YO"
          },
          {
            "name": "ZH_CN"
          },
          {
            "name": "ZH_TW"
          },
          {
            "name": "ZU"
          },
          {
            "name": "ZH"
          },
          {
            "name": "PT"
          },
          {
            "name": "CU"
          },
          {
            "name": "VO"
          },
          {
            "name": "LA"
          },
          {
            "name": "SH"
          },
          {
            "name": "MO"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Localization",
        "fields": [
          {
            "name": "availableCountries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Country",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "availableLanguages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Language",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "country",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Country",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "language",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Language",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "market",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Market",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Location",
        "fields": [
          {
            "name": "address",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LocationAddress",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LocationAddress",
        "fields": [
          {
            "name": "address1",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "address2",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "city",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "country",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "countryCode",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "formatted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "latitude",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "longitude",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "phone",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "province",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "provinceCode",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "zip",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LocationConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "LocationEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Location",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LocationEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Location",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "LocationSortKeys",
        "enumValues": [
          {
            "name": "ID"
          },
          {
            "name": "NAME"
          },
          {
            "name": "CITY"
          },
          {
            "name": "DISTANCE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MailingAddress",
        "fields": [
          {
            "name": "address1",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "address2",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "city",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "company",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "country",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "countryCode",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "countryCodeV2",
            "type": {
              "kind": "ENUM",
              "name": "CountryCode",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "formatted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "withName",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "withCompany",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "formattedArea",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "latitude",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "longitude",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "phone",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "province",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "provinceCode",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "zip",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MailingAddressConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MailingAddressEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MailingAddress",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MailingAddressEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MailingAddress",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MailingAddressInput",
        "inputFields": [
          {
            "name": "address1",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "address2",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "city",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "company",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "country",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "phone",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "province",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "zip",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ManualDiscountApplication",
        "fields": [
          {
            "name": "allocationMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationAllocationMethod",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "targetSelection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationTargetSelection",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationTargetType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "PricingValue",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "DiscountApplication"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Market",
        "fields": [
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Media",
        "fields": [
          {
            "name": "alt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "mediaContentType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "MediaContentType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "presentation",
            "type": {
              "kind": "OBJECT",
              "name": "MediaPresentation",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "previewImage",
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ExternalVideo"
          },
          {
            "kind": "OBJECT",
            "name": "MediaImage"
          },
          {
            "kind": "OBJECT",
            "name": "Model3d"
          },
          {
            "kind": "OBJECT",
            "name": "Video"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MediaConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MediaEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "Media",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "MediaContentType",
        "enumValues": [
          {
            "name": "EXTERNAL_VIDEO"
          },
          {
            "name": "IMAGE"
          },
          {
            "name": "MODEL_3D"
          },
          {
            "name": "VIDEO"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MediaEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INTERFACE",
                "name": "Media",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "MediaHost",
        "enumValues": [
          {
            "name": "YOUTUBE"
          },
          {
            "name": "VIMEO"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MediaImage",
        "fields": [
          {
            "name": "alt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "mediaContentType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "MediaContentType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "presentation",
            "type": {
              "kind": "OBJECT",
              "name": "MediaPresentation",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "previewImage",
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Media"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MediaPresentation",
        "fields": [
          {
            "name": "asJson",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "args": [
              {
                "name": "format",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MediaPresentationFormat",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "MediaPresentationFormat",
        "enumValues": [
          {
            "name": "MODEL_VIEWER"
          },
          {
            "name": "IMAGE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Menu",
        "fields": [
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MenuItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "itemsCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MenuItem",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MenuItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "resourceId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "MenuItemType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "MenuItemType",
        "enumValues": [
          {
            "name": "FRONTPAGE"
          },
          {
            "name": "COLLECTION"
          },
          {
            "name": "COLLECTIONS"
          },
          {
            "name": "PRODUCT"
          },
          {
            "name": "CATALOG"
          },
          {
            "name": "PAGE"
          },
          {
            "name": "BLOG"
          },
          {
            "name": "ARTICLE"
          },
          {
            "name": "SEARCH"
          },
          {
            "name": "SHOP_POLICY"
          },
          {
            "name": "HTTP"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Merchandise",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ProductVariant"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Metafield",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "key",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "namespace",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "parentResource",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MetafieldParentResource",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "reference",
            "type": {
              "kind": "UNION",
              "name": "MetafieldReference",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "references",
            "type": {
              "kind": "OBJECT",
              "name": "MetafieldReferenceConnection",
              "ofType": null
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "MetafieldDeleteErrorCode",
        "enumValues": [
          {
            "name": "INVALID_OWNER"
          },
          {
            "name": "METAFIELD_DOES_NOT_EXIST"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MetafieldDeleteUserError",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "ENUM",
              "name": "MetafieldDeleteErrorCode",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "field",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "DisplayableError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MetafieldFilter",
        "inputFields": [
          {
            "name": "namespace",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "key",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "MetafieldParentResource",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Article"
          },
          {
            "kind": "OBJECT",
            "name": "Blog"
          },
          {
            "kind": "OBJECT",
            "name": "Cart"
          },
          {
            "kind": "OBJECT",
            "name": "Collection"
          },
          {
            "kind": "OBJECT",
            "name": "Customer"
          },
          {
            "kind": "OBJECT",
            "name": "Location"
          },
          {
            "kind": "OBJECT",
            "name": "Market"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "Page"
          },
          {
            "kind": "OBJECT",
            "name": "Product"
          },
          {
            "kind": "OBJECT",
            "name": "ProductVariant"
          },
          {
            "kind": "OBJECT",
            "name": "Shop"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "MetafieldReference",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Collection"
          },
          {
            "kind": "OBJECT",
            "name": "GenericFile"
          },
          {
            "kind": "OBJECT",
            "name": "MediaImage"
          },
          {
            "kind": "OBJECT",
            "name": "Metaobject"
          },
          {
            "kind": "OBJECT",
            "name": "Page"
          },
          {
            "kind": "OBJECT",
            "name": "Product"
          },
          {
            "kind": "OBJECT",
            "name": "ProductVariant"
          },
          {
            "kind": "OBJECT",
            "name": "Video"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MetafieldReferenceConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MetafieldReferenceEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "MetafieldReference",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MetafieldReferenceEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MetafieldReference",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MetafieldsSetUserError",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "ENUM",
              "name": "MetafieldsSetUserErrorCode",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "elementIndex",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "field",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "DisplayableError"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "MetafieldsSetUserErrorCode",
        "enumValues": [
          {
            "name": "BLANK"
          },
          {
            "name": "INCLUSION"
          },
          {
            "name": "LESS_THAN_OR_EQUAL_TO"
          },
          {
            "name": "PRESENT"
          },
          {
            "name": "TOO_SHORT"
          },
          {
            "name": "TOO_LONG"
          },
          {
            "name": "INVALID_OWNER"
          },
          {
            "name": "INVALID_VALUE"
          },
          {
            "name": "INVALID_TYPE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Metaobject",
        "fields": [
          {
            "name": "field",
            "type": {
              "kind": "OBJECT",
              "name": "MetaobjectField",
              "ofType": null
            },
            "args": [
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "fields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MetaobjectField",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MetaobjectConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MetaobjectEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Metaobject",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MetaobjectEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Metaobject",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MetaobjectField",
        "fields": [
          {
            "name": "key",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "reference",
            "type": {
              "kind": "UNION",
              "name": "MetafieldReference",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "references",
            "type": {
              "kind": "OBJECT",
              "name": "MetafieldReferenceConnection",
              "ofType": null
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MetaobjectHandleInput",
        "inputFields": [
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Model3d",
        "fields": [
          {
            "name": "alt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "mediaContentType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "MediaContentType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "presentation",
            "type": {
              "kind": "OBJECT",
              "name": "MediaPresentation",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "previewImage",
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Model3dSource",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Media"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Model3dSource",
        "fields": [
          {
            "name": "filesize",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "format",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "mimeType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MoneyInput",
        "inputFields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Decimal",
                "ofType": null
              }
            }
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MoneyV2",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Decimal",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "cartAttributesUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CartAttributesUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "attributes",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "AttributeInput",
                        "ofType": null
                      }
                    }
                  }
                }
              },
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "cartBuyerIdentityUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CartBuyerIdentityUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "buyerIdentity",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CartBuyerIdentityInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "cartCreate",
            "type": {
              "kind": "OBJECT",
              "name": "CartCreatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CartInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "cartDiscountCodesUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CartDiscountCodesUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "discountCodes",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "cartLinesAdd",
            "type": {
              "kind": "OBJECT",
              "name": "CartLinesAddPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "lines",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CartLineInput",
                        "ofType": null
                      }
                    }
                  }
                }
              },
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "cartLinesRemove",
            "type": {
              "kind": "OBJECT",
              "name": "CartLinesRemovePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "lineIds",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "cartLinesUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CartLinesUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "lines",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CartLineUpdateInput",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "cartMetafieldDelete",
            "type": {
              "kind": "OBJECT",
              "name": "CartMetafieldDeletePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CartMetafieldDeleteInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "cartMetafieldsSet",
            "type": {
              "kind": "OBJECT",
              "name": "CartMetafieldsSetPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "metafields",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CartMetafieldsSetInput",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "cartNoteUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CartNoteUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "note",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "cartPaymentUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CartPaymentUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "payment",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CartPaymentInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "cartSelectedDeliveryOptionsUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CartSelectedDeliveryOptionsUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "selectedDeliveryOptions",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CartSelectedDeliveryOptionInput",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "cartSubmitForCompletion",
            "type": {
              "kind": "OBJECT",
              "name": "CartSubmitForCompletionPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "attemptToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutAttributesUpdateV2",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutAttributesUpdateV2Payload",
              "ofType": null
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CheckoutAttributesUpdateV2Input",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutCompleteFree",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutCompleteFreePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutCompleteWithCreditCardV2",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutCompleteWithCreditCardV2Payload",
              "ofType": null
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "payment",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreditCardPaymentInputV2",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutCompleteWithTokenizedPaymentV3",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutCompleteWithTokenizedPaymentV3Payload",
              "ofType": null
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "payment",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "TokenizedPaymentInputV3",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutCreate",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutCreatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CheckoutCreateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "queueToken",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "checkoutCustomerAssociateV2",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutCustomerAssociateV2Payload",
              "ofType": null
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "customerAccessToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutCustomerDisassociateV2",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutCustomerDisassociateV2Payload",
              "ofType": null
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutDiscountCodeApplyV2",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutDiscountCodeApplyV2Payload",
              "ofType": null
            },
            "args": [
              {
                "name": "discountCode",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutDiscountCodeRemove",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutDiscountCodeRemovePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutEmailUpdateV2",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutEmailUpdateV2Payload",
              "ofType": null
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutGiftCardRemoveV2",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutGiftCardRemoveV2Payload",
              "ofType": null
            },
            "args": [
              {
                "name": "appliedGiftCardId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutGiftCardsAppend",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutGiftCardsAppendPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "giftCardCodes",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "String",
                        "ofType": null
                      }
                    }
                  }
                }
              },
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutLineItemsAdd",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutLineItemsAddPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "lineItems",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CheckoutLineItemInput",
                        "ofType": null
                      }
                    }
                  }
                }
              },
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutLineItemsRemove",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutLineItemsRemovePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "lineItemIds",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutLineItemsReplace",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutLineItemsReplacePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "lineItems",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CheckoutLineItemInput",
                        "ofType": null
                      }
                    }
                  }
                }
              },
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutLineItemsUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutLineItemsUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "lineItems",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CheckoutLineItemUpdateInput",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutShippingAddressUpdateV2",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutShippingAddressUpdateV2Payload",
              "ofType": null
            },
            "args": [
              {
                "name": "shippingAddress",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "MailingAddressInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutShippingLineUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CheckoutShippingLineUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "shippingRateHandle",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerAccessTokenCreate",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessTokenCreatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CustomerAccessTokenCreateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerAccessTokenCreateWithMultipass",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessTokenCreateWithMultipassPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "multipassToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerAccessTokenDelete",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessTokenDeletePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "customerAccessToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerAccessTokenRenew",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAccessTokenRenewPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "customerAccessToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerActivate",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerActivatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CustomerActivateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerActivateByUrl",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerActivateByUrlPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "activationUrl",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "URL",
                    "ofType": null
                  }
                }
              },
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerAddressCreate",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAddressCreatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "customerAccessToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "address",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "MailingAddressInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerAddressDelete",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAddressDeletePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "customerAccessToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerAddressUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerAddressUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "customerAccessToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "address",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "MailingAddressInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerCreate",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerCreatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CustomerCreateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerDefaultAddressUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerDefaultAddressUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "customerAccessToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "addressId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerRecover",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerRecoverPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerReset",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerResetPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CustomerResetInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerResetByUrl",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerResetByUrlPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "resetUrl",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "URL",
                    "ofType": null
                  }
                }
              },
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "customerUpdate",
            "type": {
              "kind": "OBJECT",
              "name": "CustomerUpdatePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "customerAccessToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "customer",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CustomerUpdateInput",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INTERFACE",
        "name": "Node",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AppliedGiftCard"
          },
          {
            "kind": "OBJECT",
            "name": "Article"
          },
          {
            "kind": "OBJECT",
            "name": "Blog"
          },
          {
            "kind": "OBJECT",
            "name": "Cart"
          },
          {
            "kind": "OBJECT",
            "name": "CartLine"
          },
          {
            "kind": "OBJECT",
            "name": "Checkout"
          },
          {
            "kind": "OBJECT",
            "name": "CheckoutLineItem"
          },
          {
            "kind": "OBJECT",
            "name": "Collection"
          },
          {
            "kind": "OBJECT",
            "name": "Comment"
          },
          {
            "kind": "OBJECT",
            "name": "ExternalVideo"
          },
          {
            "kind": "OBJECT",
            "name": "GenericFile"
          },
          {
            "kind": "OBJECT",
            "name": "Location"
          },
          {
            "kind": "OBJECT",
            "name": "MailingAddress"
          },
          {
            "kind": "OBJECT",
            "name": "Market"
          },
          {
            "kind": "OBJECT",
            "name": "MediaImage"
          },
          {
            "kind": "OBJECT",
            "name": "MediaPresentation"
          },
          {
            "kind": "OBJECT",
            "name": "Menu"
          },
          {
            "kind": "OBJECT",
            "name": "MenuItem"
          },
          {
            "kind": "OBJECT",
            "name": "Metafield"
          },
          {
            "kind": "OBJECT",
            "name": "Metaobject"
          },
          {
            "kind": "OBJECT",
            "name": "Model3d"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "Page"
          },
          {
            "kind": "OBJECT",
            "name": "Payment"
          },
          {
            "kind": "OBJECT",
            "name": "Product"
          },
          {
            "kind": "OBJECT",
            "name": "ProductOption"
          },
          {
            "kind": "OBJECT",
            "name": "ProductVariant"
          },
          {
            "kind": "OBJECT",
            "name": "Shop"
          },
          {
            "kind": "OBJECT",
            "name": "ShopPolicy"
          },
          {
            "kind": "OBJECT",
            "name": "UrlRedirect"
          },
          {
            "kind": "OBJECT",
            "name": "Video"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "OnlineStorePublishable",
        "fields": [
          {
            "name": "onlineStoreUrl",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Article"
          },
          {
            "kind": "OBJECT",
            "name": "Blog"
          },
          {
            "kind": "OBJECT",
            "name": "Collection"
          },
          {
            "kind": "OBJECT",
            "name": "Page"
          },
          {
            "kind": "OBJECT",
            "name": "Product"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Order",
        "fields": [
          {
            "name": "billingAddress",
            "type": {
              "kind": "OBJECT",
              "name": "MailingAddress",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "cancelReason",
            "type": {
              "kind": "ENUM",
              "name": "OrderCancelReason",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "canceledAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currentSubtotalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currentTotalDuties",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "currentTotalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currentTotalTax",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "customAttributes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Attribute",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "customerLocale",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "customerUrl",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "discountApplications",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DiscountApplicationConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "edited",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "financialStatus",
            "type": {
              "kind": "ENUM",
              "name": "OrderFinancialStatus",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "fulfillmentStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "OrderFulfillmentStatus",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "lineItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderLineItemConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "orderNumber",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "originalTotalDuties",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "originalTotalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "phone",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "processedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "shippingAddress",
            "type": {
              "kind": "OBJECT",
              "name": "MailingAddress",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "shippingDiscountAllocations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DiscountAllocation",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "statusUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "subtotalPrice",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "subtotalPriceV2",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "successfulFulfillments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Fulfillment",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "totalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalPriceV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalRefunded",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalRefundedV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalShippingPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalShippingPriceV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalTax",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "totalTaxV2",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "OrderCancelReason",
        "enumValues": [
          {
            "name": "CUSTOMER"
          },
          {
            "name": "DECLINED"
          },
          {
            "name": "FRAUD"
          },
          {
            "name": "INVENTORY"
          },
          {
            "name": "OTHER"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "OrderConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Order",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UnsignedInt64",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "OrderEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "OrderFinancialStatus",
        "enumValues": [
          {
            "name": "PENDING"
          },
          {
            "name": "AUTHORIZED"
          },
          {
            "name": "PARTIALLY_PAID"
          },
          {
            "name": "PARTIALLY_REFUNDED"
          },
          {
            "name": "VOIDED"
          },
          {
            "name": "PAID"
          },
          {
            "name": "REFUNDED"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "OrderFulfillmentStatus",
        "enumValues": [
          {
            "name": "UNFULFILLED"
          },
          {
            "name": "PARTIALLY_FULFILLED"
          },
          {
            "name": "FULFILLED"
          },
          {
            "name": "RESTOCKED"
          },
          {
            "name": "PENDING_FULFILLMENT"
          },
          {
            "name": "OPEN"
          },
          {
            "name": "IN_PROGRESS"
          },
          {
            "name": "ON_HOLD"
          },
          {
            "name": "SCHEDULED"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "OrderLineItem",
        "fields": [
          {
            "name": "currentQuantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "customAttributes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Attribute",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "discountAllocations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DiscountAllocation",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "discountedTotalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "originalTotalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "variant",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariant",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "OrderLineItemConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderLineItemEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderLineItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "OrderLineItemEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderLineItem",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "OrderSortKeys",
        "enumValues": [
          {
            "name": "PROCESSED_AT"
          },
          {
            "name": "TOTAL_PRICE"
          },
          {
            "name": "ID"
          },
          {
            "name": "RELEVANCE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Page",
        "fields": [
          {
            "name": "body",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "HTML",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "bodySummary",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "onlineStoreUrl",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "seo",
            "type": {
              "kind": "OBJECT",
              "name": "SEO",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          },
          {
            "kind": "INTERFACE",
            "name": "OnlineStorePublishable"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PageConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Page",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Page",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "fields": [
          {
            "name": "endCursor",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "hasNextPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "hasPreviousPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "startCursor",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "PageSortKeys",
        "enumValues": [
          {
            "name": "TITLE"
          },
          {
            "name": "UPDATED_AT"
          },
          {
            "name": "ID"
          },
          {
            "name": "RELEVANCE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Payment",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "amountV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "billingAddress",
            "type": {
              "kind": "OBJECT",
              "name": "MailingAddress",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "checkout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Checkout",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "creditCard",
            "type": {
              "kind": "OBJECT",
              "name": "CreditCard",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "errorMessage",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "idempotencyKey",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nextActionUrl",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "ready",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "test",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "transaction",
            "type": {
              "kind": "OBJECT",
              "name": "Transaction",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PaymentSettings",
        "fields": [
          {
            "name": "acceptedCardBrands",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CardBrand",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "cardVaultUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "countryCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CountryCode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "enabledPresentmentCurrencies",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CurrencyCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "shopifyPaymentsAccountId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "supportedDigitalWallets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DigitalWallet",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "PaymentTokenType",
        "enumValues": [
          {
            "name": "APPLE_PAY"
          },
          {
            "name": "VAULT"
          },
          {
            "name": "SHOPIFY_PAY"
          },
          {
            "name": "GOOGLE_PAY"
          },
          {
            "name": "STRIPE_VAULT_TOKEN"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PriceRangeFilter",
        "inputFields": [
          {
            "name": "min",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": "0.0"
          },
          {
            "name": "max",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PricingPercentageValue",
        "fields": [
          {
            "name": "percentage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "PricingValue",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MoneyV2"
          },
          {
            "kind": "OBJECT",
            "name": "PricingPercentageValue"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Product",
        "fields": [
          {
            "name": "availableForSale",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "collections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CollectionConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "compareAtPriceRange",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductPriceRange",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "truncateAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "descriptionHtml",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "HTML",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "featuredImage",
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "images",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ImageConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "ProductImageSortKeys",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "isGiftCard",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "media",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MediaConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "ProductMediaSortKeys",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "onlineStoreUrl",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "options",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductOption",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "priceRange",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductPriceRange",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "productType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "requiresSellingPlan",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sellingPlanGroups",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SellingPlanGroupConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "seo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SEO",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalInventory",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "variantBySelectedOptions",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariant",
              "ofType": null
            },
            "args": [
              {
                "name": "selectedOptions",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "SelectedOptionInput",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "variants",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "ProductVariantSortKeys",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "vendor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          },
          {
            "kind": "INTERFACE",
            "name": "OnlineStorePublishable"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ProductCollectionSortKeys",
        "enumValues": [
          {
            "name": "TITLE"
          },
          {
            "name": "PRICE"
          },
          {
            "name": "BEST_SELLING"
          },
          {
            "name": "CREATED"
          },
          {
            "name": "ID"
          },
          {
            "name": "MANUAL"
          },
          {
            "name": "COLLECTION_DEFAULT"
          },
          {
            "name": "RELEVANCE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProductConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "filters",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Filter",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductFilter",
        "inputFields": [
          {
            "name": "available",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "variantOption",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "VariantOptionFilter",
              "ofType": null
            }
          },
          {
            "name": "productType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "productVendor",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PriceRangeFilter",
              "ofType": null
            }
          },
          {
            "name": "productMetafield",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "MetafieldFilter",
              "ofType": null
            }
          },
          {
            "name": "variantMetafield",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "MetafieldFilter",
              "ofType": null
            }
          },
          {
            "name": "tag",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ProductImageSortKeys",
        "enumValues": [
          {
            "name": "CREATED_AT"
          },
          {
            "name": "POSITION"
          },
          {
            "name": "ID"
          },
          {
            "name": "RELEVANCE"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ProductMediaSortKeys",
        "enumValues": [
          {
            "name": "POSITION"
          },
          {
            "name": "ID"
          },
          {
            "name": "RELEVANCE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProductOption",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "values",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProductPriceRange",
        "fields": [
          {
            "name": "maxVariantPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "minVariantPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ProductRecommendationIntent",
        "enumValues": [
          {
            "name": "RELATED"
          },
          {
            "name": "COMPLEMENTARY"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ProductSortKeys",
        "enumValues": [
          {
            "name": "TITLE"
          },
          {
            "name": "PRODUCT_TYPE"
          },
          {
            "name": "VENDOR"
          },
          {
            "name": "UPDATED_AT"
          },
          {
            "name": "CREATED_AT"
          },
          {
            "name": "BEST_SELLING"
          },
          {
            "name": "PRICE"
          },
          {
            "name": "ID"
          },
          {
            "name": "RELEVANCE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariant",
        "fields": [
          {
            "name": "availableForSale",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "barcode",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "compareAtPrice",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "compareAtPriceV2",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "currentlyNotInStock",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "priceV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "product",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "quantityAvailable",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "requiresShipping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "selectedOptions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SelectedOption",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "sellingPlanAllocations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SellingPlanAllocationConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sku",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "storeAvailability",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StoreAvailabilityConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "near",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "GeoCoordinateInput",
                  "ofType": null
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "unitPrice",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "unitPriceMeasurement",
            "type": {
              "kind": "OBJECT",
              "name": "UnitPriceMeasurement",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "weight",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "weightUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "WeightUnit",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariantConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariantEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariant",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariantEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariant",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ProductVariantSortKeys",
        "enumValues": [
          {
            "name": "TITLE"
          },
          {
            "name": "SKU"
          },
          {
            "name": "POSITION"
          },
          {
            "name": "ID"
          },
          {
            "name": "RELEVANCE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "QueryRoot",
        "fields": [
          {
            "name": "article",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "articles",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ArticleConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "ArticleSortKeys",
                  "ofType": null
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "blog",
            "type": {
              "kind": "OBJECT",
              "name": "Blog",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              {
                "name": "handle",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "blogByHandle",
            "type": {
              "kind": "OBJECT",
              "name": "Blog",
              "ofType": null
            },
            "args": [
              {
                "name": "handle",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "blogs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BlogConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "BlogSortKeys",
                  "ofType": null
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "cart",
            "type": {
              "kind": "OBJECT",
              "name": "Cart",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "cartCompletionAttempt",
            "type": {
              "kind": "UNION",
              "name": "CartCompletionAttemptResult",
              "ofType": null
            },
            "args": [
              {
                "name": "attemptId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "collection",
            "type": {
              "kind": "OBJECT",
              "name": "Collection",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              {
                "name": "handle",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "collectionByHandle",
            "type": {
              "kind": "OBJECT",
              "name": "Collection",
              "ofType": null
            },
            "args": [
              {
                "name": "handle",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "collections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CollectionConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "CollectionSortKeys",
                  "ofType": null
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "customerAccessToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "localization",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Localization",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "locations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LocationConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "LocationSortKeys",
                  "ofType": null
                }
              },
              {
                "name": "near",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "GeoCoordinateInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "menu",
            "type": {
              "kind": "OBJECT",
              "name": "Menu",
              "ofType": null
            },
            "args": [
              {
                "name": "handle",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metaobject",
            "type": {
              "kind": "OBJECT",
              "name": "Metaobject",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              {
                "name": "handle",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "MetaobjectHandleInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "metaobjects",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MetaobjectConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "type",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "node",
            "type": {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Node",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "ids",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "page",
            "type": {
              "kind": "OBJECT",
              "name": "Page",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              {
                "name": "handle",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageByHandle",
            "type": {
              "kind": "OBJECT",
              "name": "Page",
              "ofType": null
            },
            "args": [
              {
                "name": "handle",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "pages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "PageSortKeys",
                  "ofType": null
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "product",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              {
                "name": "handle",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "productByHandle",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "handle",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "productRecommendations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Product",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "productId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "intent",
                "type": {
                  "kind": "ENUM",
                  "name": "ProductRecommendationIntent",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "productTags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StringConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "productTypes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StringConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "products",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "sortKey",
                "type": {
                  "kind": "ENUM",
                  "name": "ProductSortKeys",
                  "ofType": null
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "publicApiVersions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ApiVersion",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "shop",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Shop",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "urlRedirects",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UrlRedirectConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SEO",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ScriptDiscountApplication",
        "fields": [
          {
            "name": "allocationMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationAllocationMethod",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetSelection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationTargetSelection",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "DiscountApplicationTargetType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "PricingValue",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "DiscountApplication"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SelectedOption",
        "fields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SelectedOptionInput",
        "inputFields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlan",
        "fields": [
          {
            "name": "checkoutCharge",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SellingPlanCheckoutCharge",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "options",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SellingPlanOption",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "priceAdjustments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SellingPlanPriceAdjustment",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "recurringDeliveries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanAllocation",
        "fields": [
          {
            "name": "checkoutChargeAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "priceAdjustments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SellingPlanAllocationPriceAdjustment",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "remainingBalanceChargeAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sellingPlan",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SellingPlan",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanAllocationConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SellingPlanAllocationEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SellingPlanAllocation",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanAllocationEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SellingPlanAllocation",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanAllocationPriceAdjustment",
        "fields": [
          {
            "name": "compareAtPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "perDeliveryPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "unitPrice",
            "type": {
              "kind": "OBJECT",
              "name": "MoneyV2",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanCheckoutCharge",
        "fields": [
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "SellingPlanCheckoutChargeType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SellingPlanCheckoutChargeValue",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanCheckoutChargePercentageValue",
        "fields": [
          {
            "name": "percentage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SellingPlanCheckoutChargeType",
        "enumValues": [
          {
            "name": "PERCENTAGE"
          },
          {
            "name": "PRICE"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SellingPlanCheckoutChargeValue",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MoneyV2"
          },
          {
            "kind": "OBJECT",
            "name": "SellingPlanCheckoutChargePercentageValue"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SellingPlanEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SellingPlan",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SellingPlan",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanFixedAmountPriceAdjustment",
        "fields": [
          {
            "name": "adjustmentAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanFixedPriceAdjustment",
        "fields": [
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanGroup",
        "fields": [
          {
            "name": "appName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "options",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SellingPlanGroupOption",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "sellingPlans",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SellingPlanConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "reverse",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanGroupConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SellingPlanGroupEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SellingPlanGroup",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanGroupEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SellingPlanGroup",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanGroupOption",
        "fields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "values",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanOption",
        "fields": [
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanPercentagePriceAdjustment",
        "fields": [
          {
            "name": "adjustmentPercentage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SellingPlanPriceAdjustment",
        "fields": [
          {
            "name": "adjustmentValue",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SellingPlanPriceAdjustmentValue",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "orderCount",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "SellingPlanPriceAdjustmentValue",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SellingPlanFixedAmountPriceAdjustment"
          },
          {
            "kind": "OBJECT",
            "name": "SellingPlanFixedPriceAdjustment"
          },
          {
            "kind": "OBJECT",
            "name": "SellingPlanPercentagePriceAdjustment"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ShippingRate",
        "fields": [
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "priceV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Shop",
        "fields": [
          {
            "name": "brand",
            "type": {
              "kind": "OBJECT",
              "name": "Brand",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "metafield",
            "type": {
              "kind": "OBJECT",
              "name": "Metafield",
              "ofType": null
            },
            "args": [
              {
                "name": "namespace",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "key",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "metafields",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metafield",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "identifiers",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "HasMetafieldsIdentifier",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "moneyFormat",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "paymentSettings",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaymentSettings",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "primaryDomain",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Domain",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "privacyPolicy",
            "type": {
              "kind": "OBJECT",
              "name": "ShopPolicy",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "refundPolicy",
            "type": {
              "kind": "OBJECT",
              "name": "ShopPolicy",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "shippingPolicy",
            "type": {
              "kind": "OBJECT",
              "name": "ShopPolicy",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "shipsToCountries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CountryCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "subscriptionPolicy",
            "type": {
              "kind": "OBJECT",
              "name": "ShopPolicyWithDefault",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "termsOfService",
            "type": {
              "kind": "OBJECT",
              "name": "ShopPolicy",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "HasMetafields"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ShopPayWalletContentInput",
        "inputFields": [
          {
            "name": "billingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MailingAddressInput",
                "ofType": null
              }
            }
          },
          {
            "name": "sessionToken",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ShopPolicy",
        "fields": [
          {
            "name": "body",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ShopPolicyWithDefault",
        "fields": [
          {
            "name": "body",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "URL",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StoreAvailability",
        "fields": [
          {
            "name": "available",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "location",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Location",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pickUpTime",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StoreAvailabilityConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StoreAvailabilityEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StoreAvailability",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StoreAvailabilityEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StoreAvailability",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "OBJECT",
        "name": "StringConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StringEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StringEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SubmissionError",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "SubmissionErrorCode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SubmissionErrorCode",
        "enumValues": [
          {
            "name": "ERROR"
          },
          {
            "name": "NO_DELIVERY_GROUP_SELECTED"
          },
          {
            "name": "BUYER_IDENTITY_EMAIL_IS_INVALID"
          },
          {
            "name": "BUYER_IDENTITY_EMAIL_REQUIRED"
          },
          {
            "name": "BUYER_IDENTITY_PHONE_IS_INVALID"
          },
          {
            "name": "DELIVERY_ADDRESS1_INVALID"
          },
          {
            "name": "DELIVERY_ADDRESS1_REQUIRED"
          },
          {
            "name": "DELIVERY_ADDRESS1_TOO_LONG"
          },
          {
            "name": "DELIVERY_ADDRESS2_INVALID"
          },
          {
            "name": "DELIVERY_ADDRESS2_REQUIRED"
          },
          {
            "name": "DELIVERY_ADDRESS2_TOO_LONG"
          },
          {
            "name": "DELIVERY_CITY_INVALID"
          },
          {
            "name": "DELIVERY_CITY_REQUIRED"
          },
          {
            "name": "DELIVERY_CITY_TOO_LONG"
          },
          {
            "name": "DELIVERY_COMPANY_INVALID"
          },
          {
            "name": "DELIVERY_COMPANY_REQUIRED"
          },
          {
            "name": "DELIVERY_COMPANY_TOO_LONG"
          },
          {
            "name": "DELIVERY_COUNTRY_REQUIRED"
          },
          {
            "name": "DELIVERY_FIRST_NAME_INVALID"
          },
          {
            "name": "DELIVERY_FIRST_NAME_REQUIRED"
          },
          {
            "name": "DELIVERY_FIRST_NAME_TOO_LONG"
          },
          {
            "name": "DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY"
          },
          {
            "name": "DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE"
          },
          {
            "name": "DELIVERY_LAST_NAME_INVALID"
          },
          {
            "name": "DELIVERY_LAST_NAME_REQUIRED"
          },
          {
            "name": "DELIVERY_LAST_NAME_TOO_LONG"
          },
          {
            "name": "DELIVERY_NO_DELIVERY_AVAILABLE"
          },
          {
            "name": "DELIVERY_NO_DELIVERY_AVAILABLE_FOR_MERCHANDISE_LINE"
          },
          {
            "name": "DELIVERY_OPTIONS_PHONE_NUMBER_INVALID"
          },
          {
            "name": "DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED"
          },
          {
            "name": "DELIVERY_PHONE_NUMBER_INVALID"
          },
          {
            "name": "DELIVERY_PHONE_NUMBER_REQUIRED"
          },
          {
            "name": "DELIVERY_POSTAL_CODE_INVALID"
          },
          {
            "name": "DELIVERY_POSTAL_CODE_REQUIRED"
          },
          {
            "name": "DELIVERY_ZONE_NOT_FOUND"
          },
          {
            "name": "DELIVERY_ZONE_REQUIRED_FOR_COUNTRY"
          },
          {
            "name": "DELIVERY_ADDRESS_REQUIRED"
          },
          {
            "name": "MERCHANDISE_NOT_APPLICABLE"
          },
          {
            "name": "MERCHANDISE_LINE_LIMIT_REACHED"
          },
          {
            "name": "MERCHANDISE_NOT_ENOUGH_STOCK_AVAILABLE"
          },
          {
            "name": "MERCHANDISE_OUT_OF_STOCK"
          },
          {
            "name": "MERCHANDISE_PRODUCT_NOT_PUBLISHED"
          },
          {
            "name": "PAYMENTS_ADDRESS1_INVALID"
          },
          {
            "name": "PAYMENTS_ADDRESS1_REQUIRED"
          },
          {
            "name": "PAYMENTS_ADDRESS1_TOO_LONG"
          },
          {
            "name": "PAYMENTS_ADDRESS2_INVALID"
          },
          {
            "name": "PAYMENTS_ADDRESS2_REQUIRED"
          },
          {
            "name": "PAYMENTS_ADDRESS2_TOO_LONG"
          },
          {
            "name": "PAYMENTS_CITY_INVALID"
          },
          {
            "name": "PAYMENTS_CITY_REQUIRED"
          },
          {
            "name": "PAYMENTS_CITY_TOO_LONG"
          },
          {
            "name": "PAYMENTS_COMPANY_INVALID"
          },
          {
            "name": "PAYMENTS_COMPANY_REQUIRED"
          },
          {
            "name": "PAYMENTS_COMPANY_TOO_LONG"
          },
          {
            "name": "PAYMENTS_COUNTRY_REQUIRED"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_BASE_EXPIRED"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_BASE_INVALID_START_DATE_OR_ISSUE_NUMBER_FOR_DEBIT"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_BRAND_NOT_SUPPORTED"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_FIRST_NAME_BLANK"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_GENERIC"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_LAST_NAME_BLANK"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_MONTH_INCLUSION"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_NAME_INVALID"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_NUMBER_INVALID"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_SESSION_ID"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_YEAR_EXPIRED"
          },
          {
            "name": "PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR"
          },
          {
            "name": "PAYMENTS_FIRST_NAME_INVALID"
          },
          {
            "name": "PAYMENTS_FIRST_NAME_REQUIRED"
          },
          {
            "name": "PAYMENTS_FIRST_NAME_TOO_LONG"
          },
          {
            "name": "PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY"
          },
          {
            "name": "PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE"
          },
          {
            "name": "PAYMENTS_LAST_NAME_INVALID"
          },
          {
            "name": "PAYMENTS_LAST_NAME_REQUIRED"
          },
          {
            "name": "PAYMENTS_LAST_NAME_TOO_LONG"
          },
          {
            "name": "PAYMENTS_METHOD_UNAVAILABLE"
          },
          {
            "name": "PAYMENTS_METHOD_REQUIRED"
          },
          {
            "name": "PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT"
          },
          {
            "name": "PAYMENTS_PHONE_NUMBER_INVALID"
          },
          {
            "name": "PAYMENTS_PHONE_NUMBER_REQUIRED"
          },
          {
            "name": "PAYMENTS_POSTAL_CODE_INVALID"
          },
          {
            "name": "PAYMENTS_POSTAL_CODE_REQUIRED"
          },
          {
            "name": "PAYMENTS_SHOPIFY_PAYMENTS_REQUIRED"
          },
          {
            "name": "PAYMENTS_WALLET_CONTENT_MISSING"
          },
          {
            "name": "PAYMENTS_BILLING_ADDRESS_ZONE_NOT_FOUND"
          },
          {
            "name": "PAYMENTS_BILLING_ADDRESS_ZONE_REQUIRED_FOR_COUNTRY"
          },
          {
            "name": "TAXES_MUST_BE_DEFINED"
          },
          {
            "name": "TAXES_LINE_ID_NOT_FOUND"
          },
          {
            "name": "TAXES_DELIVERY_GROUP_ID_NOT_FOUND"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SubmitAlreadyAccepted",
        "fields": [
          {
            "name": "attemptId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SubmitFailed",
        "fields": [
          {
            "name": "checkoutUrl",
            "type": {
              "kind": "SCALAR",
              "name": "URL",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "errors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SubmissionError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SubmitSuccess",
        "fields": [
          {
            "name": "attemptId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SubmitThrottled",
        "fields": [
          {
            "name": "pollAfter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TokenizedPaymentInputV3",
        "inputFields": [
          {
            "name": "paymentAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MoneyInput",
                "ofType": null
              }
            }
          },
          {
            "name": "idempotencyKey",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "billingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MailingAddressInput",
                "ofType": null
              }
            }
          },
          {
            "name": "paymentData",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "test",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": "false"
          },
          {
            "name": "identifier",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "PaymentTokenType",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Transaction",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "amountV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MoneyV2",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "kind",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "TransactionKind",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "TransactionStatus",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "statusV2",
            "type": {
              "kind": "ENUM",
              "name": "TransactionStatus",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "test",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "TransactionKind",
        "enumValues": [
          {
            "name": "SALE"
          },
          {
            "name": "CAPTURE"
          },
          {
            "name": "AUTHORIZATION"
          },
          {
            "name": "EMV_AUTHORIZATION"
          },
          {
            "name": "CHANGE"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "TransactionStatus",
        "enumValues": [
          {
            "name": "PENDING"
          },
          {
            "name": "SUCCESS"
          },
          {
            "name": "FAILURE"
          },
          {
            "name": "ERROR"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "URL"
      },
      {
        "kind": "OBJECT",
        "name": "UnitPriceMeasurement",
        "fields": [
          {
            "name": "measuredType",
            "type": {
              "kind": "ENUM",
              "name": "UnitPriceMeasurementMeasuredType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "quantityUnit",
            "type": {
              "kind": "ENUM",
              "name": "UnitPriceMeasurementMeasuredUnit",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "quantityValue",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "referenceUnit",
            "type": {
              "kind": "ENUM",
              "name": "UnitPriceMeasurementMeasuredUnit",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "referenceValue",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UnitPriceMeasurementMeasuredType",
        "enumValues": [
          {
            "name": "VOLUME"
          },
          {
            "name": "WEIGHT"
          },
          {
            "name": "LENGTH"
          },
          {
            "name": "AREA"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "UnitPriceMeasurementMeasuredUnit",
        "enumValues": [
          {
            "name": "ML"
          },
          {
            "name": "CL"
          },
          {
            "name": "L"
          },
          {
            "name": "M3"
          },
          {
            "name": "MG"
          },
          {
            "name": "G"
          },
          {
            "name": "KG"
          },
          {
            "name": "MM"
          },
          {
            "name": "CM"
          },
          {
            "name": "M"
          },
          {
            "name": "M2"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "UnitSystem",
        "enumValues": [
          {
            "name": "IMPERIAL_SYSTEM"
          },
          {
            "name": "METRIC_SYSTEM"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "UnsignedInt64"
      },
      {
        "kind": "OBJECT",
        "name": "UrlRedirect",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "path",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "target",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UrlRedirectConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UrlRedirectEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UrlRedirect",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UrlRedirectEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UrlRedirect",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserError",
        "fields": [
          {
            "name": "field",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "DisplayableError"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "VariantOptionFilter",
        "inputFields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Video",
        "fields": [
          {
            "name": "alt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "mediaContentType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "MediaContentType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "presentation",
            "type": {
              "kind": "OBJECT",
              "name": "MediaPresentation",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "previewImage",
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "VideoSource",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Media"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "VideoSource",
        "fields": [
          {
            "name": "format",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "height",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "mimeType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "width",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "WeightUnit",
        "enumValues": [
          {
            "name": "KILOGRAMS"
          },
          {
            "name": "GRAMS"
          },
          {
            "name": "POUNDS"
          },
          {
            "name": "OUNCES"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as const;

export { introspection };