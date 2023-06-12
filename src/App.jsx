import React from "react";
import Person1 from "./Image/Quvonchbek.jpg"
import Person2 from "./Image/Aziz.jpg"
import Person3 from "./Image/Vohid.jpg"
import Person4 from "./Image/Asad.jpg"
import Person5 from "./Image/Shohruh.jpg"
import Person6 from "./Image/Umida.jpg"
import Person7 from "./Image/Ozod.jpg"
import Logo from "./Image/Group 620.png"
import { Card } from "react-bootstrap";

function App() {
  const data = [
    {
      image: Person1,
      name: "Quvonchbek Ubaydullayev",
      link: "",
    },
    {
      image: Person2,
      name: "Aziz Islomboyev",
      link: "",
    },
    {
      image: Person3,
      name: "David Knight",
      link: "",
    },
    {
      image: Person4,
      name: "David Knight",
      link: "",
    },
    {
      image: Person5,
      name: "David Knight",
      link: "",
    },
    {
      image: Person6,
      name: "David Knight",
      link: "",
    },
    {
      image: Person7,
      name: "David Knight",
      link: "",
    }
  ]
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-6 col-sm-2">
            <img width="100%" className="mt-5 mb-5" src={Logo} alt="" />
          </div>
        </div>
        <div className="row justify-content-center">
          {data?.map((data) => {
            return (
              <div className="col-12 col-sm-3 mb-4">
                <a className="text-decoration-none" href={data?.link} onClick={(e) => {
                  if (data?.link === "") {
                    e.preventDefault()
                    alert("Mavjud emas")
                  }
                }}>
                  <Card>
                    <Card.Img variant="top" height={270} src={data?.image} />
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
