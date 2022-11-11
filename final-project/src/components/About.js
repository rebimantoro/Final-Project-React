import React, { useState } from 'react'
import { useEffect } from 'react'
import {Carousel} from 'flowbite-react';

const About = () => {
    return (
        <>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img
                src="https://img.freepik.com/free-vector/black-friday-sale-banner-with-limited-time-offer-details_1017-28051.jpg?w=2000"
                alt="..."
                />
                <img
                src="https://image.shutterstock.com/shutterstock/photos/1408869659/display_1500/stock-vector-promo-merdeka-banner-design-vector-1408869659.jpg"
                alt="..."
                />
        </Carousel>
        </div>
        <div class="containerTable">
            <div class="container mx-auto mt-10">
                <h1 class="text-xl font-bold text-center">Tentang Kami</h1>
                <h1 class="text-s text-center">CariKerja adalah sebuah portal lowongan pekerjaan berbasis digital yang dapat memberikan manfaat kepada orang banyak khususnya para pencari kerja dan penyedia lapangan pekerjaan agar dapat mencapai tujuan bersama dengan cara menghubungkan bisnis dan bakat.</h1>
                <br/><br/><h1 class="text-xl font-bold text-center">Kontak Kami</h1> 
                <h1 class="text-s text-center">+62 816-961-728
                </h1>
                <h1 class="text-s text-center">
                Jl. Godean KM. 4 No.66, Kwarasan, Nogotirto, Gamping, Sleman Regency, Special Region of Yogyakarta 55293, Indonesia
                </h1>
                <h1 class="text-s text-center">
                info@carikerja.co.id
                </h1>

            </div>
            
        </div>
        </> 
    )
}

export default About