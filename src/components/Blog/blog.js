import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <div className="about-container">
        <span className="text-animate-hover_aboutme blog">M</span>
        <span className="text-animate-hover_aboutme blog">y</span>
        <span className="space"></span>

        <span className="text-animate-hover_aboutme blog">B</span>
        <span className="text-animate-hover_aboutme blog">l</span>
        <span className="text-animate-hover_aboutme blog">o</span>
        <span className="text-animate-hover_aboutme blog">g</span>
        <span className="text-animate-hover_aboutme blog">s</span>

        <section className="cards">
          <article className="card card1">
            <div className="card-info-hover">
              <div className="card-clock-info">
                <svg className="card-clock" viewBox="0 0 24 24">
                  <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                </svg>
                <span className="card-time">4 min</span>
              </div>
            </div>
            <div className="card-img"></div>
            <a
              href="https://joshi-prinsa1234.medium.com/their-adversity-tale-dd9d1ee5c59f"
              className="card-link"
            >
              <div className="card-img-hover"></div>
            </a>
            <div className="card-info">
              <span className="card-category"> BTS</span>
              <h3 className="card-title">Their adversity tale</h3>
              <span className="card-by">
                a{" "}
                <a href="#" className="card-author" title="author">
                  Story
                </a>
              </span>
            </div>
          </article>

          <article className="card card2">
            <div className="card-info-hover">
              <div className="card-clock-info">
                <svg className="card-clock" viewBox="0 0 24 24">
                  <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                </svg>
                <span className="card-time">2 min</span>
              </div>
            </div>
            <div className="card-img"></div>
            <a
              href="https://joshi-prinsa1234.medium.com/pohar-saal-2070bf0cbcbc"
              className="card-link"
            >
              <div className="card-img-hover"></div>
            </a>
            <div className="card-info">
              <span className="card-category"> Music</span>
              <h3 className="card-title">Pohar Saal</h3>
              <span className="card-by">
                by{" "}
                <a href="#" className="card-author" title="author">
                  Aruna Lama
                </a>
              </span>
            </div>
          </article>

          <article className="card card3">
            <div className="card-info-hover">
              <div className="card-clock-info">
                <svg className="card-clock" viewBox="0 0 24 24">
                  <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                </svg>
                <span className="card-time">2 min</span>
              </div>
            </div>
            <div className="card-img"></div>
            <a
              href="https://joshi-prinsa1234.medium.com/persona-d3d521ae7f90"
              className="card-link"
            >
              <div className="card-img-hover"></div>
            </a>
            <div className="card-info">
              <span className="card-category"> introspective piece</span>
              <h3 className="card-title">Persona</h3>
              <span className="card-by">
                a{" "}
                <a href="#" className="card-author" title="author">
                  self-reflection
                </a>
              </span>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Blog;
