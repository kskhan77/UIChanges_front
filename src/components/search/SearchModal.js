import React, { useState } from "react";
import $ from "jquery";
import { withRouter } from "react-router-dom";

const SearchModal = (props) => {
  const [searchFilters, setSearchFilters] = useState({
    type: "title",
    text: "",
    category: "all",
    priceMin: "",
    priceMax: "",
    condition: "both",
  });

  const { type, text, category, priceMax, priceMin, condition } = searchFilters;

  const onChange = (e) => {
    setSearchFilters({ ...searchFilters, [e.target.name]: e.target.value });
  };

  const collapseAdvanced = () => {
    $(".collapse").collapse("hide");
  };

  const getSearchURL = () => {
    let initial = `/search?type=${type}&text=${text}&cat=${category}&condition=${condition}`;
    if (priceMin) {
      initial = initial + `&priceMin=${priceMin}`;
    }
    if (priceMax) {
      initial = initial + `&priceMax=${priceMax}`;
    }
    return initial;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    $(".collapse").collapse("hide");
    $("#searchModal").modal("hide");
    let searchURL = getSearchURL();
    setSearchFilters({
      type: "title",
      text: "",
      category: "all",
      priceMin: "",
      priceMax: "",
      condition: "both",
    });
    props.history.push(searchURL);
  };

  return (
    <div class="modal fade" id="searchModal" tabIndex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form onSubmit={onSubmit}>
            {" "}
            {/*you can make it a form to add onSubmit handler */}
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="search-title">
                Search Items
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={collapseAdvanced}
              >
                <span class="text-white">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="input-group">
                <div class="input-group-prepend">
                  <select
                    class="custom-select"
                    id="searchAttribute"
                    value={type}
                    style={{ backgroundColor: "#e9ecef" }}
                    name="type"
                    onChange={onChange}
                  >
                    <option value="title">Title</option>
                    <option value="soldFrom">Sold From</option>
                    <option value="description">Description</option>
                  </select>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="text"
                  value={text}
                  onChange={onChange}
                  required
                />
              </div>
              <div class="text-right mt-3">
                <button
                  class="ml-auto btn btn-outline-dark btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#advancedForm"
                >
                  Advanced Search
                </button>
                <div class="collapse mt-1" id="advancedForm">
                  <div class="card card-body">
                    {/* category filter */}
                    <div class="form-group">
                      <label>Category</label>
                      <select
                        class="form-control w-50 ml-auto"
                        value={category}
                        name="category"
                        onChange={onChange}
                      >
                        <option value="all">All</option>
                        <option value="furnitures">Furniture</option>
                        <option value="mobiles">Mobile</option>
                        <option value="computers">Computer</option>
                        <option value="vehicles">Vehicle</option>
                      </select>
                    </div>

                    {/* price min-max filter */}
                    <label>Price Range</label>
                    <div class="ml-auto form-row w-50 mb-3">
                      <div class="col">
                        <input
                          type="number"
                          min="1"
                          class="form-control"
                          placeholder="Min"
                          value={priceMin}
                          onChange={onChange}
                          name="priceMin"
                        />
                      </div>
                      <span>-</span>
                      <div class="col">
                        <input
                          type="number"
                          min={priceMin === "" ? "1" : parseInt(priceMin) + 1}
                          class="form-control"
                          placeholder="Max"
                          value={priceMax}
                          onChange={onChange}
                          name="priceMax"
                        />
                      </div>
                    </div>

                    {/* condition  */}
                    <label>Condition</label>
                    <div class="d-flex justify-content-end">
                      <div class="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          value="new"
                          id="new"
                          name="condition"
                          class="custom-control-input"
                          onChange={onChange}
                        />
                        <label class="custom-control-label" htmlFor="new">
                          New
                        </label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          value="old"
                          id="used"
                          name="condition"
                          class="custom-control-input"
                          onChange={onChange}
                        />
                        <label class="custom-control-label" htmlFor="used">
                          Used
                        </label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          value="both"
                          id="both"
                          name="condition"
                          class="custom-control-input"
                          defaultChecked
                          onChange={onChange}
                        />
                        <label class="custom-control-label" htmlFor="both">
                          Both
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={collapseAdvanced}
              >
                Close
              </button>
              <button class="btn btn-success" type="submit">
                Search
              </button>
              {/* <Link onClick={collapseAndCloseModal} to="/search" class="btn btn-success">Search</Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchModal);
