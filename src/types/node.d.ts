declare namespace NodeJS {
  export interface ProcessEnv {
    HOST: string;
    PORT: string;
    NODE_ENV: string;
    BASENAME: string;
  }
}
