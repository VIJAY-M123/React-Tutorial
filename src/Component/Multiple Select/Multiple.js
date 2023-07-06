import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

export default function Multiple() {
  return (
    <div>
      <h2>Hiiii</h2>
      <form>
        <select name="select" multiple className="multiselect" multiselect-search="true"
          multiselect-select-all="true" multiselect-max-items="1">

          <option>Vijay</option>
          <option>Dhinesh</option>
          <option>Saravanan</option>
          <option>Ajai</option>
          <option>Jacob</option>
          <option>Raj</option>
        </select>
      </form>


      <DropdownMultiselect
        options={["Australia", "Canada", "USA", "Poland", "Spain", "France"]}
        name="countries"
      />
    </div>
  )
}