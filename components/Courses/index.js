/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Courses = () => {
  return (
    <div>
      <section className="section courses" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Latest Courses</h6>
                <h2>Latest Courses</h2>
              </div>
            </div>
          </div>
          <ul className="event_filter">
            <li>
              <Link className="is_active" href="#!" data-filter="*">
                Show All
              </Link>
            </li>
            <li>
              <Link href="#!" data-filter=".design">
                Webdesign
              </Link>
            </li>
            <li>
              <Link href="#!" data-filter=".development">
                Development
              </Link>
            </li>
            <li>
              <Link href="#!" data-filter=".wordpress">
                Wordpress
              </Link>
            </li>
          </ul>
          <div className="row event_box">
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design">
              <div className="events_item">
                <div className="thumb">
                  <Link href="#">
                    <img src="assets/images/course-01.jpg" alt="" />
                  </Link>
                  <span className="category">Webdesign</span>
                  <span className="price">
                    <h6>
                      <em>$</em>160
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">Stella Blair</span>
                  <h4>Learn Web Design</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  development">
              <div className="events_item">
                <div className="thumb">
                  <Link href="#">
                    <img src="assets/images/course-02.jpg" alt="" />
                  </Link>
                  <span className="category">Development</span>
                  <span className="price">
                    <h6>
                      <em>$</em>340
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">Cindy Walker</span>
                  <h4>Web Development Tips</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design wordpress">
              <div className="events_item">
                <div className="thumb">
                  <Link href="#">
                    <img src="assets/images/course-03.jpg" alt="" />
                  </Link>
                  <span className="category">Wordpress</span>
                  <span className="price">
                    <h6>
                      <em>$</em>640
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">David Hutson</span>
                  <h4>Latest Web Trends</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development">
              <div className="events_item">
                <div className="thumb">
                  <Link href="#">
                    <img src="assets/images/course-04.jpg" alt="" />
                  </Link>
                  <span className="category">Development</span>
                  <span className="price">
                    <h6>
                      <em>$</em>450
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">Stella Blair</span>
                  <h4>Online Learning Steps</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress development">
              <div className="events_item">
                <div className="thumb">
                  <Link href="#">
                    <img src="assets/images/course-05.jpg" alt="" />
                  </Link>
                  <span className="category">Wordpress</span>
                  <span className="price">
                    <h6>
                      <em>$</em>320
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">Sophia Rose</span>
                  <h4>Be a WordPress Master</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress design">
              <div className="events_item">
                <div className="thumb">
                  <Link href="#">
                    <img src="assets/images/course-06.jpg" alt="" />
                  </Link>
                  <span className="category">Webdesign</span>
                  <span className="price">
                    <h6>
                      <em>$</em>240
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">David Hutson</span>
                  <h4>Full Stack Developer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
