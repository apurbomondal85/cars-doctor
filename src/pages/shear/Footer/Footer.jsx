import { Footer } from "flowbite-react"
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo from '../../../assets/logo.svg'


function Footers() {
    return (
        <Footer container={true} className="bg-slate-950 text-white py-20">
            <div className="w-full px-20">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="w-1/3 space-y-4">
                        <img src={logo} className="h-16" alt="cars logo" />
                        <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                        <div className="flex space-x-4 items-center">
                            <Footer.Icon
                                href="#"
                                icon={FaGoogle}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaInstagram}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaTwitter}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaLinkedin}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title className="text-white" title="about" />
                            <Footer.LinkGroup className="text-slate-200" col={true}>
                                <Footer.Link href="#">
                                    Home
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Services
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Contact
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className="text-white" title="Company" />
                            <Footer.LinkGroup className="text-slate-200" col={true}>
                                <Footer.Link href="#">
                                    Why Car Doctor
                                </Footer.Link>
                                <Footer.Link href="#">
                                    About
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className="text-white" title="Support" />
                            <Footer.LinkGroup className="text-slate-200" col={true}>
                                <Footer.Link href="#">
                                    Support Center
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Feedback
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Accesbility
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full text-center">
                    <Footer.Copyright
                        href="#"
                        by="Apurbo Mondal"
                        year={2023}
                    />
                </div>
            </div>
        </Footer>
    )
}

export default Footers
