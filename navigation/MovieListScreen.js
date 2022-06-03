import { executeReducerBuilderCallback } from "@reduxjs/toolkit/dist/mapBuilders";
import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet} from 'react-native';
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import { connect } from "react-redux";

function MovieListScreen(props){
    // console.log(props.movie);
    // let movieName = props.movie;
    // console.log(props.movie.movieList[0].name);
    // console.log("Hiiiii ",props.movie.movieList);
    
    // console.log((props.movie.movieList[0]).length);
    
    // const numbers = [1, 2, 3, 4, 5];
    // const listItems = props.movie.movieList[0].map((props.movie.movieList)=>?
    //   <li>{props.movie.movieList}</li>
    // );

    // const [MovieData,setMovie]=useState([
    //     props.movie.movieList[0]
    // ]);
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center",backgroundColor : "#38ACEC"}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>Movie List 
            </Text>
            
            

            <FlatList style={{color: 'black', backgroundColor:"#38ACEC", width: 350}}
                data={props.movie.movieList}
                renderItem={({item}) => (
                    <View style={styles.ViewContainer}>
                        <Text style={styles.nameContainer}>Name : {item.name}</Text>
                        <Text style={styles.nameContainer}>Genre : {item.genre}</Text>
                        <Text style={styles.nameContainer}>Director : {item.director}</Text>
                        <Text style={styles.nameContainer}>Caste : {item.cast}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    nameContainer: {
        color: 'black',
        fontSize: 18,
        backgroundColor:"white",
        justifyContent: "center",
        textAlign: "center",
    },
    ViewContainer: {
        color: 'black',
        fontSize: 18,
        paddingTop: 15,
    }
  });



const mapStateTopProps = (state) =>{
    // console.log(state);
    return{
        movie: state.movieReducer
    }  
}

export default connect(mapStateTopProps,null)(MovieListScreen);

// ************************************************************
// import React from 'react';
// import {
//   StyleSheet,
//   FlatList
// } from 'react-native';
// import { ListItem, Icon } from 'react-native-elements'
// // import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
// import { useDispatch, useSelector } from 'react-redux';
// // import {movieReducer from '../redux/movieReducer';


// export default function MovieListScreen({navigation}){
//     const dispatch = useDispatch();
//     const movie = useSelector(state => state.movieReducer.MovieListScreen);
    
//     return(
//         <FlatList style={styles.listContainer}
//         data={movie}
//         keyExtractor={(item, index) => item.key.toString()}
//         renderItem={
//             (data) =>
//             <ListItem
//                 title={data.item.name}
//             />
//         }
//         />
//     );
// };
// const styles = StyleSheet.create({
//     listContainer: {
//       backgroundColor: '#212121',
//       padding: 16
//     },
//     listText: {
//       fontSize: 30
//     },
//   });

