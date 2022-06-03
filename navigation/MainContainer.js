import React from 'react';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AddMovieScreen from './AddMovieScreen';
import MovieApiScreen from './MovieApiScreen';
import MovieListScreen from './MovieListScreen';

// const MovieList = MovieList;
// const AddMovie = AddMovie;
// const MovieApi = MovieApi;

const Tab = createBottomTabNavigator();

// ********************************************
export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: { paddingBottom : 12, backgroundColor: "white" },
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Movie List') {
                        return (    
                            <Ionicons
                            name={focused ? 'add-circle' : 'add-circle-outline' } 
                            size={size} color={color}
                            />
                        );
                        } else if (route.name === 'Add Movie') {
                        return (
                            <Ionicons
                            name={focused ? 'add-circle' : 'add-circle-outline'} 
                            size={size} color={color}
                            />
                        );
                        }else if (route.name === 'Movie Api') {
                            return (
                                <Ionicons
                                name={focused ? 'add-circle' : 'add-circle-outline'}
                                size={size} color={color}
                                />
                            );
                        }
                        
                    },
                    tabBarInactiveTintColor: 'grey',
                    tabBarActiveTintColor: '#38ACEC',
                    })}
                >
                {/* <Tab.Screen name="MovieList" component={MovieListScreen} options={{ tabBarBadge: 3 }} /> */}
                <Tab.Screen name="Movie List" component={MovieListScreen} />
                <Tab.Screen name="Add Movie" component={AddMovieScreen} />
                <Tab.Screen name="Movie Api" component={MovieApiScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const MovieList = MovieList;
const AddMovie = AddMovie;
const MovieApi = MovieApi;
// ********************************************

// export default function MainContainer(){
//     return(
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name="Movie List" component={MovieListScreen} />
//                 <Tab.Screen name="Add Movie" component={AddMovieScreen} />
//                 <Tab.Screen name="Movie Api" component={MovieApiScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }


// ********************************************
// export default function MainContainer(){
//     return(
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color, size }) => {
//                         let rn = route.name
//                         let Iconname;
//                         if (rn === 'MovieList') {
//                             Iconname = focused ? 'home-outline' : 'ios-information-circle-outline';
//                         }else if (rn === 'AddMovie') {
//                             Iconname = focused ? 'ios-list-box' : 'ios-list';
//                         }else if (rn === 'MovieApi') {
//                             Iconname = focused ? 'ios-list-box' : 'ios-list';
//                         }
//                         return (
//                             // <ion-icon name={Iconname}></ion-icon>
//                             <ion-icon
//                             name={Iconname} size={size} color={color}
//                             ></ion-icon>
//                         );
//                     },
//                     tabBarInactiveTintColor: 'gray',
//                     tabBarActiveTintColor: 'tomato',
//                     })}
//                 >
//                 {/* <Tab.Screen name="MovieList" component={MovieListScreen} options={{ tabBarBadge: 3 }} /> */}
//                 <Tab.Screen name="MovieList" component={MovieListScreen} />
//                 <Tab.Screen name="AddMovie" component={AddMovieScreen} />
//                 <Tab.Screen name="MovieApi" component={MovieApiScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }

// const MovieList = MovieList;
// const AddMovie = AddMovie;
// const MovieApi = MovieApi;
// ********************************************
