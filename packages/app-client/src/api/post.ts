const BASE_URL = "http://localhost:8080/yak-shop";

async function setInitData() {
  const { data } = await fetch(BASE_URL + "/load", {
    method: "POST",
  }).then((resp) => resp.json());
  return data;
}

export { setInitData };
