import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import { useRef } from "react";

const Hero = () => {



    return (
        <>
            <section className="flex justify-center">
                <div className="w-primary px-5 bg-pattern pt-60 flex justify-center flex-col">
                    <div className="w-full text-center space-y-3 " data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <h2 className="text-4xl md:text-6xl font-semibold bg-gradient-to-br from-sky-600 to-sky-900 bg-clip-text text-transparent  dark:!from-white ">
                            Raise Hand to Promote
                            <br className="hidden md:block" />
                            Best Products
                        </h2>
                        <p>Launch your ideas with our crowdfunding platform! Connect with supporters and turn your vision<br className="hidden md:block"/> into reality. Start your campaign today!</p>
                    </div>
                </div>
            </section>
            <section className="flex justify-center bg-pattern pt-10 pb-32">
                <div className="flex justify-center px-5 z-10 overflow-hidden h-[500px] w-full heroSlider">
                    <Swiper
                        className="swiperWidth"
                        data-aos="fade-up"
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay]}
                        speed={1000}
                        slidesPerView={1}
                        breakpoints={{
                            780:{
                                slidesPerView: 2,
                            },
                        }}
                        centeredSlides={true}
                    >
                        {
                            SliderData && SliderData.map((slide, index) => (
                                <SwiperSlide key={index} style={{backgroundImage: `url('${slide?.image}')`}} className="overflow-y-hidden group bg-cover flex flex-col bg-no-repeat group border-2 dark:border-border-1 border-border-2 backdrop-blur rounded-3xl 2xl:rounded-[30px]">
                                    <div className="flex flex-col justify-end w-full h-full p-5 rounded-4xl">
                                        <Link to={`${slide?.category}`} className="z-30 backdrop-blur-2xl hidden group-hover:flex flex-col animate__animated animate__fadeIn  p-8 border border-border-1 bg-[#0000003f] rounded-2xl space-y-3">
                                            <h2 className="text-white text-3xl font-semibold">{slide?.title}</h2>
                                            <p className=" text-white">{slide?.des}</p>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Hero

const SliderData = [
    {
        image: 'https://res.cloudinary.com/dogyg2j0h/image/upload/v1733332881/green_slkrdu.webp',
        title: 'Support Green Energy Innovations',
        des: 'Help fund the development of sustainable green energy solutions. Our platform connects innovative ideas with passionate backers to create a cleaner future.',
        category: 'greenenergy'
    },
    {
        image: 'https://res.cloudinary.com/dogyg2j0h/image/upload/v1733333191/2147650834_uflc5b.webp',
        title: 'Empower Small Businesses: Crowdfunding Support',
        des: 'Support local entrepreneurs in growing their businesses. We provide the tools and guidance to help small businesses reach their goals and thrive.',
        category: 'smallbusiness'
    },
    {
        image: 'https://res.cloudinary.com/dogyg2j0h/image/upload/v1733333191/doctor-holding-stethoscope-red-heart-hands_28586-250_jycbj6.webp',
        title: 'Revolutionize Healthcare with Your Ideas',
        des: 'Innovative health solutions deserve attention. Join us in funding cutting-edge healthcare technologies that can save lives and improve medical outcomes.',
        category: 'healthtech'
    },
    {
        image: 'https://res.cloudinary.com/dogyg2j0h/image/upload/v1733333442/abstract-colorful-splash-3d-background-generative-ai-background_60438-2509_coesig.webp',
        title: 'Fund Your Artistic Dreams: Crowdfunding for Creators',
        des: 'Artists, this is your chance to bring your vision to life! Crowdfund your creative projects and get the support you need to produce your work.',
        category: 'creativeprojects'
    },
    {
        image: 'https://res.cloudinary.com/dogyg2j0h/image/upload/v1733330657/2614_xrlfmq.webp',
        title: 'Tech Innovations for Tomorrow',
        des: 'Join the movement to fund groundbreaking tech projects that will shape the future. Help bring visionary tech ideas from concept to reality.',
        category: 'techinnovations'
    },
];
