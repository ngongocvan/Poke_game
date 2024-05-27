import React from 'react'

export default function Slide() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Hiển thị nút điều hướng
    };

    return (
        <div>
            <h2>Content Slide</h2>
            <Slider {...settings}>
                <div>
                    <h3>Slide 1</h3>
                    <p>Content for slide 1</p>
                </div>
                <div>
                    <h3>Slide 2</h3>
                    <p>Content for slide 2</p>
                </div>
                <div>
                    <h3>Slide 3</h3>
                    <p>Content for slide 3</p>
                </div>
                <div>
                    <h3>Slide 4</h3>
                    <p>Content for slide 4</p>
                </div>
            </Slider>
        </div>
    );
};
