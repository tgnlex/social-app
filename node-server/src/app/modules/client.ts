import type { Request } from 'express';

class Client {
  ip: any;
  agent: any;
  constructor(req: Request) {
    this.ip = req.socket.remoteAddress;
    this.agent = req.headers['user-agent'];
  }
}

export default Client;

