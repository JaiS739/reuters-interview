import React, { useEffect, useState } from "react";

const SearchList = () => {
  const [users, setUsers] = useState();
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setUsers(json);
    };
    getUsers();
  }, []);

  console.log(users);

  return (
    <div>
      <h1>Search</h1>
      <input
        type="search"
        placeholder="🔍"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {users &&
        users
          .slice(0, 10)
          .filter(({ name }) => {
            return name.indexOf(searchValue) >= 0;
          })
          .map((ele) => (
            <div>
              <h4 key={ele.id}>{ele.name}</h4>
            </div>
          ))}
    </div>
  );
};

export default SearchList;
