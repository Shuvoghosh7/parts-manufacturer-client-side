import React from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import './AboutUs.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import teamMember1 from '../../images/team/team.jpg'

import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
const AboutUs = () => {
    const { data: teams, isLoading } = useQuery('teams', () => fetch('https://vertex-technology.onrender.com/get-team').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='my-8'>
            <Fade left>
                <div className='about_section lg:w-[600px] lg:relative lg:left-[720px] mb-7'>
                    <div>
                        <SectionTitle>About Vertex Technologies</SectionTitle>
                        <p>Vertex Technologies is a computer Hardware multinational IT company that provides computer ditterent Hardware parts and other access devices, imaging and printing products, as well as related technologies, solutions, and services.With a diverse portfolio of IT solutions and customised services across a wide spectrum of technology verticals, Compuage creates enterprise advancement opportunities for its channel partners through aggressive market development and continuous innovation. With offices and service centres pan India, we serve our growing network of 12000+ online/offline partners and system integrators- facilitating convenient business operations.</p>
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className='about_section lg:w-[600px] lg:relative lg:left-[23px] lg:top-7'>
                    <SectionTitle>Our Mission & Vision</SectionTitle>
                    <p>Our vision is to create Hardware Parts in computer and laptop as a go to destination for all construction requirement starting from Research of product & services, to making a Connect with Supplier or professionals, and enabling buyer to Shop for construction Products online.


                        Customer Service & Continuous feedback as part of our core value system, has kept us very agile and help us improve our product.Compuage’s rich and long standing legacy of 3 decades and sustained growth rate in recent years highlights the seamless adoption of our innovative business frameworks to house a range of diverse and competitive brands.
                    </p>
                </div>
            </Fade>

            <div className='mt-20 lg:mx-20 md:mx-10 '>
                <SectionTitle>OUR TEAM</SectionTitle>
                <Zoom bottom>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                        {
                            teams?.map(team =>

                                <div className='team_member mx-auto'>
                                    <div className='team_member_img ml-12'>
                                        <img src={team.picture} alt="" />
                                    </div>
                                    <div className='team_member_text'>
                                        <h3 className='member_name'>{team.personName}</h3>
                                        <p className='member-title flex justify-center'>{team.designation}</p>
                                        <p className='member_dec mx-2'>Founder and Leader at McCoy Group, has over 20+ years of experience in running business in Construction Industry with…</p>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default AboutUs;