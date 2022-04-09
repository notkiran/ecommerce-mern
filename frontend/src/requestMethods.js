import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDE4YjVlMTRkMjJkNGFmNzE3MzQzOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTAwMjc2OSwiZXhwIjoxNjQ5MjYxOTY5fQ.SWVNwX1iFURbDQwWRsZWRbBk3wuN-GNCpTb-gpHHaaU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
