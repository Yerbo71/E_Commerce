import React from 'react';

import iphone from "./../assets/Apple.jpg";
import xiaomi from "./../assets/Xiaomi-14.webp";
import samsung from "./../assets/galaxy-s24.jpg";
import mac from "./../assets/mac-m3.jpg";
import lenovo from "./../assets/lenovo.jpg";
import asus from "./../assets/Zenbook.jpg";

const data = [
  {
    title: 'Iphone 15 pro',
    text: 'A17 Pro chip with 6-core GPU · Pro camera system. Our most advanced 48MP Main camera 3x or 5x Telephoto camera.',
    img: iphone,
  },
  {
    title: 'Xiaomi 14',
    text: 'Snapdragon®8 gen 3. 4 nm new architecture 1+5+2 they take the performance of Xiaomi 14 to a new level.',
    img: xiaomi,
  },
  {
    title: 'Samsung S24 Ultra',
    text: 'Now with AI, the Galaxy S24 Ultra with its innovative 200 MP camera and built-in AI sets a new standard for shooting quality.',
    img: samsung,
  },
  {
    title: 'MacBookAir M3',
    text: "Apple's most powerful processors and are often used by intense power users like animators, artists, statisticians, and video editors.",
    img: mac,
  },
  {
    title: 'Lenovo ThinkPad',
    text: 'Superb, sturdy design with elegant features.Bright, colorful 2.2K touch screen.Comfortable keyboard and touchpad.Robust port selection.',
    img: lenovo,
  },
  {
    title: 'Asus Zenbook',
    text: 'ZenBooks with brushed aluminium chassis. A pattern of "zen philosophy"  when creating the laptops.',
    img: asus,
  },
];

function CardHolder() {
  return (
    <div style={{
      width: "60%",
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    }}>
      {data.map((item, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img className="card-img-top" style={{ width: "100%", height: "180px" }} src={item.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.text}</p>
            <a href="#" className="btn btn-primary">Add to card</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardHolder;
