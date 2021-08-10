import { atom, selector } from "recoil";

export const textState = atom({ key: "textState", default: "hello" });
export const textLenState = selector({
  key: "textLenState",
  get: ({ get }) => get(textState).length,
});
export const uppercaseState = selector({
  key: "uppercaseState",
  get: ({ get }) => get(textState).toUpperCase(),
});
