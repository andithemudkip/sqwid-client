import React from "react";
import styled from "styled-components";
import MetaContainer from "./MetaContainer";
import InfoContainer from "./InfoContainer";
import TransactionSection from "./TransactionSection";

const Container = styled.div`
	flex:1;
	display: flex;
	flex-direction: column;
	padding: 0.5rem 0;
	gap: 1rem;
`

const InfoContent = () => {
	return (
		<Container>
			<MetaContainer/>
			<InfoContainer/>
			<TransactionSection/>
		</Container>
	)
}

export default InfoContent
