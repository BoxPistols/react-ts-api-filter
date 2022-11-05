import { LegacyRef, useEffect, useRef, useState } from "react";
import "asagiri";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => setUsers(data));
  }, []);
  // console.log(users);

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
  type NewType = LegacyRef<any> | undefined;
  const ref: NewType = useRef();
  // console.log(ref);

  const handleSearch = () => {
    console.log(ref.current.value);
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
          {/* Box */}
          {users.map((user, index) => (
            <div className="box" key={index}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))}
          {/* Box 2 */}
          <div className="box">
            <h2>User Name</h2>
            <hr />
            <p>Mail</p>
          </div>
        </div>
      </div>
    </div>
  );
}
