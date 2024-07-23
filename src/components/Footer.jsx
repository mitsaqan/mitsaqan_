import { emailLinks, instagramLinks, linkedInLinks } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 border-t py-10 border-neutral-700 ">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-md font-semibold mb-4"> Email</h3>
            <ul>
              {emailLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-300 hover:text-white"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4"> Instagram</h3>
            <ul>
              {instagramLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-300 hover:text-white"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4"> LinkedIn</h3>
            <ul>
              {linkedInLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-300 hover:text-white"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
