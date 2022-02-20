import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import RecipeScreen from "../screens/RecipeScreen";
import FullRecipeScreen from "../screens/FullRecipeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import InfoScreen from "../screens/InfoScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Recipe from "../components/Recipe";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {

    return(
        /*
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>

            <Tab.Screen name="Recipes" component={RecipeScreen}/>
        </Tab.Navigator>
        */
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Recipes" component={RecipeScreen} />
          <Stack.Screen name="FullRecipe" component={FullRecipeScreen} />
          <Stack.Screen name="Favorites" component={FavoriteScreen} />
        <Stack.Screen name="Information" component={InfoScreen} />
        </Stack.Navigator>
    );
}

export default Tabs;