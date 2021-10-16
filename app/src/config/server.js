export const HOST_PORT = process.env.REACT_APP_HOST_PORT
export const ENV = process.env.REACT_APP_NODE_ENV

export const HOST = process.env.REACT_APP_NODE_ENV === "development" ? `http://localhost:${HOST_PORT}` : "https://radio.angelin.dev"
