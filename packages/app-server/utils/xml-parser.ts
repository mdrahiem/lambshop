import xmlParser from "express-xml-bodyparser";

const xml2jsDefaults = {
  explicitArray: false,
  normalize: false,
  normalizeTags: false,
  trim: true,
  sanitize: true,
  mergeAttrs: true,
};

export default xmlParser(xml2jsDefaults);
