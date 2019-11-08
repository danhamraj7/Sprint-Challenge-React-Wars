import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
	border: 2px solid black;
	width: 60%;
	margin: 5% 20%;
	background-color: lightslategray;
`;

const IntroDiv = styled.div`
	width: 60%;
	margin: 3% 20%;
	padding: 2%;
	text-align: center;
`;

const Ul = styled.ul`
	display: flex;
	justify-content: center;
	text-align: center;
	padding: 0;
	width: 100%;
	margin: 5% 0;
`;

const CharacterCard = ({
	name,
	gender,
	hair_color,
	birth_year,
	height,
	mass,
	films,
}) => {
	return (
		<CardDiv>
			<h1>{name}</h1>
			<IntroDiv>
				<div className="info">
					<b>Gender:</b>
					<span>{gender}</span>
				</div>
				<div className="info">
					<b>DOB:</b>
					<span>{birth_year}</span>
				</div>
				<div className="info">
					<b>Mass:</b>
					<span>{mass}</span>
				</div>
				<div className="info">
					<b>Height:</b>
					<span>{height}</span>
				</div>
				<div className="info">
					<b>Hair Color:</b>
					<span>{hair_color}</span>
				</div>
			</IntroDiv>
			<p>
				{" "}
				<b>Films:</b>
			</p>
			<Ul>
				{films.map((film, idx) => (
					<li key={idx}>
						<a href={film}>{idx + 1}</a>
					</li>
				))}
			</Ul>
		</CardDiv>
	);
};

export default CharacterCard;
