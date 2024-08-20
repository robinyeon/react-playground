import { useEffect, useState } from "react";
import { get } from "../apis";
import { UserPagination } from "../types/userPagination";
import { Nullable } from "../types/common";
import { User } from "../types/user";

export const Main = () => {
  const [users, setUsers] = useState<Nullable<User[]>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await get<UserPagination>("/api/users");

      setUsers(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {users ? (
          users.map((user) => (
            <li key={user.id}>
              {user.first_name} {user.last_name}
            </li>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
    </div>
  );
};
