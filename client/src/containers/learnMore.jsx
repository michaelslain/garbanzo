import React from 'react'
import './learnMore.scss'

import Image from '../images/learn-more.jpg'

export default function LearnMore() {
    return (
        <div className="learn-text-container">
            <h1 className="heading">Learn More</h1>
            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                non perspiciatis, repudiandae atque dolor modi animi architecto
                quidem voluptates asperiores. Sapiente voluptatem, architecto
                consequuntur quis voluptas facere id, odit similique, corrupti
                exercitationem explicabo vitae soluta! Facilis aliquid enim
                harum fugiat!
            </p>
            <img src={Image} alt="Bean Farm" className="image" />
            <p className="caption">Our local and well maintained bean farms</p>
            <p className="text">
                eum sapiente reiciendis! Voluptas, ut. Voluptate distinctio
                repellendus laborum, culpa aliquam doloribus eum ducimus
                cupiditate sint quod iste, vitae alias nisi recusandae dolorem
                magni modi, laboriosam quam sed nostrum possimus. Voluptates,
                porro veritatis! Fugiat sapiente, facere est dolor qui laborum
                omnis non quidem corporis voluptas pariatur natus molestiae
                inventore harum, voluptatibus iure ex maxime! Eius nulla optio
                doloribus. Ipsam, saepe quidem?
            </p>
        </div>
    )
}
