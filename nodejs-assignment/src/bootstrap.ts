import { userInfo } from "os";
import { getRepository } from "typeorm";
import { User } from "./entity/User";

export const Bootstrap = async () => {
  const userRepo = getRepository(User);
  const user = userRepo.create({ name: "Tipsy", breed: "Bengal", age: 5 });
  await userRepo.save(user).catch((err) => {
    console.log("Error", err);
  });
  console.log("New entry added", user);
};
