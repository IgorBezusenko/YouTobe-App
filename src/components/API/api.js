import * as axios from "axios";

const KEY = "AIzaSyDB7Ryajp3g7yoc7UYEd_RieU3OtjGDr04 ";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/videos",
  params: {
    part: "snippet",
    maxResults: 50,
    key: KEY,
  },
});

export const playListAPI = {
  getPlayList(termFromSearchBar) {
    return instance
      .get(`/search`, { params: { q: termFromSearchBar } })
      .then((res) => res.data);
  },
};
