import React,{useState,useEffect, Fragment} from 'react'
import {Helmet} from 'react-helmet'
import axios from 'axios'
import House from '../assets/images/k.jpg'

const About = () => {
    const [topSeller, setTopSeller] = useState([]);
    const [realtors, setRealtors] = useState([]);

    useEffect(()=>{
        axios.defaults.headers={
            "Content-Type": "applcation/json"
        };

        const getTopSeller = async () =>{
            try {
                const res = await axios.get('http://localhost:8000/api/realtors/topseller');
                setTopSeller(res.data);
            }
            catch(err){

            }
        };
        getTopSeller();
    },[]);

    useEffect(()=>{
        axios.defaults.headers={
            "Content-Type": "applcation/json"
        };
        const getRealtors = async () =>{
            try {
                const res = await axios.get('http://localhost:8000/api/realtors/');
                setRealtors(res.data);
            }
            catch(err){

            }
        };
        getRealtors();
    },[]);

    const getAllRealtors = () => {
        let allRealtors = [];
        let results = [];
        realtors.map(realtor=>{
            return allRealtors.push(
                <Fragment key = {realtor.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='about__realtor'>{realtor.name}</h3>
                    <p className='about__contact'>{realtor.phone}</p>
                    <p className='about__contact'>{realtor.email}</p>
                    <p className='about__about'>{realtor.description}</p>
                </Fragment>
            );
        });
        for ( let i = 0; i< realtors.length; i+= 3){
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allRealtors[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+1] ? allRealtors[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+2] ? allRealtors[i+2] : null}
                    </div>
                </div>
            )
        }

        return results;
    }

    const getTopSeller = () => {
        let result = [];
        topSeller.map(seller=>{
            return result.push(
                <Fragment key={seller.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={seller.photo} alt='' />
                    </div>
                    <h3 className='about__topseller'>Top Seller : </h3>
                    <p className='about__realtor'>{seller.name}</p>
                    <p className='about__contact'>{seller.phone}</p>
                    <p className='about__contact'>{seller.email}</p>
                    <p className='about__about'>{seller.description}</p>
                </Fragment>
            );
        });
        return result;
    }
    return (
        <main className='about'>
            <Helmet>
                <title>Realest Estate - About</title>
                <meta 
                    name='description'
                    content = 'About us'
                />
            </Helmet>
            <header className='about__header'>
                <h1 className='about__heading'>About Realest Estate</h1>
            </header>
            <section className='about__info'>
                <div className='row'>
                    <div className='col-3-of-4'>
                        <h2>We find the perfect home for you</h2>
                        <p className='about__paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper dui nec eros efficitur, quis fringilla dolor ornare.
                        Cras pellentesque leo tellus, vitae consequat magna accumsan non. Nunc nulla turpis, suscipit vitae tortor sed, viverra tincidunt libero. 
                        Duis gravida lectus libero, vel pulvinar orci cursus non. Vivamus vel rhoncus lectus. Mauris in purus leo. 
                        Sed quis ipsum eu ex molestie vestibulum. Sed non dapibus ex. Ut velit massa, luctus nec ultricies at, fringilla nec risus. 
                        Nulla a est et elit lobortis faucibus. Curabitur vitae velit sit amet metus ultrices facilisis accumsan vel dui. Quisque neque sapien, 
                        sollicitudin sit amet nisi pellentesque, aliquam lobortis nibh. Quisque imperdiet eleifend dictum. Pellentesque rutrum porta libero, 
                        sit amet porta erat elementum et. Fusce porta ex ut sapien tincidunt elementum.
                        </p>
                        <div className='about__display'>
                            <img className='about__display__image' src = {House} alt='' />
                        </div>
                        <p className='about__paragraph'>
                        Proin vel ipsum dignissim justo tempor consequat sit amet eget lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce mauris tellus, euismod ut leo in, fermentum dignissim ipsum. Vivamus aliquam magna erat, ac bibendum sem cursus eu. Aliquam 
                        a tincidunt eros. Duis vestibulum metus arcu, eu pellentesque urna sodales eu. Proin vitae suscipit orci, nec varius arcu. Duis volutpat, 
                        arcu a iaculis pulvinar, dolor ex pellentesque enim, a mollis elit enim non nibh. Morbi laoreet in mi in congue. Vestibulum et tempor sapien.
                        </p>
                    </div>
                    <div className='col-1-of-4'>
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className='about__team'>
                <div className='row'>
                    <h2 className='about__subheading'>Meet out awesome team!</h2>
                </div>
                {getAllRealtors()} 
            </section>
        </main>
    )
}

export default About;
