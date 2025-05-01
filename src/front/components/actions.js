export const signup = async (dispatch, payload) => {
  let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/signup", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
    }),
  });
  let data = await response.json();
};



export const login = async (dispatch, payload) => {
  let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
    }),
  });
  let data = await response.json();
};
