import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/logo-v5.webp";

const Footer = () => {
  return (
    <footer>
            <div className="border-t border-zinc-950/20 bg-zinc-950/2 px-3 pt-10 pb-5 flex items-center justify-between mt-10">
                <div className="sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[50%] mx-auto">
                    <div className="grid grid-cols-2 gap-6 justify-between">
                        {/* Logo + Description + Réseaux */}
                        <div className="flex flex-col gap-4">
                            <Link to="/" className="flex items-center gap-2">
                                      <div className="flex items-center gap-2">
                                        <span className="">
                                        <img src={Logo} alt="" width={45} /></span>
                                        <div className="font-black text-[20px]">
                                          <span>BuyMeA</span>
                                          <span className="text-yellow-500">Coffee</span>
                                        </div>
                                      </div>
                                    </Link>

                            <p className="text-sm text-zinc-600 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto. Dolorum exercitationem temporibus autem cumque?</p>

                            <ul className="flex items-center gap-4 mt-2">
                                <li>
                                    <a to="/" className="hover:text-yellow-600 transition">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </li>
                                <li>
                                    <a to="mailto:julesmukadi.dev@gmail.com" className="hover:text-yellow-600 transition">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </li>
                                <li>
                                    <a to="/" className="hover:text-yellow-600 transition">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-6 text-sm">
                            <div className="flex flex-col gap-2">
                                <h3 className="capitalize text-lg font-medium">resources</h3>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link to="/about" className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog" className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/dev" className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">Developers</Link>
                                    </li>
                                    <li>
                                        <Link to="/team" className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">Team</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="capitalize font-medium text-lg">company</h3>
                                <ul className="flex flex-col gap-2">
                                    {/* <li>
                                        <Link to="/support" className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">contacter support</Link>
                                    </li> */}
                                    <li>
                                        <Link to="/help" className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">help</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy" className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/terms" className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">Terms of Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/license" className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">license</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-10 text-sm border-t border-zinc-950/5 pt-4">
                        <div className="">
                            <span>&copy; 2025 BuyMeACoffee-Africa. All rights reserved.</span>
                        </div>
                        <div className="flex gap-1 justify-end items-center">
                            <span className="capitalize">by</span>
                            <Link to="/contributors" className="flex items-center gap-1 hover:text-yellow-500 transition duration-300 underline underline-offset-2">
                                <span className="uppercase font-bold">contributors</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer;
