export const validateSignupUser = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    });
    const isSignedUp = response.status === 200;
    const msg = await response.text();

    return { isSignedUp: isSignedUp, msg: msg };
  } catch (err) {
    console.log(err);
  }
};
