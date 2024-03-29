import React from "react";
import { StringUtils } from "turbocommons-ts";
import faker from "faker";
import { AvatarGenerator } from "random-avatar-generator";

interface AuthorSearch {
  author_id: string;
  author_name: string;
}

interface AuthorRecommend {
  author_id: string;
  author_name: string;
  author_rank: number;
}

interface AmongOrgRecommend {
  org_1: string;
  author_id_1: string;
  author_name_1: string;
  org_2: string;
  author_id_2: string;
  author_name_2: string;
  rank: number;
}

interface PaperSearch {
  paper_title: string;
  author_id: string[];
  author_name: string[];
  venue_raw: string;
  year: number;
  doi: string;
}

interface AppState_t {
  search_res: AuthorSearch[];
  author_chosen: AuthorSearch;
  recommend_author: AuthorRecommend[];
  org_1: string;
  org_2: string;
  org_search: string[];
  among_org_rank: AmongOrgRecommend[];
  gloab_modal: boolean;
  paper_search: PaperSearch[];
  recorded_author_list: string[][];
  recommend_athor_for_user: AuthorRecommend[];
}

interface AppAction_t {
  type: string;
  value: any;
  callback?: any | undefined; // fuck this logic
}

const reducer = (state: AppState_t, action: AppAction_t): AppState_t => {
  switch (action.type) {
    case "set_search_res": {
      return {
        ...state,
        search_res: action.value
      }
    }
    case "set_author_chosen": {
      return {
        ...state,
        author_chosen: action.value
      }
    }
    case "set_recommend_author": {
      return {
        ...state,
        recommend_author: action.value
      }
    }
    case "set_org_1": {
      return {
        ...state,
        org_1: action.value
      }
    }
    case "set_org_2": {
      return {
        ...state,
        org_2: action.value
      }
    }
    case "set_search_org": {
      return {
        ...state,
        org_search: action.value
      }
    }
    case "set_among_org_rec": {
      return {
        ...state,
        among_org_rank: action.value
      }
    }
    case "set_glob_modal": {
      return {
        ...state,
        gloab_modal: action.value
      }
    }
    case "set_paper_search": {
      return {
        ...state,
        paper_search: action.value
      }
    }
    case "append_recorded_paper_click": {
      return {
        ...state,
        recorded_author_list: state.recorded_author_list.concat([action.value])
      }
    }
    case "set_recommend_author_for_user": {
      return {
        ...state,
        recommend_athor_for_user: action.value
      }
    }
    default:
      return state;
  }
};

const initialState: AppState_t = {
  search_res: [
    // { author_id: "ID1", author_name: "Author-1" },
    // { author_id: "ID2", author_name: "Author-2" },
    // { author_id: "ID3", author_name: "Author-3" },
    // { author_id: "ID4", author_name: "..." },
    // { author_id: "ID5", author_name: "Author-200" },

    // { author_id: "ID1", author_name: "Author-1" },
    // { author_id: "ID2", author_name: "Author-2" },
    // { author_id: "ID3", author_name: "Author-3" },
    // { author_id: "ID4", author_name: "..." },
    // { author_id: "ID5", author_name: "Author-200" },


    // { author_id: "ID1", author_name: "Author-1" },
    // { author_id: "ID2", author_name: "Author-2" },
    // { author_id: "ID3", author_name: "Author-3" },
    // { author_id: "ID4", author_name: "..." },
    // { author_id: "ID5", author_name: "Author-200" },


    // { author_id: "ID1", author_name: "Author-1" },
    // { author_id: "ID2", author_name: "Author-2" },
    // { author_id: "ID3", author_name: "Author-3" },
    // { author_id: "ID4", author_name: "..." },
    // { author_id: "ID5", author_name: "Author-200" },

  ],
  author_chosen: { author_id: "", author_name: "" },
  recommend_author: [
    // { author_id: "ID1", author_name: "Author-1", author_rank: 0.999 },
    // { author_id: "ID2", author_name: "Author-2", author_rank: 0.999 },
    // { author_id: "ID3", author_name: "Author-3", author_rank: 0.999 },
    // { author_id: "ID4", author_name: "...", author_rank: 0.999 },
    // { author_id: "ID5", author_name: "Author-N", author_rank: 0.999 },
  ],
  recommend_athor_for_user: [
    // { author_id: "ID1", author_name: "Author-1", author_rank: 0.999 },
    // { author_id: "ID2", author_name: "Author-2", author_rank: 0.999 },
    // { author_id: "ID3", author_name: "Author-3", author_rank: 0.999 },
    // { author_id: "ID4", author_name: "...", author_rank: 0.999 },
    // { author_id: "ID5", author_name: "Author-N", author_rank: 0.999 },
  ],
  org_1: "", org_2: "",
  org_search: [
    // "Org-1/Uni-1",
    // "Org-2/Uni-2",
    // "Org-3/Uni-3",
    // "...",
    // "Org-N/Uni-N",

    // "Org-1/Uni-1",
    // "Org-2/Uni-2",
    // "Org-3/Uni-3",
    // "...",
    // "Org-N/Uni-N",

    // "Org-1/Uni-1",
    // "Org-2/Uni-2",
    // "Org-3/Uni-3",
    // "...",
    // "Org-N/Uni-N",

    // "Org-1/Uni-1",
    // "Org-2/Uni-2",
    // "Org-3/Uni-3",
    // "...",
    // "Org-N/Uni-N",
  ],
  among_org_rank: [
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
    // {org_1: "org1", author_id_1: "id1", author_name_1: "name1", org_2: "org2", author_id_2: "id2", author_name_2: "name2", rank: 0.99},
  ],
  gloab_modal: false,
  paper_search: [
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg", "abcd", "efbg", "abcd", "efbg", "abcd", "efbg", "abcd", "efbg", "abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
    // {paper_title: "title_draft", venue_raw: "venua_draft", author_id: ["123", "456"], author_name: ["abcd", "efbg"], year: 1999, doi: "1991092389"},
  ],
  recorded_author_list: [
    
  ]
};

export const AppContext = React.createContext<[AppState_t, React.Dispatch<AppAction_t>]>
  ([initialState, () => null]);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // The idea real simple
  // React built-in reducer is powerful enough, no need Redux
  // Use React context to broadcast the state + dispatch function to all children
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
