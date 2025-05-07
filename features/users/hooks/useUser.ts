import { useEffect, useState } from "react";
import { User } from "../types/user";
import { getUser } from "../services/userService";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser().then((res) => {
      setUser(res);
      setLoading(false);
    });
  }, []);

  return { user, loading };
};
