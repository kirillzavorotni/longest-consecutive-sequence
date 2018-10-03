module.exports = function longestConsecutiveLength(array){
    let storageObj = {};
    let sortedArray = [];
    let count = 1;
    let longest = 0;
    // находим уникальные значения array и записываем хи в ключи объекта
    for(let i = 0, len = array.length; i < len; i++){
        storageObj[array[i]] = true; // значения свойства ставим любые
    }
    // переносим значения в массив
    for(let key in storageObj){
        sortedArray.push(+key);
    }
    console.log(sortedArray);
    // подсчитываем самое большое кол-во последователей
    for(let i = 0, len = sortedArray.length; i < len; i++){
        if(sortedArray[i] === sortedArray[i+1]-1){
            count++;
        } else {
            if(count > longest) longest = count;
            count = 1;
        }
    }
    return longest;
};