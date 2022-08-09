// const cookie = useCookie("mode");
// if (!cookie.value) {
//   cookie.value = "light";
// }

export const darkModeState = () => useState<boolean>("mode", () => false);
export const nameState = () => useState<string>("userName", () => "Chrisna");
