const translateWord = (korWord) => { //korean to english
    let engWord = [];
    let count;

    const GA = 44032;
    const FINAL_NONE = 0;
    const INITIAL_IEUNG = 11;

    let uni = korWord.charCodeAt(0) - GA; //seperate word

    let initial = parseInt(uni / 588);
    let neutral = parseInt((uni - initial * 588) / 28);
    let final = parseInt(uni % 28);

    if (final === FINAL_NONE || initial === INITIAL_IEUNG) {
      count = 2;
    } else {
      count = 3;
    }

    var eTemp = [];
    var index = 0;

     //백마[뱅마] Baengm 신문로[신문노] Sinmunno 종로[종노] Jongno
    switch (initial) {
      case 0:
        eTemp[index++] = 'g';
        break;
      case 2:
        eTemp[index++] = 'n';
        break;
      case 3:
        eTemp[index++] = 'd';
        break;
      case 5:
        eTemp[index++] = 'l';
        break;
      case 6:
        eTemp[index++] = 'm';
        break;
      case 7:
        eTemp[index++] = 'b';
        break;
      case 9:
        eTemp[index++] = 's';
        break;
      case 12:
        eTemp[index++] = 'j';
        break;
      case 14:
        eTemp[index++] = 'ch';
        break;
      case 17:
        eTemp[index++] = 'p';
        break;
      case 18:
        eTemp[index++] = 'h';
        break;
    }

    switch (neutral) {
      case 0:
        eTemp[index++] = 'a';
        break;
      case 1:
        eTemp[index++] = 'ae';
        break;
      case 2:
        eTemp[index++] = 'ya';
        break;
      case 4:
        eTemp[index++] = 'eo';
        break;
      case 5:
        eTemp[index++] = 'e';
        break;
      case 6:
        eTemp[index++] = 'yeo';
        break;
      case 7:
        eTemp[index++] = 'ye';
        break;
      case 8:
        eTemp[index++] = 'o';
        break;
      case 9:
        eTemp[index++] = 'wa';
        break;
      case 11:
        eTemp[index++] = 'oe';
        break;
      case 12:
        eTemp[index++] = 'yo';
        break;
      case 13:
        eTemp[index++] = 'u';
        break;
      case 18:
        eTemp[index++] = 'eu';
        break;
      case 19:
        eTemp[index++] = 'ui';
        break;
      case 20:
        eTemp[index++] = 'i';
        break;
    }

    switch (final) {
      case 1:
        eTemp[index++] = 'k';
        break;
      case 4:
        eTemp[index++] = 'n';
        break;
      case 7:
      case 22:
      case 25:
        eTemp[index++] = 't';
        break;
      case 8:
        eTemp[index++] = 'l';
        break;
      case 16:
        eTemp[index++] = 'm';
        break;
      case 21:
        eTemp[index++] = 'ng';
        break;
    }

    if(count === 2) {
        if (final === FINAL_NONE && initial === INITIAL_IEUNG)
            engWord = eTemp[0];
        else
        engWord = eTemp[0]+eTemp[1];
    } else if (count > 2) {
        engWord = eTemp[0]+eTemp[1]+eTemp[2];
    }

    return engWord;
}

export const translateName = (korName) => {
    let korWords = [];
    let engWords = [];
    let engName;

    for(var i = 0; i < korName.length; i++){   
        korWords[i] = korName.charAt(i);
        engWords[i] = translateWord(korWords[i]);
    }        

    if(korName.length == 2)
        engName = engWords[0]+engWords[1];
    else if(korName.length > 2)
        engName = engWords[0]+engWords[1]+engWords[2];

    return engName;
}