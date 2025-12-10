import { MdOutlineMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import SocialButtons from "./socmedIcons";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../src/firebaseConfig"; 
import "./global.css";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: new Date(),
      });
      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");

      // Hide the success message after 5 seconds
      setTimeout(() => setSuccess(""), 5000);
    } catch (err) {
      console.error("Error sending message: ", err);
      setSuccess("Failed to send message.");

      // Hide the error message after 5 seconds
      setTimeout(() => setSuccess(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className=" overpass text-3xl font-bold mb-24  text-center text-white block-zoom">
        Get In Touch
      </h1>

      <div className="flex justify-center px-4 md:px-12 w-full">
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-12">
          {/* Contact Information */}
          <div className="flex-1 flex flex-col gap-4 justify-center block-left">
            <h1 className="overpass text-2xl font-bold mb-4 text-white">
              Contact Information
            </h1>

            <a
              href="mailto:qrjrgenova@tip.edu.ph"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-4 p-2 rounded hover:bg-gray-700 transition w-full md:w-auto">
                <MdOutlineMail className="text-white text-2xl" />
                <span className="overpass text-white break-all">
                  qrjrgenova@tip.edu.ph
                </span>
              </button>
            </a>

            <a
              href="mailto:genovarenanjayson@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-4 p-2 rounded hover:bg-gray-700 transition w-full md:w-auto">
                <MdOutlineMail className="text-white text-2xl" />
                <span className="overpass text-white break-all">
                  genovarenanjayson@gmail.com
                </span>
              </button>
            </a>

            <div className="flex items-center gap-4 p-2">
              <BsFillTelephoneFill className="text-white text-2xl" />
              <span className="overpass text-white">+63 918 207 0430</span>
            </div>

            <h1 className="overpass text-2xl font-bold mt-6 text-white">
              Connect with Me
            </h1>
            <SocialButtons />
          </div>

          {/* Send a Message */}
          <div className="flex-1 flex flex-col block-right">
            <h1 className="overpass text-2xl font-bold mb-4 text-white">
              Send a Message
            </h1>
            <form className="flex flex-col gap-4 relative" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 rounded bg-[#0A0D36] text-white border border-gray-600 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded bg-[#0A0D36] text-white border border-gray-600 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Your Message"
                className="p-2 rounded bg-[#0A0D36] text-white border border-gray-600 h-32 resize-none w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#0A0D36] hover:bg-gray-700 border-white border  text-white font-bold py-2 px-4 rounded transition w-full md:w-auto"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {success && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
                  {success}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
