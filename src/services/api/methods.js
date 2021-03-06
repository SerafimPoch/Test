import { base_api_url } from "./baseUrl";

export const post = async source => {
  const headers = new Headers({ accept: "form-data" });
  const response = await fetch(base_api_url, {
    method: "POST",
    body: source,
    headers
  });
  const data = await response.json();
  return data;
};

export const get = async () => {
  const headers = new Headers({ accept: "application/json" });
  const response = await fetch(base_api_url + `?count=5`, {
    method: "GET",
    headers
  });
  const data = await response.json();
  return data;
};

export const put = async (userData, id) => {
  const headers = new Headers({ accept: "form-data" });
  const response = await fetch(base_api_url + `/${id}`, {
    method: "PUT",
    body: userData,
    headers
  });
  const data = await response.json();
  return data;
};

export const del = async id => {
  const response = await fetch(base_api_url + `/${id}`, {
    method: "DELETE"
  });
  return response;
};

export const loadMore = async () => {
  const headers = new Headers({ accept: "application/json" });
  const response = await fetch(base_api_url + `?count=100`, {
    method: "GET",
    headers
  });
  const data = await response.json();
  return data;
};
