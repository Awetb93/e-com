import React, { useState } from "react";
import history from "../../history";
import { Button } from "@material-ui/core";
import bed from "../img/bedhero.webp";
import chair from "../img/hero7.webp";
import table from "../img/tablehero.webp";
import light from "../img/lighthero.webp";
import art from "../img/carpenter.png";
import sustain from "../img/sustainability.png";
import service from "../img/service.png";
import { useParams } from "react-router-dom";
export default function Hero() {
  const { id } = useParams();
  const [hero, setHero] = useState({
    hero: "hero1",
    button: "button1",
  });
  const [button, setButton] = useState("");
  return (
    <>
      <div className="continer">
        <div className={hero.hero}>
          <div className="hero-content">
            <h4>Lorem, ipsum dolor.</h4>
            <h1>Lorem ipsum </h1>
            <h2>Save Now 20%</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur dsf sdsa adipisicing elit.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button>ShopNow</Button>
          </div>
          <div className="toggle">
            <button
              onClick={() => {
                setHero({ hero: "hero1", button: "button1" });
                setButton("");
              }}
              className={hero.button}
            ></button>
            <button
              onClick={() => {
                setHero({ hero: "hero2", button: "" });
                setButton("button1");
              }}
              className={button}
            ></button>
          </div>
        </div>
      </div>
      <div className="section1">
        <div
          onClick={() => history.push(`/chairs/${id}`)}
          className="section1-content"
        >
          <img
            src={chair}
            style={{ width: "200px", height: "150px" }}
            alt="chairs"
          />
          Chairs
        </div>
        <div
          onClick={() => history.push(`/beds/${id}`)}
          className="section1-content"
        >
          <img
            src={bed}
            style={{ width: "200px", height: "150px" }}
            alt="beds"
          />
          Beds
        </div>
        <div
          className="section1-content"
          onClick={() => history.push(`/tables/${id}`)}
        >
          <img
            src={table}
            style={{ width: "200px", height: "150px" }}
            alt="tables"
          />
          Tables
        </div>
        <div
          className="section1-content"
          onClick={() => history.push(`/lightening/${id}`)}
        >
          <img
            src={light}
            style={{ width: "200px", height: "150px" }}
            alt="light"
          />
          Lighting
        </div>
      </div>
      <div className="section2">
        <div className="team"></div>
        <div className="team-content">
          <h2>Our Team of best Designers</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            pariatur animi nostrum ut aut earum mollitia error exercitationem
            minima officia!
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
      <div className="section3">
        <h3 style={{ textAlign: "center" }}>Our Store</h3>
        <div className="section3-container">
          <div className="section3-items" style={{ marginLeft: "20px" }}>
            <img src={art} alt="art" />
            <h4>Artistic designe</h4>
            <p>Lorem, ipsum dolor sit amet consectetur Repellat, earum!</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="section3-items">
            <img src={sustain} alt="sustain" />
            <h4>sustainability</h4>
            <p>Lorem, ipsum dolor sit amet consectetur Repellat, earum!</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="section3-items">
            <img src={service} alt="service" />
            <h4>Personal Service</h4>
            <p>Lorem, ipsum dolor sit amet Repellat, earum!</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <hr style={{ width: "90%" }} />
      </div>
    </>
  );
}
