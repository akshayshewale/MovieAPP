import React from "react";
import {Text,View,SafeAreaView,StyleSheet,TextInput,Button,Pressable} from 'react-native';
// import MainContainer from "./MainContainer";
import { useSelector, connect, useDispatch } from 'react-redux';
import { addMovie } from "../redux/actions";


// **********************************************************
class AddMovieScreen extends React.Component{
    
    // const {movie} = useSelector
    constructor(props)
    {
        super(props);
    }
    state={
        movie: '',
        MovieList: [],
        name : '',
        genre: '',
        director: '',
        cast: '',
        ErrorText: '',
    }
    submitMovie()
    {
        if(this.state.name=="")
        {
            this.setState({ErrorText:"Name is empty"});    
        }else if(this.state.genre=="")
        {
            this.setState({ErrorText:"Genre is empty"});    
        }else if(this.state.director=="")
        {
            this.setState({ErrorText:"Director is empty"});    
        }else if(this.state.cast=="")
        {
            this.setState({ErrorText:"Cast is empty"});    
        }else
        {
            this.setState({ErrorText:""});
            let movieD = {
                name :this.state.name,
                genre :this.state.genre,
                director :this.state.director,
                cast: this.state.cast
            }
            // console.warn('dataaa : ',this.state);
            // console.warn(this.props.add(movieD));
                this.props.add(movieD);

            // console.warn(addMovie(this.state.movie));
            // useDispatch(addMovie);
        }
    }
    
    render()
    {
        console.log(this.props.movie);
        return(
            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 50 }}>
                <SafeAreaView style={{width:300}}>
                    <Text style={{color:'#1E90FF',fontSize:20,fontWeight:"bold",padding: 10}}>Add Movies Form</Text>
                    
                    <Text style={styles.inputName}>Movie Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Movie Name"
                        onChangeText={(text) => { this.setState({ name: text}) }} />

                    <Text style={styles.inputName}>Genre</Text>    
                    <TextInput
                        style={styles.input}
                        placeholder="Genre"
                        onChangeText={(text) => { this.setState({ genre: text}) }} />
                        
                    <Text style={styles.inputName}>Director</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Director"
                        onChangeText={(text) => { this.setState({ director: text}) }} />
                    
                    <Text style={styles.inputName}>Cast</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Cast"
                        onChangeText={(text) => { this.setState({ cast: text}) }} />
                    <Text style={{color:'red'}}>{this.state.ErrorText}</Text>
                    <Button 
                    title="Add" 
                    style={styles.addButton} 
                    onPress={() => {this.submitMovie()}} />
                    
            </SafeAreaView>
        </View>
        )
    }
};
    
const styles = StyleSheet.create({
    input: {
        color: '#00BFFF',
        height: 40,
        margin: 12,
        padding: 10,
        width: 200,
        backgroundColor: 'black',
    }, 
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        width:100,
        backgroundColor: '#1E90FF',
    },
    inputName:{
        color: '#00BFFF',
        marginLeft: 12,
        padding: 2,
        fontSize: 18,
    },
});

// export default AddMovieScreen;


//*******************************************
const mapStateTopProps = (state) =>{
    // console.log(state);
    return{
        movie: state.movieReducer
    }  
}

const mapDispatchTopProps = (dispatch) =>{
    return{
        add: (movie) => dispatch(addMovie(movie))
    }
}

export default connect(mapStateTopProps,mapDispatchTopProps)(AddMovieScreen);


// **********************************************************
//*********************************************************** */

// export default function AddMovieScreen({navigation}){
//     const [data, setData] = useState([{ name: 'ketan' }]);
//     const [name, setName] = useState('');
//     return(
//         <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 50 }}>
//             {/* <Text 
//                 onPress={() => navigation.navigate('Home')}
//                 style={{fontSize: 30, fontWeight: 'bold'}}>Add Movie 
//             </Text> */}
//             <SafeAreaView style={{width:300}}>
//             <Text style={{color:'#1E90FF',fontSize:20,fontWeight:"bold",padding: 10}}>Add Movies Form</Text>
               
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Movie Name"
//                     onChangeText={(name) => {this.setName(name)}}
//                     value={name}
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Genre"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Director"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Cast"
//                 />
//                 <Button 
//                 title="Add" 
//                 style={styles.addButton} 
//                 onPress={() => { 
//                     if (name) setData([...data, { name: name }]);
//                     console.log('hi');
//                 }}>
//                 </Button>
//                 <FlatList
//                 keyExtractor={(item) => item}
//                 data={data}
//                 renderItem={({ item }) => <Text>{item.name}</Text>}
//                 />
//                 {/* <Pressable title="add" style={styles.addButton} onPress={onPress}> */}
//                 {/* <Pressable title="add" style={styles.addButton}>
//                     <Text style={{color:'white'}}>ajshdb</Text>
//                 </Pressable> */}
//             </SafeAreaView>
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     input: {
//         // color: '#FF0000',
//         color: '#00BFFF',
//         height: 40,
//         margin: 12,
//         padding: 10,
//         width: 200,
//         backgroundColor: 'black',
//     }, 
//     addButton: {
//         // borderRadius: 3,
//         // color: '#00008B',
//         // backgroundColor: '#696969',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 12,
//         // paddingHorizontal: 32,
//         borderRadius: 10,
//         width:100,
//         backgroundColor: '#1E90FF',
//     }
//   });