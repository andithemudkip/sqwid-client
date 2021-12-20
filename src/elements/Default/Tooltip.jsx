import React from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
	display: flex;
	font-weight: 900;
	font-size: 1.25rem;
	gap: 0.5rem;
	align-items:center;
	& .icon{
		display: grid;
		place-items:center;
		position: relative;
		z-index: 2;
		height: 1.25rem;
		width: 1.25rem;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style='fill: rgba(187, 187, 195, 1);transform: ;msFilter:;'%3E%3Cpath d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 16h-2v-2h2v2zm.976-4.885c-.196.158-.385.309-.535.459-.408.407-.44.777-.441.793v.133h-2v-.167c0-.118.029-1.177 1.026-2.174.195-.195.437-.393.691-.599.734-.595 1.216-1.029 1.216-1.627a1.934 1.934 0 0 0-3.867.001h-2C8.066 7.765 9.831 6 12 6s3.934 1.765 3.934 3.934c0 1.597-1.179 2.55-1.958 3.181z'%3E%3C/path%3E%3C/svg%3E");
		cursor: pointer;
		&:hover{
			.content{
				transform: scale(1);
				opacity: 1;
			}
		}
		.content{
			display: grid;
			gap: 0.75rem;
			font-weight: 900;
			font-size: 1rem;
			background: var(--tooltip-background);
			border: 0.2rem solid var(--app-theme-primary);
			box-shadow: var(--tooltip-shadow);
			padding: 1.25rem;
			border-radius: 0.5rem;
			position:absolute;
			left: 1.75rem;
			width: max-content;
			max-width: 20rem;
    		white-space: break-spaces;
			transform: scale(0);
			opacity: 0;
			transform-origin: center left;
			transition: all 0.25s cubic-bezier(0.86,-0.34, 0.04, 0.98);
			p{
				margin: 0;
			}
		}
	}
`

const Tooltip = ({ children }) => {
	return (
		<TooltipContainer>
			<div className="icon">
				<div className="content">
					{children}
				</div>
			</div>
		</TooltipContainer>
	)
}

export default Tooltip
