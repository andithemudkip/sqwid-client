import CollectibleContext from "@contexts/Collectible/CollectibleContext";
import InfoContent from "@elements/Collectible/InfoContent";
import NFTContent from "@elements/Collectible/NFTContent";
import LoadingIcon from "@static/svg/LoadingIcon";
import { respondTo } from "@styles/styledMediaQuery";
//eslint-disable-next-line
import { fetchMarketplaceItem, marketplaceItemExists } from "@utils/marketplace";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
	padding: 0 6rem;
	height: 75vh;
	display: flex;
	/* grid-template-columns: repeat(2,minmax(0,1fr)); */
	gap: 2rem;
	${respondTo.md`
		padding: 0 2rem;
		flex-direction: column-reverse;
		min-height: 85vh;
		height: auto;
	`}
`

const LoadingContainer = styled.div`
	height: 70vh;
	width: 100%;
	display: grid;
	place-items:center;
`

const HeroSection = () => {
	const { collectibleInfo, setCollectibleInfo } = useContext(CollectibleContext);
	const [isLoading, setIsLoading] = useState(true)
	const { addr } = useParams ();

	useEffect (() => {
		// Axios request goes here ebin...
		// let infoStuff = {
		// 	address: addr,
		// 	title: "The Sloth",
		// 	description: "I am not crazy! I know he swapped those numbers. I knew it was 1216. One after Magna Carta. As if I could ever make such a mistake. Never. Never! I just - I just couldn't prove it. He covered his tracks, he got that idiot at the copy shop to lie for him. You think this is something? You think this is bad? This? This chicanery? He's done worse. That billboard! Are you telling me that a man just happens to fall like that? No! *He* orchestrated it! Jimmy! He *defecated* through a *sunroof*! And I saved him! And I shouldn't have. I took him into my own firm! What was I *thinking*? He'll never change. He'll *never* change! Ever since he was 9, *always* the same! Couldn't keep his hands out of the cash drawer! But not our Jimmy! Couldn't be precious *Jimmy*! Stealing them blind! And *HE* gets to be a lawyer? What a sick joke! I should've stopped him when I had the chance!",
		// 	creator:{
		// 		name:"andi",
		// 		id:"5FYmfz6QSbwQZ1MrYLhfdGVADmPyUZmE8USLBkYP4QmgkgDA"
		// 	},
		// 	owners:{
		// 		current: {
		// 			id: "5DMKdZRQ93LqyAVt3aw8wYHGyxofKcxbsBfBytUBgTEHCT4J",
		// 			name: 'Boidushya',
		// 			quantity: {
		// 				owns: 20,
		// 				total: 50
		// 			}
		// 		},
		// 		total: 3
		// 	},
		// 	collection: {
		// 		name: "sqwid moment epic",
		// 		cover:"https://images.unsplash.com/photo-1635709045508-c07a580c97b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
		// 		id:"P8oUukggomsU9aG5Rx62"
		// 	},
		// 	properties: [{
		// 		key:"scarcity",
		// 		value:"common"
		// 	},{
		// 		key:"tag",
		// 		value:"image"
		// 	},{
		// 		key:"what",
		// 		value:"okay"
		// 	},{
		// 		key:"op op op oppa",
		// 		value:"gangam style"
		// 	},{
		// 		key:"scarcity",
		// 		value:"common"
		// 	},{
		// 		key:"tag",
		// 		value:"image"
		// 	},{
		// 		key:"what",
		// 		value:"okay"
		// 	},{
		// 		key:"op op op oppa",
		// 		value:"gangam style"
		// 	}],
		// 	contentURL: "https://images.unsplash.com/photo-1635711418987-0f129630e7b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1965&q=80",
		// 	isOnSale: true,
		// 	price:"1250000000.11254592",
		// 	highestBid:"99000",
		// 	royalty: "12"
		//
		const getData = async () => {
            const data = await fetchMarketplaceItem (Number (addr));
            if (data) {
                let priceInUSD = null;
                try {
                    let res = await axios ('https://api.coingecko.com/api/v3/simple/price?ids=reef-finance&vs_currencies=usd');
                    let price = res.data['reef-finance'].usd;
                    priceInUSD = Number (data.price) * Number (price);
                } catch (e) {
                    //haha
                }
                setCollectibleInfo ({
                    ...data,
                    priceInUSD,
                    isValidCollectible: true
                });
                setIsLoading (false)
            }
            else{
                setCollectibleInfo({
                    ...collectibleInfo,
                    isValidCollectible:false,
                })
            }
        }

		getData ();
		//eslint-disable-next-line
	}, [])
	return (
		<>
			{isLoading?(
				<LoadingContainer>
					<LoadingIcon size={64}/>
				</LoadingContainer>
			):(
			<Wrapper>
				<InfoContent/>
				<NFTContent/>
			</Wrapper>
			)}
		</>
	)
}

export default HeroSection
