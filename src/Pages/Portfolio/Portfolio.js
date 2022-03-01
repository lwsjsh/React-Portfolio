import React from "react";
import Project from "../../components/Project/Project";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      img: "https://ak.picdn.net/shutterstock/videos/16145977/thumb/1.jpg",
      title: "Amazon Clone",
      subject: "LAMP Stack",
      link: "https://github.com/",
    },
    {
      img: "http://s3-us-west-1.amazonaws.com/stanford.ucomm.newsms.media/wp-content/uploads/2016/04/08170610/15811-write_teaser.jpg",
      title: "Airbnb Clone",
      subject: "MERN Stack",
      link: "https://google.com/",
    },
    {
      img: "https://media.istockphoto.com/photos/moving-through-data-center-with-server-racks-led-lights-picture-id1291738978?b=1&k=20&m=1291738978&s=170667a&w=0&h=NW2X33cqolY-rgnVdh9znSnoUfuiBaQBVNjbOSuuZQ8=",
      title: "Hulu Clone",
      subject: "MERN Stack",
      link: "https://github.com/",
    },
    {
      img: "https://c4.wallpaperflare.com/wallpaper/246/462/453/laptop-macbook-iphone-apple-wallpaper-preview.jpg",
      title: "Whatsapp Clone",
      subject: "MEAN Stack",
      link: "https://github.com/",
    },
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio__container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
