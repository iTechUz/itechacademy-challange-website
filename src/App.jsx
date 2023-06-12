import React, { useState } from "react";
import Person1 from "./Image/Aziz.jpg"
import Person2 from "./Image/Asad.jpg"
import Person3 from "./Image/Shohruh.jpg"
import Person4 from "./Image/Quvonchbek.jpg"
import Person5 from "./Image/Umida.jpg"
import Person6 from "./Image/Vohid.jpg"
import Logo from "./Image/Group 620.png"
import { Card } from "react-bootstrap";

function App() {
  const data = [
    {
      image: Person1,
      name: "Azizbek Islomboyev",
      link: "https://bruno-figma.vercel.app/",
    },
    {
      image: Person2,
      name: "Asadbek Jamoliddinov",
      link: "",
    },
    {
      image: Person3,
      name: "Shohruh Abdumannopov",
      link: "",
    },
    {
      image: Person4,
      name: "Quvonchbek Ubaydullayev",
      link: "",
    },
    {
      image: Person5,
      name: "Umida Muminova",
      link: "",
    },
    {
      image: Person6,
      name: "Vohidjon Usmonov",
      link: "",
    }
  ]
  const [Hr, setHr] = useState()
  const [Mn, setMn] = useState()
  const [Sc, setSc] = useState()
  setInterval(() => {
    if (new Date().getHours() < 10) {
      setHr(`0${new Date().getHours()}`)
    } else {
      setHr(new Date().getHours())
    }
    if (new Date().getMinutes() < 10) {
      setMn(`0${new Date().getMinutes()}`)
    } else {
      setMn(new Date().getMinutes())
    }
    if (new Date().getSeconds() < 10) {
      setSc(`0${new Date().getSeconds()}`)
    } else {
      setSc(new Date().getSeconds())
    }
  }, 1000)
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-7 col-sm-3 text-center">
            <img width="80%" className="mt-4 mb-3" src={Logo} alt="" />
          </div>
          <div className="col-12 col-sm-12 mb-5">
            <h1 className="date">{Hr}:{Mn}:{Sc}</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {data?.map((data) => {
            return (
              <div className="col-12 col-sm-4 mb-4">
                <a className="text-decoration-none" href={data?.link} onClick={(e) => {
                  if (data?.link === "") {
                    e.preventDefault()
                    alert("Mavjud emas")
                  }
                }}>
                  <Card>
                    <img className="card-img" src={data?.image} alt="" />
                    <Card.Body>
                      <Card.Title className="person-name">{data?.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <div className="bottom-card">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">Dasturlashni tashlamasang o'rganasan</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
