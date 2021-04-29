import * as React from 'react';
import {View,StyleSheet,Text,Dimensions} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import db from '../Config';
import {ListItem, Icon} from 'react-native-elements';

export default class SwipableFlatlist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allNotifications:this.props.allNotifications,
        }
    }

    updateStatus=(notification)=>{
        db.collection("notifications").doc(notification.doc_id).update({
            notificationStatus:"read",
        })
    }

    onSwipeValueChange=(swipeData)=>{
        var allNotifications = this.state.allNotifications;
        const {key,value} = swipeData;
        if(value<-Dimensions.get("window").width){
            const newData = [...allNotifications];
            const previousIndex = allNotifications.findIndex((item)=>{
                item.key===key
            })
            this.updateStatus(allNotifications[previousIndex])
            newData.splice(previousIndex,1);
            this.setState({
                allNotifications:newData,
            })
        }
    }

    renderItems=(data)=>{
        <ListItem
            leftElement={<Icon name="book" type="font-awesome" color="#696969"/>}
            title={data.item.bookName}
            titleStyle={{color:"black", fontWeight:'bold',}}
            subtitle={data.item.message}
            bottomDivider
        />
    }

    renderHiddenItem=()=>{
        <View style={styles.rowBack}>

        </View>
    }

    render(){
        return(
            <View style={styles.container}>
                <SwipeListView
                    disableRightSwipe
                    data={this.state.allNotifications}
                    renderItem={this.renderItems}
                    renderHiddenItem={this.renderHiddenItem}
                    rightOpenValue={-Dimensions.get("window").width}
                    onSwipeValueChange={this.onSwipeValueChange}
                />
            </View>
        );
    }
}

  
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
        fontWeight:'bold',
        fontSize:15
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#29b6f6',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 100,
    },
    backRightBtnRight: {
        backgroundColor: '#29b6f6',
        right: 0,
    },
});