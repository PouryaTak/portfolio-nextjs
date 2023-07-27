export function setCookie(name: string, value: string | number) {
  const d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value};${expires};`;
}

export function getCookie(name: string) {
  const cookies = document.cookie
    .split(";")
    .find((cookie) => cookie.includes(`${name}=`));
  return cookies ? cookies.split("=")[1] : undefined;
}
