// Напишите программу, которая берет исходное количество евро, записанное в константу 
//eurosCount, переводит евро в доллары и выводит на экран. Затем полученное значение переводит 
//в рубли и выводит на новой строчке.
const dollarsCount = eurosCount * 1.25;
console.log(dollarsCount);
const rublesCount = dollarsCount * 60;
console.log(rublesCount);
 
 
// Избавьтесь от магических чисел, создав новые переменные, а затем выведите текст на экран:
// King Balon the 6th has 102 rooms.
const king = 'King Balon the 6th';
let numberOfRooms = 17
let generation = 6
console.log(king + ' has ' + (numberOfRooms * generation) + ' rooms.')


// Выведите на экран строку Do you want to eat, <name>?, где вместо <name> должна использоваться
// константа stark. Вывод должен получиться таким:
const stark = 'Arya';
console.log(`Do you want to eat, ${stark}?`)


//Вам даны три переменные с фамилиями разных людей. Составьте и выведите на экран слово из символов
// в таком порядке:
// Третий символ из первой строки
// Второй символ из второй строки
// Четвертый символ из третьей строки
// Пятый символ из второй строки
// Третий символ из второй строки
const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';
console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`)


//Выведите на экран первую и последнюю буквы предложения, записанного в константу text, в следующем формате:
//First: N
//Last: t
const text = 'Never forget what you are, for surely the world will not';
const result = `First: ${text[0]}\nLast: ${text[length(text) - 1]}`;
console.log(result);


//Функция Math.random() возвращает случайное число от 0 до 1 с большим количеством знаков после запятой.
// Но в реальных задачах бывает нужно получать случайные целые числа, например, в диапазоне от 0 до 10.
// Реализуйте код, который выводит на экран именно такое число. Для этой задачи вам понадобятся функции
// Math.random() и Math.round()
console.log(Math.round(Math.random() * 10));



//С помощью метода slice() получите часть предложения, записанного в константу text, c 5 по 15 символы 
//включительно. Полученную подстроку обработайте методом .trim() и выведите на экран длину итоговой 
//подстроки. Выполните эти методы подряд в цепочке без создания промежуточных переменных.
console.log(text.slice(4, 15).trim().length);


//Реализуйте функцию, которая возвращает случайное целое число от 0 до 10
const getRandomNumber = () => {
    const randomNum = (Math.random() * 10)
    const roundNum = (Math.round(randomNum))
    return roundNum
    
 }
 
//Реализуйте функцию getHiddenCard(), который принимает на вход номер кредитки (состоящий из 16 цифр)
//в виде строки и возвращает его скрытую версию, которая может использоваться на сайте для отображения. 
//Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581.

 getHiddenCard = (x, y = 4) => {
  let q1 = x.slice(12)
  let q2 = '*'.repeat(y)
  return `${q2}${q1}`
}



//Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву первого 
//слова к верхнему регистру:
const capitalize = (x) => {
  let ferstWord = x.slice(0, 1)
  let word = x.slice(1)
  let fullWord = ferstWord.toUpperCase() + word
  return fullWord
}


//Реализуйте функцию isLeapYear(), которая определяет, является ли год високосным или нет. Год будет 
//високосным, если он кратен (то есть делится без остатка) 400 или он одновременно кратен 4 и не кратен 100.
 const isLeapYear = (year) => {
  const result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
  return result
}

//Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ (по порядковому 
//номеру, а не индексу) и возвращает его наружу. Если такого символа нет, то функция возвращает пустую строку.
const getLetter = (word, number) => {
  const q0 = number - 1
  const q1 = word[q0] || ''
  return q1
}


//Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. Она принимает 
//адрес сайта и возвращает его с https:// в начале. Функция принимает адреса в виде АДРЕС или 
//https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС
 const normalizeUrl = (url) => {
  let addition
  if (url.startsWith('https://')) {
    addition = url
  } else {
    addition = 'https://' + url
  }
  return addition
}



//Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, 
//возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без 
//изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.
const convertText = (string) => {
  let input
  if (string === '') {
    input = ''
  }
  else if (string[0].toUpperCase() === string[0]) {
    input = string
  }
  else {
    input = string.split("").reverse().join("")
  }
  return input
}


//Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение 
//этого числа. Если для числа нет объяснения, то возвращается null:
const getNumberExplanation = (number) => {
   let input
   if (number === 666) {
    input = 'devil number'
   }
   else if (number === 42) {
    input = 'answer for everything'
    } 
    else if (number === 7) {
    input = 'prime number'
    } 
    else  {
    input = null
    }
return input
}


//Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. Для этого 
//нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным 
значением, а в теле цикла его нужно уменьшать до нижней границы.
const printNumbers = (initialNumber) => {
  // BEGIN (write your solution here)
  let i = initialNumber
  while (i >= 1) {
    console.log(i);
    i = i - 1;
  }
  console.log('finished!');



//Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку
const joinNumbersFromRange = (start, finish) => {
  let result = ''
  let i = start
  while (i <= finish) {
    result = result + i
    i = i + 1;
  }
  return result;
};


//Реализуйте функцию mySubstr(), которая извлекает из строки подстроку указанной длины. Она 
//принимает на вход два аргумента (строку и длину) и возвращает подстроку, начиная с первого символа.
const mySubstr = (text, number) => {
  let i = 0;
  let result = '';
  while (i < number) {
    result = `${result}${text[i]}`;
    i = i + 1;
  }
  return result;
};


//Функция countChars() из теории считает, сколько раз входит буква в предложение и при этом учитывает 
//регистр букв. То есть A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так 
//чтобы регистр букв был не важен
const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count = count + 1;
    }
    i = i + 1;
  }
  return count;
};


//Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой 
//каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
const makeItFunny = (str, n) => {
  let i = 0
  let result = ''

  while (i < str.length) {
    if ((i + 1) % n === 0) {
      let Up = str[i].toUpperCase()
      result = result + Up
    } else {
      result = result + str[i]
    }
    i = i + 1
  }

  return result
}


//В файле myMathModule.js: 
//1.Создайте функцию getTriangleArea(), которая принимает два аргумента h и b и вычисляет площадь 
//треугольника по формуле A = 1/2 * h * b, где h — высота, а b — основание треугольника.
//2.Экспортируйте функцию.
//В файле solution.js:
//1.Импортируйте функцию getTriangleArea() из модуля myMathModule.
//2.Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n
// и основанием n2/2. Используйте функцию square() (принимает число и возвращает его квадрат).
//myMathModule.js
export const getTriangleArea = (h, b) => {
  let area = 0.5 * h * b
  return area
}
//solution.js:
import { getTriangleArea } from './myMathModule.js'

const getn = (n) => {
  let area2 = getTriangleArea(n, (n ** 2) / 2)
  return area2
}