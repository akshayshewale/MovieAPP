
import React, { Component } from "react";
import {Text,View,ActivityIndicator,FlatList} from 'react-native';
// import axios from 'axios';
class MovieApiScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          isLoading: true
        };
    }
    async getMovies() {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            this.setState({ data: json.movies });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { data, isLoading } = this.state;
        return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <Text>0</Text> : (
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                <Text style={{color:'black', fontSize: 30}}>{item.id}, {item.title}, {item.releaseYear}</Text>
                )}
            />
            )}
        </View>
        ); 
    }
}
export default MovieApiScreen

      // render() {
    //     return(
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
    //             {/* <Text 
    //                 onPress={() => navigation.navigate('Home')}
    //                 style={{fontSize: 30, fontWeight: 'bold'}}>Movie API
    //             </Text>  */}
    //         </View>
    //     )
    // }







    // export default function MovieApiScreen({navigation}){
//     return(
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
//             {/* <Text 
//                 onPress={() => navigation.navigate('Home')}
//                 style={{fontSize: 30, fontWeight: 'bold'}}>Movie API
//             </Text> */}
//         </View>
//     );
// };
