import React from "react";
import styled from "styled-components";
import CardInfo from "./CardInfo";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Link } from "react-router-dom";
import CardMedia from "@elements/Explore/Cards/Sales/CardMedia";

const Wrapper = styled(m(Link))`
	display: grid;
	grid-template-rows: 2fr 1fr;
	border: 2px solid var(--app-container-bg-primary);
	border-radius: 0.375rem;
	/* overflow:hidden; */
	min-width: 16rem;
	aspect-ratio: calc(2/3);
	cursor: pointer;
	user-select: none;
	text-decoration: none;
	color: var(--app-text);
`

const SalesCard = ({ data }) => {
	return (
		<LazyMotion features={domAnimation}>
			<Wrapper
				whileTap={{
					x: 0,
					y: 0,
					scale: 0.99
				}}
				to={`/collectible/${data.positionId}`}
			>
				<CardMedia meta={data.meta} />
				<CardInfo data={data} />
			</Wrapper>
		</LazyMotion>
	)
}

export default SalesCard
