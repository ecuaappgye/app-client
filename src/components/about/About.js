import PrinciplesMoral from "./PrinciplesMoral";
import Footer from "../../../src/components/footer/Footer";
import { History, Mission } from "../../assets/img";
import Card from "./Card";
import More from "./More";
import React from "react";

const About = () => {
  return (
    <div>
      <Card
        orderPosicion1={
          "col-12 col-sm-12 col-md-12 col-lg-6  order-lg-2 order-md-1 order-sm-1 order-1 align-self-center p-4"
        }
        orderPosicion2={
          "col-12 col-sm-12 col-md-12 col-lg-6  order-lg-1 order-md-2 order-sm-2 order-2 align-content-center p-3"
        }
        image={Mission}
        imageDescrip={"Hola que tal como estas"}
        title={"Nuestra Misión"}
        pagra1={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus, unde officia? Itaque dolorem amet odio iste consequatur saepe. Impedit inventore tempora quisquam eius aspernatur ipsam molestias sit dolor atque! Blanditiis!"
        }
        pagra2={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, unde officia? Itaque dolorem amet odio iste consequatur saepe. Impedit inventore tempora quisquam eius aspernatur ipsam molestias sit dolor atque! Blanditiis!"
        }
      />
      <Card
        orderPosicion1={
          "col-12 col-sm-12 col-md-12 col-lg-6  order-lg-1 order-md-1 order-sm-1 order-1 align-self-center p-3"
        }
        orderPosicion2={
          "col-12 col-sm-12 col-md-12 col-lg-6 order-lg-2 order-md-2 order-sm-2 order-2 align-content-center p-4"
        }
        image={History}
        imageDescrip={"Hola que tal como estas"}
        title="Historia"
        pagra1={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus, unde officia? Itaque dolorem amet odio iste consequatur saepe. Impedit inventore tempora quisquam eius aspernatur ipsam molestias sit dolor atque! Blanditiis!"
        }
        pagra2={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, unde officia? Itaque dolorem amet odio iste consequatur saepe. Impedit inventore tempora quisquam eius aspernatur ipsam molestias sit dolor atque! Blanditiis!"
        }
      />
      <More />
      <PrinciplesMoral />
      <Footer />
    </div>
  );
};
export default About;
