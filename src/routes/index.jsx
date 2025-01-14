import React, { Suspense } from "react";
import FullPageLoading from "@elements/Default/FullPageLoading";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import CollectibleProvider from "@contexts/Collectible/CollectibleProvider";
import TopBanner from "@components/Default/TopBanner";
const Explore = React.lazy(() => import("@pages/Explore"));
const Collectible = React.lazy(() => import("@pages/Collectible")) ;
const Collections = React.lazy(() => import("@pages/Collections")) ;
const Create = React.lazy(() => import("@pages/Create")) ;
const Landing = React.lazy(() => import("@pages/Landing")) ;
const Profile = React.lazy(() => import("@pages/Profile")) ;
const NotFound = React.lazy(() => import("@pages/NotFound")) ;


const Routes = () => {
	return (
		<Router>
			<Suspense fallback={<FullPageLoading init component="routes"/>}>
				<TopBanner/>
				<Switch>
					<Route
						path="/"
						exact
						component={Landing}
					/>
					<Route
						path="/explore"
						exact
						component={Explore}
					/>
					<Route
						path="/collections/:id?"
						exact
						component={Collections}
					/>
					<Route
						path="/profile/:id?"
						exact
						component={Profile}
					/>
					<Route
						path="/create"
						exact
						component={Create}
					/>
					<Route
						path="/collectible/:addr/:ownerID?"
						exact
					>
						<CollectibleProvider>
							<Collectible/>
						</CollectibleProvider>
					</Route>
					<Route
						component={NotFound}
					/>
				</Switch>
			</Suspense>
		</Router>
	)
}

export default Routes