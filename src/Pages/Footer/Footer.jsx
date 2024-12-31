import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About NPetoria</h3>
                    <p className="text-sm">
                        NPetoria is your go-to platform for adopting pets, contributing to donation campaigns, and joining our mission to make the world a better place for animals.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/petlist" className="hover:underline">Pet Listing</Link>
                        </li>
                        <li>
                            <Link to="/donationcamp" className="hover:underline">Donation Campaigns</Link>
                        </li>
                        <li>
                            {/* <Link to="/contact" className="hover:underline">Contact Us</Link> */}
                        </li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm">Email: support@petoria.com</p>
                    <p className="text-sm">Phone: +1 234 567 890</p>

                    <div className="flex space-x-4 mt-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500"
                        >
                            <FaFacebook size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center border-t border-gray-700 mt-8 pt-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} NPetoria. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
