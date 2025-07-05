export const paths = {
  Address: {
    search: {
      defaul: {
        path: "/api/address/search",
        getHref: () => "/api/address/search",
      },
      Date: {
        path: "/api/address/search/Date",
        getHref: () => "/api/address/search/Date",
      },
    },
    basic: {
      path: "/api/address",
      getHref: () => "/api/address",
    }, //Post : Insert, Put, Delete
  },
  Administration: {
    search: {
      path: "/api/time/search",
      getHref: () => "/api/time/search",
    },
    basic: {
      path: "/api/time",
      getHref: () => "/api/time",
    },
  },
  forum: {
    Board: {
      basic: {
        path: "/api/board",
        getHref: () => "/api/board",
      },
      search: {
        path: "/api/board/search/page",
        getHref: () => "/api/board/search/page",
      },
      param: {
        path: "/api/board/search",
        getHref: () => "/api/board/search",
      },
    },
    Comment: {
      basic: {
        path: "/api/comment",
        getHref: () => "/api/comment",
      },
      search: {
        Board: {
          path: "/api/comment/search/panel",
          getHref: () => "/api/board/search/panel",
        },
        Comment: {
          path: "/api/comment/search",
          getHref: () => "/api/comment/search",
        },
      },
    },
  },
  Inqurie: {
    basic: {
      path: "/api/inqurie",
      getHref: () => "/api/inqurie",
    },
    serach: {
      path: "/api/inqurie/search",
      getHref: () => "/api/inqurie/search",
      page: {
        path: "/api/inqurie/search/page",
        getHref: () => "/api/inqurie/search/page",
      },
    },
  }, //수정 기능 지원하지 않음
  Certification: {
    basic: {
      path: "/api/auth",
      getHref: () => "/api/auth",
    },
    login: {
      path: "/api/auth/login",
      getHref: () => "/api/auth/login",
    },
    logout: {
      path: "/api/auth/logout",
      getHref: () => "/api/auth/logout",
    },
    search: {
      path: "/api/auth/search",
      getHref: () => "/api/auth/search",
      password: "/api/auth/search/password",
    },
    check: {
      path: "/api/auth/check",
      getHref: () => "/api/auth/check",
    },
  },
  Notice: {
    basic: {
      path: "/api/notice",
      getHref: () => "/api/notice",
    },
    serach: {
      path: "/api/notice/search",
      getHref: () => "/api/notice/search",
    }, //Get은 개별 내역, Post는 전체 내역
    Type: {
      path: "/api/notice/search/Type",
      getHref: () => "/api/notice/search/Type",
    },
  },
  Question: {
    basic: {
      path: "/api/question",
      getHref: () => "/api/question",
    },
    serach: {
      path: "/api/question/search",
      getHref: () => "/api/question/search",
    }, //Get은 개별 내역, Post는 전체 내역
  },
  reserve: {
    basic: {
      path: "/api/reserve",
      getHref: () => "/api/reserve",
    },
    serach: {
      path: "/api/reserve/search",
      getHref: () => "/api/reserve/search",
    }, //Get은 개별 내역, Post는 전체 내역
  },
} as const;
