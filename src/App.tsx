import { LegacyRef, useEffect, useRef, useState } from "react";
import "asagiri";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState([...users]);

  type NewType = LegacyRef<any> | undefined;
  const ref: NewType = useRef();
  // console.log(ref);

  // const SearchQuery
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => setUsers(data));
  }, []);
  // console.log(users);

  const handleSearch = () => {
    console.log(ref.current.value);

    setSearchQuery(
      users.filter((user) =>
        user.name.toLowerCase().includes(ref.current.value.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <h1>Search App</h1>
      <label>Input</label>
      <input
        type="text"
        placeholder="...input"
        ref={ref}
        onChange={() => handleSearch()}
      />
      {/* content */}
      <div className="content">
        <div className="section ">
          {/* {(searchQuery.length <= 0 ? users : searchQuery).map( */}

          {!ref || searchQuery.length <= 0
            ? users.map((user, index) => (
                <div className="box" key={index}>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              ))
            : searchQuery.map((user, index) => (
                <div className="box" key={index}>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 1- https://www.youtube.com/watch?v=q_VgmKym5_A&ab_channel=プログラミングチュートリアル
 */

/**
 * id: 1
 * name: "Leanne Graham"
 * username: "Bret"
 * email: "Sincere@april.biz"
 * address: Object
 * phone: "1-770-736-8031 x56442"
 * website: "hildegard.org"
 * company: Object
 */
