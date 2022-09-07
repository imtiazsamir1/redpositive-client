import React from "react";
import { useEffect, useState } from "react";

const Checkbox = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/person")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  //   useEffect(() => {
  //     setUsers(userData);
  //   }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("deleting user with id, ", id);
      const url = `http://localhost:5000/data/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      {" "}
      <form className="form w-100">
        <h3>Select Users</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            // checked={
            //   users.filter((user) => user?.isChecked !== true).length < 1
            // }
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">All Select</label>
        </div>

        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            {/* <div>
              <thead>
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Hobbie</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <table class="table table-compact w-full">
                <tbody>
                  <tr>
                    <th></th>
                    <td>1</td>
                    <td>{user.name}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.email}</td>
                    <td>{user.hobbie}</td>
                    <td>
                      <button className="btn btn-error">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            <div class="overflow-x-auto">
              <table class="table w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Hobbie</th>
                    <th>
                      <button
                        onClick={() => handleUserDelete(user._id)}
                        className="btn btn-error"
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{user.name}</th>
                    <td>{user.phoneNumber}</td>
                    <td>{user.email}</td>
                    <td>{user.hobbie}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </form>
      {/* <YTVideo embedId="mGV9r0wgCrI" /> */}
    </div>
  );
};

export default Checkbox;
