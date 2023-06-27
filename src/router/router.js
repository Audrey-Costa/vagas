import { Router } from "express";
import { controllerTeste1 } from "../controller/teste1.js";
import { controllerTeste2 } from "../controller/teste2.js";
import { controllerTeste3 } from "../controller/teste3.js";
import { controllerTeste4 } from "../controller/teste4.js";
import { controllerTeste5 } from "../controller/teste5.js";

const testeRouter = Router();

testeRouter.get('/', function(_, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});
testeRouter.get("/user", controllerTeste1.getUser);
testeRouter.get("/users", controllerTeste1.getUsers);
testeRouter.post("/users", controllerTeste2.postUser)
testeRouter.delete("/users", controllerTeste3.deleteUser)
testeRouter.put("/users", controllerTeste4.updateUser)
testeRouter.get("/users/access", controllerTeste5.getUserAccessCounter);

export default testeRouter;