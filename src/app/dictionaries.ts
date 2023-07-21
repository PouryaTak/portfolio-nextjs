import 'server-only';

const dictionaries = {
  "en-US": () =>
    import("../dictionaries/en-US/en-US.json").then((module) => module.default),
  "fa-IR": () =>
    import("../dictionaries/fa-IR/fa-IR.json").then((module) => module.default),
};
// @ts-ignore
export const getDictionary = async (locale: any) => dictionaries[locale]();
