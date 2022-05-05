import React, { Suspense } from "react";
import styled from "styled-components";
import CardSectionContainer from "@elements/Default/CardSectionContainer";
import { NavLink } from "react-router-dom";
import ChevronRight from "@static/svg/ChevronRight";
const LoanCard = React.lazy(() =>
	import("@elements/Explore/Cards/Loan/LoanCard")
);

const Container = styled.div`
	width: 100%;
`;

const Header = styled.h1`
	font-weight: 900;
`;

const HeaderSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding-right: 2rem;
`;

const StyledNavLink = styled(NavLink)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: var(--app-container-text-primary-hover);
	font-size: 1rem;
	font-weight: 800;
	transition: color 0.2s ease;
	&:hover {
		color: var(--app-text);
	}
`;

const LoansSection = ({ items }) => {
	return (
		<Container>
			<HeaderSection>
				<Header>Loans</Header>
				<StyledNavLink to="/explore/loans">
					View All <ChevronRight />
				</StyledNavLink>
			</HeaderSection>
			<CardSectionContainer>
				<Suspense>
					{items.map((item, index) => (
						<LoanCard key={index} data={item} />
					))}
				</Suspense>
			</CardSectionContainer>
		</Container>
	);
};

export default LoansSection;
