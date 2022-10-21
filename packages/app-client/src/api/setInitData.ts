import { BASE_URL } from ".";

async function setInitData() {
  const data = await fetch(BASE_URL + "/load", {
    method: "POST",
  }).then((resp) => resp.json());
  return data;
}

export { setInitData };
