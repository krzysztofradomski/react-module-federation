import { loadEnv } from "vite";

process.env = {
  ...process.env,
  ...loadEnv(process.env.NODE_ENV || "development", process.cwd()),
};

export default {
  app1: process.env.VITE_APP1_URL || "",
  app2: process.env.VITE_APP2_URL || "",
};
