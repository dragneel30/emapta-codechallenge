import Config from "react-native-config";
import { CURRENT_DATE } from "../utils/date_utils";

const API_RESULT = Object.freeze({
  ERROR: 1,
  SUCCESS: 2,
  DATA_ERROR: 3,
});

const API_URL = {
  CURRENT_DAY_ARTICLES: `http://newsapi.org/v2/everything?q=<query>&from=${CURRENT_DATE}&apiKey=${Config.API_KEY}`,
};

const doGET = async (URL) => {
  let result = await fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return API_RESULT.ERROR;
      }
    })
    .then((data) => data)
    .catch((error) => {
      return API_RESULT.ERROR;
    });

  return result;
};

const getCurrentDayArticles = async (params: CURRENT_ARTICLE_PARAMS) => {
  let result = await doGET(
    API_URL.CURRENT_DAY_ARTICLES.replace("<query>", params.q)
  );

  return result.articles;
};

export { getCurrentDayArticles, API_RESULT };
