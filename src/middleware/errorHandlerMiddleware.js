export default async function errorHandlerMiddleware(error, req, res, next){
  switch (error.type){
    case "Not Found":
      return res.status(404).send(error.message);
    case "Unauthorized":
      return res.status(401).send(error.message);
    case "Conflict":
      return res.status(409).send(error.message);
    case "Bad Request":
      return res.status(400).send(error.message);
    case "Forbidden":
  };
 
  return res.sendStatus(500);
}