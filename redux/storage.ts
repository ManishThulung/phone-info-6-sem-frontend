let user;
if (typeof window !== "undefined") {
  user = JSON.parse(localStorage.getItem("access_token") || "");
}

export const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + `${user?.access_token}`,
};
