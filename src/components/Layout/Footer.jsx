import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="flex justify-center  dark:text-white py-20 border-t dark:border-border-1">
                <div className="w-primary px-5 flex flex-wrap lg:flex-nowrap gap-10 justify-between lg:gap-20">
                    <div className="space-y-5 col-span-12 lg:col-span-4 lg:w-4/12">
                        <Link   
                            to={'/'}
                            className="flex items-center dark:text-white text-black gap-3  text-3xl font-medium"
                        >   
                            <svg xmlns="http://www.w3.org/2000/svg" width={40} version="1.2" viewBox="0 0 1326 1326">
                                <path className="fill-current dark:fill-white fill-black" d="m971.5 128c12.9 4.5 25.5 9.3 37.7 14.7q109.6 48.7 168.1 139.7c7.4 11.5 13.8 23.5 19.8 35.8v-190.2zm-687.7 0v1069.1h-155.8v-1069.1zm709.9 729.5l203.4 290.5v-470.3c-7.1 14.4-14.9 28.4-23.9 41.7q-62.5 92.6-179.5 138.1zm-42.2-190.9q71.4-59.3 71.5-168.1c0-72.6-23.9-128.4-71.5-167.4q-71.5-58.5-209.6-58.5h-246.9v453.3h246.9c92 0 161.9-19.7 209.6-59.3zm-199.9 233.1h-256.6v297.4h509.1l-208.6-299q-14.6 1.7-43.9 1.6z" />
                            </svg>
                            Razels
                        </Link>
                        <p>
                            Razels Des is a crowdfunding platform that connects creators with supporters to bring innovative projects to life. Join us to discover and fund new ideas!
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <SocialIcon link={'https://github.com/Stackmastery'}>
                                <FaGithub />
                            </SocialIcon>
                            <SocialIcon link={'https://www.facebook.com/stackmastery'}>
                                <FaFacebook />
                            </SocialIcon>
                            <SocialIcon link={'https://www.youtube.com/@ProgrammingHeroCommunity'}>
                                <FaYoutube />
                            </SocialIcon>
                        </div>
                    </div>
                    <div className="flex flex-col spae-y-5 lg:w-3/12">
                        <h2 className="text-xl font-semibold">Resources</h2>
                        <ul className="space-y-3 !-ml-10 !list-none pt-5">
                            <li>
                                <Link to={'/campaigns'} className="hover:underline">
                                    All Campaigns
                                </Link>
                            </li>
                            <li>
                                <Link to={'/mycampaign'} className="hover:underline">
                                My Campaign
                                </Link>
                            </li>
                            <li>
                                <Link to={'/mydonations'} className="hover:underline">
                                    Donations
                                </Link>
                            </li>
                            <li>
                                <Link to={'/addcampaign'} className="hover:underline">
                                    Add Campaign
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col spae-y-5 w-full md:w-1/12 lg:w-3/12">
                        <h2 className="text-xl font-semibold">Auth</h2>
                        <ul className="space-y-3 !-ml-10 !list-none pt-5">
                            <li>
                                <Link to={'../auth/login'} className="hover:underline">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to={'../auth/register'} className="hover:underline">
                                Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col spae-y-5 lg:w-4/12 ">
                        <h2 className="text-xl font-semibold">Get in Touch with Us</h2>
                        <ul className="space-y-3 !-ml-10 !list-none pt-5 !lowercase">
                            <li>
                                832 Thompson Drive, San Fransisco CA 94107, United States
                            </li>
                            <li>
                                394-091-3312
                            </li>
                            <li>
                                support@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <section className="border-t dark:border-border-1 py-5 text-center">
                Copyright &copy; {new Date().getFullYear()} All Right Reserve <a className="font-semibold" href="https://github.com/Stackmastery">StackMastery</a>
            </section>
        </>
    );
}

export default Footer;

const SocialIcon = ({ link, children }) => (
    <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2 text-xl border dark:border-border-1 dark:bg-slate-800 dark:hover:bg-slate-600 hover:bg-neutral-200 transition-all rounded-full"
    >
        {children}
    </a>
);
