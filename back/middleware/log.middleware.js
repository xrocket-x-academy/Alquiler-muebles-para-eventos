const logMiddleware = (req, res, next) => {
  console.log({
    reqUrl: req.url,
    reqQuery: req.query,
  });
  console.log({
    reqMethod: req.method,
    reqHeaders: req.headers,
  });
  console.log({
    reqBody: req.body,
    reqParams: req.params,
  });
  next();
};
module.exports = { logMiddleware };
