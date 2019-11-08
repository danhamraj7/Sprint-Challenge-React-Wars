import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "./App.css";
import CharacterCard from "./components/characterCard";

const PaginationDiv = styled.div`
	width: 100%;
	text-align: center;
	font-size: 2em;
	color: black;
	text-decoration: none;
`;

const PaginationBtn = styled.button`
  background-color: tomato;
  padding: 2%;
  border: 1px black solid;
  border-radius: 5px;
  margin: 0 1%;
  width: 120px;
  font-size: 0.5em;
  transition: 0.3s ease-in-out;
  :hover:background-color: lightblue;
 `;

const App = () => {
	// Try to think through what state you'll need for this app before starting.
	//Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember,
	//anytime you have a
	// side effect in a component, you want to think about which state
	//and/or props it should
	// sync up with, if any.

	const [characters, setCharacters] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const getCharacters = () => {
			axios

				.get(`https://swapi.co/api/people/?page=${page}`)

				.then(res => res.data)

				.then(data => setCharacters(data.results))

				.catch(error => console.log("somthing went wrong"));
		};

		getCharacters();
	}, [page]);

	useEffect(() => {
		console.log(characters);
	}, [characters]);

	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>

			<PaginationDiv>
				{page > 1 ? (
					<PaginationBtn onClick={e => setPage(prevPage => prevPage - 1)}>
						previous &laquo;
					</PaginationBtn>
				) : null}

				{page < 10 ? (
					<PaginationBtn onClick={e => setPage(prevPage => prevPage + 1)}>
						&raquo; next
					</PaginationBtn>
				) : null}
			</PaginationDiv>

			<div className="card-container">
				{characters.map((character, idx) => (
					<CharacterCard
						key={idx}
						name={character.name}
						birth_year={character.birth_year}
						films={character.films}
						height={character.height}
						mass={character.mass}
						hair_color={character.hair_color}
						gender={character.gender}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
