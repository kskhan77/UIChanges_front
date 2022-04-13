import React, { useState, useContext, useEffect, useRef } from "react";
import AuthContext from "../../../context/auth/authContext";
import VehicleContext from "../../../context/vehicle/vehicleContext";
import AlertContext from "../../../context/alert/alertContext";
import Alert from "../../layout/Alert";
import axios from "axios";

const AddVehicle = ({ match }) => {
  const pid = match.params.id;

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const vehicleContext = useContext(VehicleContext);
  const { vehicleMessage, addVehicle, clearVehicleMessage, editVehicle } =
    vehicleContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const [vehicle, setVehicle] = useState({
    title: "",
    description: "",
    brand: "",
    kmDriven: "",
    mfgdYear: "",
    price: "",
    soldFrom: "",
    condition: "new",
    images: [],
  });

  useEffect(() => {
    if (pid) {
      (async function (id) {
        try {
          const p = await axios.get(`/vehicle/${id}`);
          setVehicle({ ...p.data });
        } catch (error) {
          console.log(error);
        }
      })(pid);
    } else {
      setVehicle({
        title: "",
        description: "",
        brand: "",
        kmDriven: "",
        mfgdYear: "",
        price: "",
        soldFrom: "",
        condition: "new",
        images: [],
      });
    }
    //eslint-disable-next-line
  }, [pid]);

  const onChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      description === "" ||
      brand === "" ||
      kmDriven === "" ||
      mfgdYear === "" ||
      price === "" ||
      soldFrom === "" ||
      condition === ""
    )
      return;
    if (pid)
      //edit case
      editVehicle(pid, vehicle);
    //add case
    else addVehicle(vehicle);
    setVehicle({
      title: "",
      description: "",
      brand: "",
      kmDriven: "",
      mfgdYear: "",
      price: "",
      soldFrom: "",
      condition: "new",
      images: [],
    });
  };

  useEffect(() => {
    if (
      vehicleMessage === "Ad for vehicle listed successfully!" ||
      vehicleMessage === "Ad for vehicle updated successfully!"
    ) {
      setAlert("success", vehicleMessage);
      clearVehicleMessage();
    }
    //eslint-disable-next-line
  }, [vehicleMessage]);

  const myRef = useRef(null);

  const fileSelectedEvent = (e) => {
    if (e.target.files.length > 3) {
      myRef.current.disabled = true;
      setAlert("warning", "You cannot upload more than 3 images");
      return;
    }
    myRef.current.disabled = false;
    setVehicle({
      ...vehicle,
      images: e.target.files,
    });
  };

  const {
    title,
    description,
    brand,
    kmDriven,
    mfgdYear,
    price,
    soldFrom,
    condition,
  } = vehicle;
  return (
    <section>
      <div class="container-fluid" style={{ paddingTop: "19vh" }}>
        <div class="row justify-content-center">
          <div class="col-md-6 border p-4 mb-2 pb-2">
            <div class="d-flex">
              <i class="fas fa-car fa-5x d-block"></i>
              <div class="ml-5">
                <h1 class="font-weight-bold">Post Ad</h1>
                <p class="text-secondary mt-1">
                  Selected Category:{" "}
                  <span class="font-weight-bold">Vehicle</span>
                </p>
              </div>
            </div>
            <hr />
            <Alert />
            <form onSubmit={onSubmit}>
              <div class="mb-3 field-required">
                <label>Ad Title</label>
                <input
                  type="text"
                  name="title"
                  class="form-control"
                  value={title}
                  onChange={onChange}
                  required
                ></input>
              </div>
              <div class="mb-3 field-required">
                <label>Ad Description</label>
                <textarea
                  name="description"
                  class="form-control"
                  value={description}
                  onChange={onChange}
                ></textarea>
              </div>
              <div class="mb-3 field-required">
                <label>Brand</label>
                <input
                  type="text"
                  name="brand"
                  class="form-control"
                  value={brand}
                  onChange={onChange}
                  required
                ></input>
              </div>
              <div class="mb-3 field-required">
                <label>Total KM Driven</label>
                <input
                  type="number"
                  name="kmDriven"
                  class="form-control"
                  min="0"
                  value={kmDriven}
                  onChange={onChange}
                  required
                ></input>
              </div>
              <div class="mb-3 field-required">
                <label>Manufactured Year</label>
                <input
                  type="number"
                  name="mfgdYear"
                  class="form-control"
                  min="0"
                  value={mfgdYear}
                  onChange={onChange}
                  required
                ></input>
              </div>
              <div class="mb-3 field-required">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  class="form-control"
                  min="1"
                  value={price}
                  onChange={onChange}
                  required
                ></input>
              </div>
              <div class="mb-3 field-required">
                <label>Condition</label>
                <select
                  name="condition"
                  class="form-control"
                  value={condition}
                  onChange={onChange}
                >
                  <option value="new">New</option>
                  <option value="old">Old</option>
                </select>
              </div>
              <div class="mb-4 field-required">
                <label>Sold From</label>
                <input
                  type="text"
                  name="soldFrom"
                  class="form-control"
                  value={soldFrom}
                  onChange={onChange}
                  required
                ></input>
              </div>
              {pid ? null : (
                <div class="form-group">
                  <label htmlFor="file">Select Image(s)</label>
                  <input
                    type="file"
                    name="images"
                    class="form-control-file"
                    id="file"
                    onChange={fileSelectedEvent}
                    accept="image/*"
                    multiple
                    required
                  />
                </div>
              )}
              <div class="text-center">
                <button
                  ref={myRef}
                  type="submit"
                  class="btn btn-info btn-lg my-3"
                >
                  {pid ? "Edit " : "Post "}Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddVehicle;