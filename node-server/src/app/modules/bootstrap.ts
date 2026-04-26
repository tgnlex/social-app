import express, { type Express } from 'express'
type KV = { key: string, value: string | number | boolean | null }



interface AppConfig {
  middleware: Function[]
  plugins: Function[];
  globals: KV[];
}

class Application {
  config: AppConfig;
  server: Express;
  constructor(config: AppConfig) {
    this.server = express();
    this.config = config;
  }

  bootstrap() {
    const { plugins, globals, middleware } = this.config;
    this.server.disable('x-powered-by');
    middleware.forEach((mw: Function) => this.server.use(mw))
    plugins.forEach((plug: Function) => this.server.use(plug));
    globals.forEach((g) => { this.server.set(g.key, g.value) });
  }

  protocol() { this.server.get('app.protocol') };
  loglevel() { this.server.get('app.log')};
  version() { this.server.get('app.version')};
  name() { this.server.get('app.name')};
  host() { this.server.get('app.host')};
  port() { this.server.get('app.port')};
  env() { this.server.get('app.env') };
  development() {this.server.get('app.development') };
  production() { this.server.get('app.production') };
}


export default Application;
