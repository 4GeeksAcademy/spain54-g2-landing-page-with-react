import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const Cards = [
    {
      titulo: "Card title 1",
      imagen: "rigo-baby.jpg",
      description: "Description for card 1.",
      button: "Find out more 1!",
    },
    {
      titulo: "Card title 2",
      imagen: "rigo-baby.jpg",
      description: "Description for card 2.",
      button: "Find out more 2!",
    },
    {
      titulo: "Card title 3",
      imagen: "rigo-baby.jpg",
      description: "Description for card 3.",
      button: "Find out more 3!",
    },
    {
      titulo: "Card title 4",
      imagen: "rigo-baby.jpg",
      description: "Description for card 4.",
      button: "Find out more 4!",
    },
  ];
	


	return (
		<>
			<Navbar />
			<div className="container">
            	<div className="row mb-5">
					<Jumbotron />
					 {Cards.map(item =>
						<Card valores={[item]} />)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
