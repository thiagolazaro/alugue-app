import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import Home from "./pages/home";
import Detail from "./pages/detail";

const Stack = createStackNavigator();

function Routes() {
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Detail" component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Routes;