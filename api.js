import React from "react";
import {AsyncStorage} from '@react-native-async-storage/async-storage'


async function userInfo(){
  let url = 'http://90.189.110.72:8080/api/auth/info';
  let response = await fetch(url, {
    headers:{ /* Здесь отдаём данные о пользователе*/
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  });
  let userJson = await response.json();
  global.userID = await userJson.userData.id;
  if (response.ok) {
    console.log("джейсон по пользователю: ")
    console.log(userJson)
    console.log("айди конкретного пользователя: "+userID)
  }
  else{
    alert("ошибка " + response.status);
  }
}

async function registration(){
  let regUrl = `http://90.189.110.72:8080/api/auth/register?name=${login}&password=${password}`
  let regResponse = await fetch(regUrl, {method: 'POST'})

  if (regResponse.ok){
    alert("регистрация прошла успешно");

  }
  else{
    alert("беда");
  }
}

async function signIn(){
  let signUrl = `http://90.189.110.72:8080/api/auth/login?username=${login}&password=${password}`
  let signResponse = await fetch(signUrl, {method: 'POST'});

  let signJson = await signResponse.json();  
  global.accessToken = 0;
  //console.log("2 "+ vhod)
  if (signResponse.ok){
    vhod = true;
    console.log("токен пользователя: ")
    console.log(signJson.access_token);
    //console.log("3 "+vhod);
    accessToken = await signJson.access_token;
    //console.log("переменная " +accessToken)
  }
  else{
    //alert("беда");
  }
}

async function checkNotes(){
  let allNotesUrl = `http://90.189.110.72:8080/api/notes`
  //let myNotesUrl = `http://90.189.110.72:8080/api/notes/`

  global.nameArr = []; /* динамический массив названий заметок */
  global.idArr = []; /* динамический массив айдишников заметок */
  global.textArr = []; /* динамический массив текста заметок */

  if (allPress == true) {
   let allNotesResponse = await fetch(allNotesUrl, {
      headers:{ /* Здесь отдаём данные о записках*/
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });
    global.allNotesJson = await allNotesResponse.json();
    console.log("полный джейсон заметки: ")
    console.log(allNotesJson);

   // console.log("text ^ " + noteTitle.name)

    /*for (let i in allNotesJson.result){
      nameArr[i] = allNotesJson.result[i].name;
      idArr[i] = allNotesJson.result[i].id;
      textArr[i] = allNotesJson.result[i].text;

      //console.log("massive "+ i + ": " + nameArr)
    }
   /* console.log(idArr)  // <------ в этих массивах хранятся ВСЕ полагающиеся им значения (не 1)
    console.log(nameArr)
    console.log(textArr)
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")*/


  } else {
    if (certainPress == true){

    }

  }
}

async function createNote(){
  let createUrl = `http://90.189.110.72:8080/api/notes/create?name=${title}&text=${noteBody}`
  let createNoteResponse = await fetch(createUrl, {
    method: 'POST',
    headers: { /* Здесь отдаём данные о пользователе*/
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  })

  let createNoteJson = await createNoteResponse.json();

  if (createNoteResponse.ok) {
    console.log('джейсон создания заметки:')
    console.log(createNoteJson);
  } else {
    alert('error '+ createNoteResponse.status)
  }
}

async function deleteNote(){
  let deleteNoteUrl = `http://90.189.110.72:8080/api/notes/${noteID}` /*<------ вставить переменную айди заметки */
  let deleteNoteResponse = await fetch(deleteNoteUrl, {
    method: 'DELETE',
    headers: { /* Здесь отдаём данные о пользователе*/
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  })

  if (deleteNoteResponse.ok){
    alert('заметка успешно удалена ' + deleteNoteResponse.status)
  } else{
    alert('error ' + deleteNoteResponse.status)
  }
}

async function updateNote(){
  let updateNoteUrl = `http://90.189.110.72:8080/api/notes/${noteID}?name=${title}&text=${noteBody}`
  let updateNoteResponse = await fetch (updateNoteUrl, {
    method: 'PUT',
    headers: { /* Здесь отдаём данные о пользователе*/
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  })

  if (updateNoteResponse.ok){
    alert('заметка успешно изменена '+ updateNoteResponse.status)
  } else {
    alert('error '+ updateNoteResponse.status)
  }
}

export {userInfo, registration, signIn, checkNotes, createNote, deleteNote, updateNote};