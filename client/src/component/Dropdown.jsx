import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
} from "semantic-ui-react";
import { priceFilter } from "../filter/priceFilter.js";
import { Checkbox, Radio } from "semantic-ui-react";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function DropDown({ scale }) {
  const [radioLabel, setRadioLabel] = useState("All");
  // const [checkboxId, setCheckboxId] = useState("All");
  const [category, setCategory] = useState([]);

  let radioValue = [0, 9999999];
  let checkbox = [];

  //get all category at first time page loaded
  useEffect(() => {
    getCategory();
  }, []);
  async function getCategory() {
    const data = await fetch("http://localhost:8080/api/v1/category/all");
    const result = await data.json();
    if (result.success) {
      setCategory(result.result);
    }
  }
  //to handle radio behaviour
  function radioAction(item) {
    setRadioLabel(item.name);
    radioValue = item.value;
    console.log(radioValue);
  }

  //to handle Checkbox behaviour
  function checkBoxAction(c, { checked }) {
    if (checked) {
      checkbox.push(c._id);
    } else {
      checkbox = checkbox.filter((i) => i !== c._id);
    }
    console.log(checkbox);
  }
  return (
    <Dropdown
      style={{ scale: `${scale}`, zIndex: "50" }}
      text="Filter"
      icon="filter"
      floating
      labeled
      button
      className="icon"
    >
      <DropdownMenu style={{ width: "150px" }}>
        <DropdownHeader icon="tags" content="Filter by" />
        <DropdownDivider />
        <Dropdown text="category" pointing="left" className="link item">
          <DropdownMenu>
            {category &&
              category.map((c) => (
                <DropdownItem key={c}>
                  <Checkbox
                    label={c.name}
                    value={c._id}
                    onChange={(e, data) => checkBoxAction(c, data)}
                  />
                </DropdownItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown text="price range" pointing="left" className="link item">
          <DropdownMenu>
            {priceFilter.map((item, id) => (
              <DropdownItem key={id}>
                <Radio
                  checked={item.name == radioLabel}
                  value={item.name}
                  onChange={() => radioAction(item)}
                  label={item.name}
                />
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </DropdownMenu>
    </Dropdown>
  );
}
