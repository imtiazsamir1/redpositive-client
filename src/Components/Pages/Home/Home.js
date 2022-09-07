import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Home.css";

import "./Button";
import Checkbox from "./Checkbox";

const Home = () => {
  const [selectAll, setSelectAll] = useState([]);
  const [select, setSelect] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const name = e.target.name.value;

    const phoneNumber = e.target.phoneNumber.value;
    const email = e.target.email.value;
    const hobbie = e.target.hobbie.value;
    const data = { name, phoneNumber, email, hobbie };
    console.log(data);
    axios
      .post("http://localhost:5000/person", data)
      .then((response) => toast.success("item added"));
  };
  return (
    <div className="w-full">
      <div className="bg-gray-50 shadow-lg p-16 m-5 border-[3px] border-indigo-600 rounded">
        <div className="flex flex-nowrap justify-between ">
          <form onSubmit={handleSubmit}>
            <div>
              <label for="my-modal-5" class="btn modal-button m-7">
                Add Data
              </label>

              <input type="checkbox" id="my-modal-5" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl">
                  <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                          <th>Hobbies</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="flex items-center space-x-3">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                class="input input-bordered input-primary w-full max-w-xs"
                              />
                            </div>
                          </td>
                          <td>
                            <input
                              type="text"
                              name="phoneNumber"
                              placeholder="Phone Number"
                              class="input input-bordered input-primary w-full max-w-xs"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="email"
                              placeholder="Email"
                              class="input input-bordered input-primary w-full max-w-xs"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="hobbie"
                              placeholder="Hobbies"
                              class="input input-bordered input-primary w-full max-w-xs"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="modal-action">
                    <label for="my-modal-5" class="btn">
                      <input type="submit" value="Save" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <button class="btn btn-active btn-secondary m-8">Send Mail</button>
        </div>
        <div></div>

        <Checkbox></Checkbox>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
