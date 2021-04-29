import * as React from 'react';
import {View, Text, TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import { Icon, ListItem} from 'react-native-elements';
import db from '../Config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class MyDonation extends React.Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            allDonations:[],
        }
    }

    componentDidMount=()=>{
        this.getAllDonations();
        console.log("HI, My Donor" + this.state.allDonations);
    }

    getAllDonations=()=>{
        db.collection("allDonations").where("donorId","==",this.state.userId).onSnapshot((snapshot)=>{
            var allDonations = []
            snapshot.docs.map((doc)=>{
                var donations = doc.data();
                donations["doc_id"]=doc.id;
                allDonations.push(donations);
            })
            console.log("asd" + allDonations)
            this.setState({
                allDonations:allDonations
            })
        })
    }

    keyExtractor=(item,index)=>{
        index.toString();
    }

    renderItems=({item,i})=>{
        <ListItem
            key={i}
            title={item.bookName}
            subtitle={"Request By" + item.requestedBy + "Status" + item.requestStatus}
            leftElement={
                <Icon 
                    name="book" 
                    type="feather" 
                    color ='#696969'
                />
            }
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            rightElement={
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'#ffff'}}>Send Book</Text>
                </TouchableOpacity>
                }
                bottomDivider
        />
    }

    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader navigation={this.props.navigation} title="My Donations"/>
            <View style={{flex:1}}>
                {
                    this.state.allDonations.length === 0
                    ?(
                        <View style={styles.subtitle}>
                            <Text style={{ fontSize: 20}}>List of all book Donations</Text>
                        </View>
                    )
                    :(
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.allDonations}
                            renderItem={this.renderItem}
                        />
                    )
                }
         </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8
         },
        elevation : 16
      },
      subtitle :{
        flex:1,
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center'
      },
})