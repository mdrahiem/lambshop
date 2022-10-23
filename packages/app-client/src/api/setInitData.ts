import { BASE_URL, initialXMLData } from ".";

async function setInitData() {
  const data = await fetch(BASE_URL + "/load", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "text/xml",
    },
    body: initialXMLData,
  }).then((resp) => resp.json());
  return data;
}

export { setInitData };
