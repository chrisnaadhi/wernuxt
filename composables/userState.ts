import { e } from "@unocss/core";

export const darkModeState = () =>
  useState<string>("darkState", () => {
    const cookie = useCookie("mode");
    if (!cookie.value) {
      cookie.value = "light";
    }

    return cookie.value;
  });
export const isDarkMode = () =>
  useState<boolean>("darkMode", () => {
    const cookie = useCookie("mode");
    if (cookie.value === "light") {
      return false;
    } else if (cookie.value == "dark") {
      return true;
    } else {
      return false;
    }
  });
export const nameState = () => useState<string>("userName", () => "Chrisna");
