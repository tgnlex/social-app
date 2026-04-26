enum Switch { ON, OFF }
enum Status {
  ONLINE = "online",
  OFFLINE = "offline"
}

enum Code {
  OK = 200,
  REDIRECT = 300,
  BAD = 400,
  NOTFOUND = 404,
  ERROR = 500
}

export { Code, Status, Switch }
