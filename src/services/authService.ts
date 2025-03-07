import { Auth0Client } from "@auth0/auth0-spa-js";

const auth0 = new Auth0Client({
  domain: "dev-au06s6v025l2042v.us.auth0.com",
  clientId: "Emgdq5DSHdhtjiDcwrpkp6lCYbSHprqA",
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
});

export const login = async () => {
  await auth0.loginWithRedirect();
};

export const logout = () => {
  auth0.logout({ returnTo: window.location.origin });
};

export const getUser = async () => {
  return await auth0.getUser();
};
