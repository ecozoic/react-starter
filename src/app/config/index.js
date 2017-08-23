class Config {
  static get nodeEnv() {
    return process.env.NODE_ENV || 'development';
  }

  static get host() {
    return process.env.HOST || 'localhost';
  }

  static get port() {
    return +process.env.PORT || 8080;
  }

  static get basename() {
    return process.env.BASENAME || '/';
  }
}

export default Config;
