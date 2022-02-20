import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Text, View, TextInput,KeyboardAvoidingView ,TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Recipe from '../components/Recipe';
import { webWeights } from 'react-native-typography';

import db from '../assets/recipes.js'

const RecipeScreen = ({route,navigation}) => {
 
    const name = route.params.paramKey;
    const [recipes, setRecipes] = useState([]);
    const [fave,setFave] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    db.forEach(item => {
        for (var key in item){
          if (item.hasOwnProperty(key)) {
            var val = item[key];
            for (var i = 0; i < val.ingredients.length; i++){
              if (val.ingredients[i].toLowerCase().indexOf(name.toLowerCase()) != -1){
                if (recipes.length <= 7) {
                  recipes.push(val);
                } else {
                  console.log("Too large, Ignore");
                }
              }
            }
          }
        }
      })
      console.log(recipes);

      //setRecipes(tempRecipes);
var recipeItems = [
{
    "calories": 0,
    "carbs": 0,
    "comments": "",
    "cooktime": 900,
    "fat": 0,
    "fiber": 0,
    "id": "id30",
    "ingredients":[
    "4 (6 to 7-ounce) boneless skinless chicken breasts",    
    "10 grinds black pepper",    
    "1/2 tsp salt",    
    "2 tablespoon extra-virgin olive oil",    
    "1 teaspoon dried oregano",
    "1 lemon, juiced",
    ],
    "instructions": "To marinate the chicken: In a non-reactive dish, combine the lemon juice, olive oil, oregano, salt, and pepper and mix together. Add the chicken breasts to the dish and rub both sides in the mixture. Cover the dish with plastic wrap and let marinate in the refrigerator for at least 30 minutes and up to 4 hours. To cook the chicken: Heat a nonstick skillet or grill pan over high heat. Add the chicken breasts and cook, turning once, until well browned, about 4 to 5 minutes on each side or until cooked through. Let the chicken rest on a cutting board for a few minutes before slicing it into thin strips.",
    "name": "Oregano Marinated Chicken",
    "preptime": 1800,
    "protein": 0,
    "satfat": 0,
    "servings": 6,
    "source": "http://www.foodnetwork.com/recipes/dave-lieberman/greek-salad-with-oregano-marinated-chicken-recipe2/index.html",
    "sugar": 0,
    "tags":[
      "main",
      "chicken",
    ],
    "waittime": 14400,
}]
recipeItems = recipes;

recipeItems = [...new Set(recipeItems)];

const addFavorite = (f) => {
    setFave([...fave,f])
}
const checkFav = (id) => {
  for (var i = 0; i < fave.length; i++){
    if (fave[i].id == id){
      return true;
    }
  }
  return false;
}


return(
    <View style={styles.container}>
  
    <View style={styles.tasksWrapper}>
    <Text style={styles.sectionTitle}>Recipes</Text>

    <TouchableOpacity onPress={() =>navigation.navigate('Favorites',{paramKey: fave})} style={styles.addFav}>
  
  <View style={styles.addWrapper}>
    <Text style={styles.addText}>⭐</Text>
  </View>
</TouchableOpacity>
<Text style={styles.itemDescription}>
  View Instructions: {"\n"}
      <Text style={styles.info} onPress={ ()=> setCollapsed(true)}>{!collapsed && "collapse"}</Text>
          {collapsed &&
            <Text>
            Press once to follow along one of our carefully curated recipes! {"\n\n"}
            Press and Hold to ⭐ favorite a recipe. {"\n\n"}
            You may "retrieve" the recipes you have favorited at the "⭐" folder above.{"\n\n"}
            Enjoy!! {"\n\n"}
            <Text style={styles.info} onPress={ ()=> setCollapsed(false)}>minimize</Text>
          </Text>}
        </Text>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.items}>
    {
            recipeItems.map((item,index)=>{
              return (
              <TouchableOpacity key={index} onPress={() => navigation.navigate('FullRecipe',{
                paramKey: item,
              })} onLongPress={() => addFavorite(item)}
              /*onPress={() =>
                navigation.navigate('SecondPage', {
                  paramKey: userName,
                })
                
              }*/ > 
                    <Recipe info={item}
                      fav={checkFav(item.id)}/>
              </TouchableOpacity>
            )})
  
          }
      
    </ScrollView>
    </View>
    </View>

)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
  
    },
    tasksWrapper: {
      paddingTop: 20,
      paddingHorizontal: 20,
  
    },
    sectionTitle:{
      fontSize: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 30,
      marginBottom: 30,
    },
    itemDescription: {
      fontSize: 15,
      letterSpacing: 1.5,
      paddingVertical: 10,
      paddingHorizontal: 10,
      ...webWeights.semibold,
    },
    info: {
      textDecorationLine:'underline',
    },
    writeTaskWrapper:{
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input:{
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper:{
      width: 60,
      height: 40,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText:{
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
    },
    addFav:{
        paddingTop: 10,
    }
  });

export default RecipeScreen;