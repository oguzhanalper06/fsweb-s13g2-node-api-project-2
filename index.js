const port = 9000;

const server = require("./api/server");

server.listen(port, `Listening on port ${port}`);
