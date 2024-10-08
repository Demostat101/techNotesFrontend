import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-NG", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  return (
    <section>
      <p className="mb-[20px]">{today}</p>

      <h1 className="text-[24px] font-[700]">Welcome!</h1>

      
      <p className="flex place-items-center gap-[5px]">
        <FaArrowRight />
        <Link to="/dash/notes">View techNotes</Link>
      </p>
      <p className="flex place-items-center gap-[5px]">
        <FaArrowRight />
        <Link to="/dash/users">View User Settings</Link>
      </p>
      
    </section>
  );
};

export default Welcome;
