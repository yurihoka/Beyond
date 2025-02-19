export const validateLoginUser = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    });

    const isValidLoginUser = response.status === 200;
    const msg = await response.text();

    return { isValidLoginUser: isValidLoginUser, msg: msg };
  } catch (err) {
    console.log(err);
  }
};
