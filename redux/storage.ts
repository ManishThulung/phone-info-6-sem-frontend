let user;
if (typeof window !== "undefined") {
  let isUser = localStorage.getItem("access_token");
  if (isUser) {
    user = JSON?.parse(isUser);
  }
}

export const userExist = !!user;

export const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + `${user?.access_token}`,
};
