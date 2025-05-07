import { User } from "../types/user";

export const getUser = async (): Promise<User> => {
  return Promise.resolve({
    id: "u1",
    name: "Jane Doe",
    email: "jane@example.com",
  });
};
