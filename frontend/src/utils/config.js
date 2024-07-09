

import axios from "axios";

const baseURLs = {
  development: "http://localhost:3001/api/v1",
  production: "https://travel-agency-rngy.onrender.com",
};

const baseURL =
  process.env.NODE_ENV === "production"
    ? baseURLs.production
    : baseURLs.development;

export default axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
