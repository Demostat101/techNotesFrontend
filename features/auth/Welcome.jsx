import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Welcome = () => {
  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true, // Enables AM/PM format
    };

    // Get the formatted string
    let formattedDate = date.toLocaleString("en-NG", options);
    
    // Convert AM/PM to uppercase
    formattedDate = formattedDate.replace(/(am|pm)/gi, (match) => match.toUpperCase());

    return formattedDate;
  };

  const today = formatDate(new Date());
  

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
