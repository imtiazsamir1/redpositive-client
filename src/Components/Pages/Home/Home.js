import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-50 shadow-lg p-16 m-5 border-[3px] border-indigo-600 rounded">
        <div className="flex flex-nowrap justify-between ">
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
                              placeholder="Name"
                              class="input input-bordered input-primary w-full max-w-xs"
                            />
                          </div>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Phone Number"
                            class="input input-bordered input-primary w-full max-w-xs"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Email"
                            class="input input-bordered input-primary w-full max-w-xs"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
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
                    Save
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button class="btn btn-active btn-secondary m-8">Send Mail</button>
        </div>
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>
                <input type={"checkbox"} />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Hobbie</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>watching movie</td>
              <td>
                <button className="btn btn-error">Delete</button>
              </td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
