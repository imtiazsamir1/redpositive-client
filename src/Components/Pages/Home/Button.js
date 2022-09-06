import React from "react";

const Button = () => {
  return (
    <div className="sticky  bottom-0 w-full  flex justify-between bg-stone-200 overflow-hidden ">
      <div>
        <label for="my-modal-5" class="btn modal-button">
          open modal
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
      <div>
        <button class="btn btn-neutral">Button</button>
      </div>
      <div>
        <button class="btn btn-neutral">Button</button>
      </div>
    </div>
  );
};

export default Button;
