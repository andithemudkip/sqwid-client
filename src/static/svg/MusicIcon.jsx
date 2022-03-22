import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
	background: transparent;
	fill: currentColor;
`;

const MusicIcon = () => {
	return (
		<SVG
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 100 100"
		>
			<path d="M6 18.573c2.206 0 4-1.794 4-4V4.428L19 7.7v7.43a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7a.998.998 0 0 0-.658-.939l-11-4A.999.999 0 0 0 8 3v8.13a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4z"></path>
		</SVG>
	);
};

export default MusicIcon;
