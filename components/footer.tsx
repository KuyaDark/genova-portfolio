
import SocialButtons from "./socmedIcons";

function Footer() {
  return (
    <footer className="bg-[#0A0D36] p-12 flex flex-col items-center gap-8">
      {/* Title */}
      <h1 className="overpass text-3xl font-bold text-center text-white">
        Renan's Portfolio
      </h1>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6">
        {["home", "aboutMe", "showcase", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault(); // prevent default jump
              const target = document.getElementById(id);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-white hover:text-blue-500 transition"
          >
            {id === "about Me"
              ? "About Me"
              : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>

      {/* Social Buttons */}
      <SocialButtons />

      {/* Copyright */}
      <p className="text-sm text-center text-white">
        &copy; {new Date().getFullYear()} Renan Jayson Genova. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
