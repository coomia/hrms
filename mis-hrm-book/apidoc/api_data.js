define({ "api": [
  {
    "type": "POST",
    "url": "bookLendInfo",
    "title": "插入借一本书的信息",
    "description": "<p>插入一本借书的信息</p>",
    "group": "BOOKLEND_ADD",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookName",
            "description": "<p>书名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendTime",
            "description": "<p>借书时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "returnTime",
            "description": "<p>归还时间（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "borrower",
            "description": "<p>借书者</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"success\"\n  \"object\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookLendController.java",
    "groupTitle": "BOOKLEND_ADD",
    "name": "PostBooklendinfo"
  },
  {
    "type": "DELETE",
    "url": "bookLendInfo",
    "title": "通过companyId & bookRecord 删除借书信息",
    "description": "<p>通过companyId &amp; bookRecord 删除借书信息</p>",
    "group": "BOOKLEND_DELETE",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>公司的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookRecord",
            "description": "<p>借书记录</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"success\"\n  \"object\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookLendController.java",
    "groupTitle": "BOOKLEND_DELETE",
    "name": "DeleteBooklendinfo"
  },
  {
    "type": "GET",
    "url": "booklend-list-５",
    "title": "得到所有借书信息",
    "description": "<p>得到所有的借书信息</p>",
    "group": "BOOKLEND_QUERY",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n      {\n        \"code\": \"1\",\n        \"msg\": \"success\"\n        \"object\":[{\n    \t   \"bookName\": \"暗时间\",\n\t       \"bookRecord\": \"不晓得是撒子啊\",\n\t       \"borrower\": \"优秀的人\",\n\t       \"companyId\": \"信管工作室\",\n\t       \"lendTime\": \"2018-08-08\",\n\t       \"returnTime\": \"2018-08-08\"\n         },{\n\t        \"bookName\": \"暗时间\",\n\t        \"bookRecord\": \"不晓得是撒子啊\",\n\t        \"borrower\": \"优秀的人\",\n\t        \"companyId\": \"信管工作室\",\n\t        \"lendTime\": \"2018-08-08\",\n\t        \"returnTime\": \"2018-08-08\"\n        }]\n\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookLendController.java",
    "groupTitle": "BOOKLEND_QUERY",
    "name": "GetBooklendList"
  },
  {
    "type": "GET",
    "url": "booklend-list-1",
    "title": "通过借书者",
    "description": "<p>通过借书者查询借书信息</p>",
    "group": "BOOKLEND_QUERY",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "borrower",
            "description": "<p>借书者</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n      {\n        \"code\": \"1\",\n        \"msg\": \"success\"\n        \"object\":[{\n    \t   \"bookName\": \"暗时间\",\n\t       \"bookRecord\": \"不晓得是撒子啊\",\n\t       \"borrower\": \"优秀的人\",\n\t       \"companyId\": \"信管工作室\",\n\t       \"lendTime\": \"2018-08-08\",\n\t       \"returnTime\": \"2018-08-08\"\n         },{\n\t        \"bookName\": \"暗时间\",\n\t        \"bookRecord\": \"不晓得是撒子啊\",\n\t        \"borrower\": \"优秀的人\",\n\t        \"companyId\": \"信管工作室\",\n\t        \"lendTime\": \"2018-08-08\",\n\t        \"returnTime\": \"2018-08-08\"\n        }]\n\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookLendController.java",
    "groupTitle": "BOOKLEND_QUERY",
    "name": "GetBooklendList1"
  },
  {
    "type": "GET",
    "url": "booklend-list-2",
    "title": "通过公司id查询借书的信息",
    "description": "<p>通过公司id查询借书信息</p>",
    "group": "BOOKLEND_QUERY",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>公司id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n      {\n        \"code\": \"1\",\n        \"msg\": \"success\"\n        \"object\":[{\n    \t   \"bookName\": \"暗时间\",\n\t       \"bookRecord\": \"不晓得是撒子啊\",\n\t       \"borrower\": \"优秀的人\",\n\t       \"companyId\": \"信管工作室\",\n\t       \"lendTime\": \"2018-08-08\",\n\t       \"returnTime\": \"2018-08-08\"\n         },{\n\t        \"bookName\": \"暗时间\",\n\t        \"bookRecord\": \"不晓得是撒子啊\",\n\t        \"borrower\": \"优秀的人\",\n\t        \"companyId\": \"信管工作室\",\n\t        \"lendTime\": \"2018-08-08\",\n\t        \"returnTime\": \"2018-08-08\"\n        }]\n\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookLendController.java",
    "groupTitle": "BOOKLEND_QUERY",
    "name": "GetBooklendList2"
  },
  {
    "type": "GET",
    "url": "booklend-list-3",
    "title": "通过公司和书名",
    "description": "<p>通过公司和书名查询借书信息</p>",
    "group": "BOOKLEND_QUERY",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "borrower",
            "description": "<p>借书者</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n      {\n        \"code\": \"1\",\n        \"msg\": \"success\"\n        \"object\":[{\n    \t   \"bookName\": \"暗时间\",\n\t       \"bookRecord\": \"不晓得是撒子啊\",\n\t       \"borrower\": \"优秀的人\",\n\t       \"companyId\": \"信管工作室\",\n\t       \"lendTime\": \"2018-08-08\",\n\t       \"returnTime\": \"2018-08-08\"\n         },{\n\t        \"bookName\": \"暗时间\",\n\t        \"bookRecord\": \"不晓得是撒子啊\",\n\t        \"borrower\": \"优秀的人\",\n\t        \"companyId\": \"信管工作室\",\n\t        \"lendTime\": \"2018-08-08\",\n\t        \"returnTime\": \"2018-08-08\"\n        }]\n\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookLendController.java",
    "groupTitle": "BOOKLEND_QUERY",
    "name": "GetBooklendList3"
  },
  {
    "type": "GET",
    "url": "booklend-list-4",
    "title": "通过公司名和借书的记录",
    "description": "<p>通过公司名和书的记录查询借书信息</p>",
    "group": "BOOKLEND_QUERY",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookRecord",
            "description": "<p>借书记录</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n      {\n        \"code\": \"1\",\n        \"msg\": \"success\"\n        \"object\":{\n    \t   \"bookName\": \"暗时间\",\n\t       \"bookRecord\": \"不晓得是撒子啊\",\n\t       \"borrower\": \"优秀的人\",\n\t       \"companyId\": \"信管工作室\",\n\t       \"lendTime\": \"2018-08-08\",\n\t       \"returnTime\": \"2018-08-08\"\n         }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookLendController.java",
    "groupTitle": "BOOKLEND_QUERY",
    "name": "GetBooklendList4"
  },
  {
    "type": "PUT",
    "url": "bookLendInfo",
    "title": "通过companyId & bookRecord 更改借书信息",
    "description": "<p>通过companyId &amp; bookRecord 更改借书信息，同时返回更新后的信息</p>",
    "group": "BOOKLEND_UPDATE",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookRecord",
            "description": "<p>借书记录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookName",
            "description": "<p>书名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendTime",
            "description": "<p>借书时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "returnTime",
            "description": "<p>归还时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "borrower",
            "description": "<p>借书者</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"success\"\n  \"object\":{\n   \t   \"bookName\": \"暗时间\",\n\t       \"bookRecord\": \"不晓得是撒子啊\",\n\t       \"borrower\": \"优秀的人\",\n\t       \"companyId\": \"信管工作室\",\n\t       \"lendTime\": \"2018-08-08\",\n\t       \"returnTime\": \"2018-08-08\"\n        }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookLendController.java",
    "groupTitle": "BOOKLEND_UPDATE",
    "name": "PutBooklendinfo"
  },
  {
    "type": "POST",
    "url": "book",
    "title": "插入一书本的信息",
    "description": "<p>插入一本书的信息</p>",
    "group": "BOOK_ADD",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookName",
            "description": "<p>书名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quantity",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"success\"\n  \"object\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookController.java",
    "groupTitle": "BOOK_ADD",
    "name": "PostBook"
  },
  {
    "type": "DELETE",
    "url": "book",
    "title": "通过bookId",
    "description": "<p>通过bookId删除一本书的信息</p>",
    "group": "BOOK_DELETE",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>书的id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"success\"\n  \"object\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookController.java",
    "groupTitle": "BOOK_DELETE",
    "name": "DeleteBook"
  },
  {
    "type": "GET",
    "url": "book-list-1",
    "title": "通过公司id",
    "description": "<p>通过公司id得到书录</p>",
    "group": "BOOK_QUERY",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>公司id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n      {\n        \"code\": \"1\",\n        \"msg\": \"success\"\n        \"object\":[{\n\t            \"bookId\": \"dddddfffffsssss\",\n\t            \"bookName\": \"你的灯亮着吗？\",\n\t            \"category\": \"思维\",\n\t            \"companyId\": \"信管工作室\",\n\t            \"quantity\": 2,\n\t            \"version\": \"2.0\"\n             }, {\n\t            \"bookId\": \"reerrrrrrr\",\n\t            \"bookName\": \"你的灯亮着吗？\",\n         \t\"category\": \"思维\",\n         \t\"companyId\": \"信管工作室\",\n          \t\"quantity\": 2,\n          \t\"version\": \"2.0\"\n             }]\n             }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookController.java",
    "groupTitle": "BOOK_QUERY",
    "name": "GetBookList1"
  },
  {
    "type": "GET",
    "url": "book-list-2",
    "title": "通过公司id和类别",
    "description": "<p>通过公司id和分类得到书录</p>",
    "group": "BOOK_QUERY",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>分类</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n      {\n        \"code\": \"1\",\n        \"msg\": \"success\"\n        \"object\":[{\n\t            \"bookId\": \"dddddfffffsssss\",\n\t            \"bookName\": \"你的灯亮着吗？\",\n\t            \"category\": \"思维\",\n\t            \"companyId\": \"信管工作室\",\n\t            \"quantity\": 2,\n\t            \"version\": \"2.0\"\n             }, {\n\t            \"bookId\": \"reerrrrrrr\",\n\t            \"bookName\": \"你的灯亮着吗？\",\n         \t\"category\": \"思维\",\n         \t\"companyId\": \"信管工作室\",\n          \t\"quantity\": 2,\n          \t\"version\": \"2.0\"\n             }]\n             }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookController.java",
    "groupTitle": "BOOK_QUERY",
    "name": "GetBookList2"
  },
  {
    "type": "GET",
    "url": "book-list-3",
    "title": "通过公司id和书名",
    "description": "<p>通过公司id和书名得到书录</p>",
    "group": "BOOK_QUERY",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookName",
            "description": "<p>书的名称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n      {\n        \"code\": \"1\",\n        \"msg\": \"success\"\n        \"object\":[{\n\t            \"bookId\": \"dddddfffffsssss\",\n\t            \"bookName\": \"你的灯亮着吗？\",\n\t            \"category\": \"思维\",\n\t            \"companyId\": \"信管工作室\",\n\t            \"quantity\": 2,\n\t            \"version\": \"2.0\"\n             }, {\n\t            \"bookId\": \"reerrrrrrr\",\n\t            \"bookName\": \"你的灯亮着吗？\",\n         \t\"category\": \"思维\",\n         \t\"companyId\": \"信管工作室\",\n          \t\"quantity\": 2,\n          \t\"version\": \"2.0\"\n             }]\n             }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookController.java",
    "groupTitle": "BOOK_QUERY",
    "name": "GetBookList3"
  },
  {
    "type": "GET",
    "url": "book-list-4",
    "title": "通过书的id",
    "description": "<p>通过书的id得到书的信息</p>",
    "group": "BOOK_QUERY",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>书的id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n      {\n        \"code\": \"1\",\n        \"msg\": \"success\"\n        \"object\":{\n\t            \"bookId\": \"dddddfffffsssss\",\n\t            \"bookName\": \"你的灯亮着吗？\",\n\t            \"category\": \"思维\",\n\t            \"companyId\": \"信管工作室\",\n\t            \"quantity\": 2,\n\t            \"version\": \"2.0\"\n             }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookController.java",
    "groupTitle": "BOOK_QUERY",
    "name": "GetBookList4"
  },
  {
    "type": "PUT",
    "url": "book",
    "title": "通过书的id更新书的信息",
    "description": "<p>通过书的id更新书的信息，同时返回更新后的信息</p>",
    "group": "BOOK_UPDATE",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>书的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookName",
            "description": "<p>书名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quantity",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/1.1 200 OK\n      {\n        \"code\": \"1\",\n        \"msg\": \"success\"\n        \"object\":{\n\t            \"bookId\": \"dddddfffffsssss\",\n\t            \"bookName\": \"你的灯亮着吗？\",\n\t            \"category\": \"思维\",\n\t            \"companyId\": \"信管工作室\",\n\t            \"quantity\": 2,\n\t            \"version\": \"2.0\"\n             }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mis/hrm/book/controller/BookController.java",
    "groupTitle": "BOOK_UPDATE",
    "name": "PutBook"
  }
] });
