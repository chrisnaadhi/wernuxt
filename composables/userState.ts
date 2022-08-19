export const darkModeState = () =>
  useState<string>("mode", () => {
    const cookie = useCookie("mode");
    if (!cookie.value) {
      cookie.value = "light";
    }

    return cookie.value;
  });
export const nameState = () => useState<string>("userName", () => "Chrisna");
