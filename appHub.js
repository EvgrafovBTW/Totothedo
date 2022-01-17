import React from "react";
import { StyleSheet, Text, View, Button, NativeModules, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react/cjs/react.development";
import { checkNotes, createNote, deleteNote, updateNote } from "./api";
import {Test} from "./test";



export default function Body(){

    global.allNotesJson = [{id:"454564",title:"Title", text:"Text"}];
    global.allPress = false;
    global.certainPress = false;

    /*let allNotesData = [{
        Data: [{
            id : "value",
            title : "value",
            text : "value"
        }],
        
    }]; /* динамический массив данных для флатлиста */

    const OnAllPress = async () => {
        allPress = true;
        await checkNotes();
       

        /*for (let i in allNotesData){
            
            allNotesData[i].Data[i].id = idArr[i]; 
            allNotesData[i].Data[i].title = nameArr[i];
            allNotesData[i].Data[i].text = textArr[i];


        }*/
        //for (let j in )
        //console.log(allNotesData[0].Data[0].id)
        //console.log(idArr[0])
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

    }

    const OnCertainPress = async () => {
        certainPress = true;
    }

    const onDeleteNotePress = async () => {
        deleteNote();
    }

    const onCreateNotePress = async () => {
        createNote();
        setName('');
        setText('');
    }

    const onUpdateNotePress = async () => {
        updateNote();
        setName('');
        setText('');
    }

    const [name, setName] = useState("");
    const [text, setText] = useState("");

    global.title = name;
    global.noteBody = text;
    global.noteID = '94ac4a6f-d27a-44bf-8dbb-fbfb09be2408';
    let test = new Test();

    const ontest = test.writeA;

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.text}</Text>
        </View>
      );
   
    return(
        <SafeAreaView style={styles.container}>

            
            <View style={styles.watch}>
                <Text>Рамка для вывода заметок</Text>
                <TouchableOpacity style={styles.confirmBtn} onPress={OnAllPress}>
                <Text style={styles.confirmBtnTxt}>посмотреть все заметки</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmBtn} onPress={OnCertainPress}>
                <Text style={styles.confirmBtnTxt}>посмотреть конкретную заметку</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmBtn} onPress={onDeleteNotePress}>
                <Text style={styles.confirmBtnTxt}>удалить заметку</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TextInput placeholder="Введите название заметки" style={styles.txtBox} value = {name} onChangeText={(value) => setName(value)}></TextInput>
                <TextInput placeholder="Введите тело заметки" style={styles.txtBox} value = {text} onChangeText={(value) => setText(value)}></TextInput>
                <TouchableOpacity style={styles.confirmBtn} onPress={onCreateNotePress}>
                    <Text style={styles.confirmBtnTxt}>Создать заметку</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmBtn} onPress={onUpdateNotePress}>
                    <Text style={styles.confirmBtnTxt}>Изменить заметку</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmBtn} onPress={ontest}>
                    <Text style={styles.confirmBtnTxt}>Изasdsdasdasу</Text>
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    data={allNotesJson}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    confirmBtn: {
        marginTop: 10,
        backgroundColor: "#007aff",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 30,
        alignItems: 'center'
    
    },
    watch:{
        borderWidth: 5,
        marginBottom: 30,
    },
    txtBox: {
        marginTop: 10,
        borderRadius: 1,
        backgroundColor: "ivory",
    },
    confirmBtnTxt:{
        fontSize: 20,
        fontWeight: '400',
        color: "#fff",
    },
});

