/** @format */

import { Segment } from "semantic-ui-react";

export default function Profile() {
  const auth = JSON.parse(localStorage.getItem("_L"));

  return (
    <Segment>
      <div
        className="space-y-2 justify-center h-full flex items-center
            flex-col"
      >
        <p
          className="text-center border-b-2 border-b-gray-600
                inline-block md:text-3xl text-2xl font-bold"
        >
          {auth.admin ? "Admin" : "User"} Information
        </p>
        <ul className="space-y-3 text-left">
          <li className="md:text-xl">Name: {auth.name}</li>
          <li className="md:text-xl">Email: {auth.email}</li>
          <li className="md:text-xl">Contact: {auth.phone}</li>
        </ul>
      </div>
    </Segment>
  );
}
