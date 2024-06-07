import PATH from "@/constants/path";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" w-full bg-yellow-500 text-white">
      <div className="m-auto w-10/12 flex-row">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="company-description md:border-r p-3 md:my-5 w-full flex-1">
            <div className="flex flex-row justify-center">
              <a href={PATH.HOME}>
                <img
                  src="https://admin.ntb.gov.np/image-cache/nepal_tourism_board_logo-1624420115.png?p=main&s=984ce8418b32a2ceb42af3f197752603"
                  alt="footer-logo"
                  className="w-32"
                />
              </a>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              id sequi temporibus ut, nobis blanditiis voluptatibus eum nesciunt
              cupiditate possimus earum debitis cumque, dolores modi provident
              asperiores officiis. Ullam, ut. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Odio quidem et sapiente consequuntur
              iusto adipisci tenetur sint incidunt dolor. Velit odit mollitia
              obcaecati eveniet quam porro eum sunt, aut ullam.
            </p>
          </div>
          <div className="flex flex-col md:basis-2/3">
            <div className="flex flex-col md:flex-row md:w-full">
              <div className="learn-more md:p-3 my-5 w-full">
                <p className="border-b text-xl font-bold md:pl-2 mb:4">
                  Learn More
                </p>
                <ul className="md:pl-3 text-xs pt-3 md:text-sm md:font-semibold flex flex-col md:flex-row md:flex-col ">
                  <li className="p-1 whitespace-nowrap">
                    <Link to={PATH.ABOUT}>About Us</Link>
                  </li>
                  <li className="p-1 whitespace-nowrap">
                    <Link to={PATH.CONTACT}>Contact us</Link>
                  </li>
                  <li className="p-1 whitespace-nowrap">
                    <Link to={PATH.POLICY}>Privacy Policy</Link>
                  </li>
                  <li className="p-1 whitespace-nowrap">
                    <Link to={PATH.TERMS}>Terms & Conditions</Link>
                  </li>
                </ul>
              </div>

              <div className="activities md:p-3 my-5 w-full">
                <p className="border-b text-xl font-bold md:pl-2 mb:4">
                  Activities
                </p>
                <ul className="md:pl-3 text-xs pt-3 md:text-sm md:font-semibold flex flex-row md:flex-col ">
                  <li className="p-1 whitespace-nowrap">
                    <Link to={PATH.TREKKING}>Trekking</Link>
                  </li>
                  <li className="p-1 whitespace-nowrap">
                    <Link to={PATH.BUNGEE}>Bungee</Link>
                  </li>
                  <li className="p-1 whitespace-nowrap">
                    <Link to={PATH.RAFTING}>Rafting</Link>
                  </li>
                  <li className="p-1 whitespace-nowrap">
                    <Link to={PATH.PARAGLIDING}>Paragliding</Link>
                  </li>
                  <li className="p-1 whitespace-nowrap">
                    <Link to={PATH.SAFARI}>Safari</Link>
                  </li>
                </ul>
              </div>

              <div className="Contact-us md:p-3 my-5 w-full">
                <p className="border-b text-xl font-bold md:pl-2 mb:4">
                  Contact
                </p>
                <ul className="md:pl-3 text-xs pt-3 md:text-sm md:font-semibold flex flex-col sm:flex-row md:flex-col ">
                  <li className="p-1 whitespace-nowrap">
                    <i className="fas fa-envelope"></i> tour@nepal.com
                  </li>
                  <li className="p-1 whitespace-nowrap">
                    <i className="fas fa-phone"></i> +977-01-1234567
                  </li>
                  <li className="p-1 whitespace-nowrap">
                    <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-icons flex-col md:block flex md:flex-row items-center  w-full p-2 border-t ml-2">
              <h1 className="text-left md:text-center w-full font-bold text-xl">
                Payment methods accepted
              </h1>
              <div className="flex flex-row justify-left flex-wrap justify-left w-auto mr-0">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
                  <img
                    src={`https://source.unsplash.com/100x100/?card?${index}`}
                    alt="logo"
                    className="w-12 h-12 m-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="disclamer border-y my-0 md:my-4">
          <p className="text-sm text-justify py-9 text-xs ">
            <span className="font-bold ">Disclaimer:</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium quasi dicta, officia sed porro quam, odio quo natus
            laboriosam harum laudantium maiores ut error explicabo? Dolores
            dicta et ipsam numquam! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Suscipit in facere est reprehenderit beatae atque,
            rem minima qui laborum dolore nisi possimus excepturi, rerum aperiam
            et officiis a adipisci dolorem?
          </p>
        </div>
      </div>
      <p className="text-center bg-black text-xs w-full py-4">
        &copy; 2021 xyz Tours and travels. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
