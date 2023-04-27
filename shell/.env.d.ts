/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP1_URL: string;
  readonly VITE_APP2_URL: string;
  readonly VITE_SHELL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
