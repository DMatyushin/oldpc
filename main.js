let answerId = 0

let helpComm = [
  "ls - отобразить список файлов", 
  'cat "ИМЯФАЙЛА" - вывести содержимое файла .txt в консоль', 
  "Для открытия файла введите в консоль его имя с расширением (прим. filename.exe)", 
  "hubble -latest - подключится к телескопу Hubble и выведет в консоль его последний снимок",
  'для передачи .exe файлу параметров, используйте кавычки (прим. program.exe "параметры")',
  'unzip ИМЯФАЙЛА- извлечь архив. При необходимости указать пароль: unzip filename.rar -pass "ПАРОЛЬ"'
]

let listFiles = [
  "best_photo.jpg", 
  "gift.rar", 
  "notes.txt", 
  "sensors.exe", 
  "quiz.exe",
  "cesar.exe"
]

let answers = ["андромеда", "wi-fi", "нигер", "лама", "тесла", "марио", "плов", "фрезии"]

let questions = [
  "Первый вопрос звучит так: Назови самую близкую к нам галактику",

  "Это один из самых распространенных стандартов связи, с кодом 802.11. На текущий момент он настолько широко распространен, что он используется почти что в каждом доме.",

  "Название этой страны созвучно с одним словом, которым в оскорбительной форме можно назвать этническую группу, проживающую в этой стране.",

  "Данное животное, ареалом обитания которого являются горные цепи Анд, на вид выглядит мило, лихо, и иногда придурковато. В других регионах Земного шара встречается как правило только в зоопарках. Название этого животного присутствует в религиозном титуле оккупированной Китаем страны.",

  "Один из величайших инженеров и ученых. В его честь в Белграде открыт музей. Его имя обрело вторую жизнь благодаря фирме, выпускающей автомобили одноименной марки. Назови фамилию этого человека.",

  "ОН является главным героем самой узнаваемой серии видео игр. По совместительству, эта серия игр считается одной из самых старых. ЕГО невозможно с кем-то спутать, ибо о нем знают практически все люди, кто так или иначе сталкивался с видеоиграми. Но есть одно но. У него нет имени. Как его называют?",

  "Рецепт этого блюда относительно прост, и ингридиентов в нем немного. Однако данное блюдо имеет широкую распространенность, и огромное количество вариантов приготовления (Особенно в Средней Азии). О каком блюде идет речь?",

  "ОБЕЗЛИЧЕНО"

]

let giftFile = "ОБЕЗЛИЧЕНО"

let notesFile = [
  "7 Марта 1986 года. Сегодня по почте пришла какая-то коробка, на имя ОБЕЗЛИЧЕНО Некогда смотреть что там, заныкал в укромное место. Место на всякий случай положил в запароленный архив gift.rar. Разбросал по дому подсказки, если я вдруг пароль забуду: Дурка, Красная книга, quiz",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "23 Февраля 1986 года. Чертовы Джожда... Перехватили поставки семян и продают их теперь в тридорога, а у Пьера кроме пастернака ничего и не осталось... Надо взять в привычку заблаговременно делать запас семян",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "2 января 1986 года. Часть отложенных на закупку семян денег теперь нужно выделить на ремонт дома и участка. Здорово блин Новый Год отметили...",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "20 декабря 1985 года. Получил в награду за вклад в развитие Пеликана новенький ПК. Буду потихоньку его осваивать." 

]

let colorsExe = [
  '<span style="color:rgb(255,255,0);"> Жёлтый --> RGB(255, 255, 0)</span>',
  '<span style="color:rgb(255,192,203);">Розовый --> RGB(255, 192, 203)</span>',
  '<span style="color:rgb(255, 165, 0);">Оранжевый --> RGB(255, 165, 0)</span>',
  '<span style="color:rgb(90, 50, 240);">Цвет красивого цветка, а иногда и волос - rgb(90, 50, 240)</span>',
  '<span style="color:rgb(48, 213, 200);">Бирюзовый --> RGB(48, 213, 200)</span>',
  '<span style="color:rgb(128, 128, 128);">Серый --> RGB(128, 128, 128)</span>',
  '<span style="color:rgb(0, 0, 255);">Синий --> RGB(0, 0, 255)</span>',
  '<span style="color:rgb(0, 255, 0);">Зеленый --> RGB(0, 255, 0)</span>',
  '<span style="color:rgb(255, 0, 0);">Красный --> RGB(255, 0, 0)</span>',
  '<span style="color:rgb(128, 0, 128);">Фиолетовый --> RGB(128, 0, 128)</span>',
  '<span style="color:rgb(128, 166, 255);">Голубой --> RGB(128, 166, 255)</span>'
]



function init() {
    let block = document.getElementById('main-window')
    block.scrollTop = block.scrollHeight;

    let testArr = ["one", "two", "three"]
    console.log("test arr " + testArr.includes("one"))

    

}

function autoplay() { //аудио старт (кнопка power)
  document.getElementById('myAudio').play()
}

function autostop() { //аудио пуза (кнопка reset)
  document.getElementById('myAudio').pause()
}

function handleKeyPress(e, value, name){ //обработчик для надатия enter
    value = value.toLowerCase();

    

    let sensors = "CPU - " + getRndInteger() + " град. С, системная плата - " + getRndInteger() + " град. С."
    let block = document.getElementById('main-window')
    var key=e.keyCode || e.which;
     if (key === 13){ // Клавиша Enter
       document.getElementById('input-main').value = ""

       document.getElementById('audio-button').play()

       let p = document.createElement('p')
       p.innerHTML = '<p style="color:lightgrey; margin: 10px 10px; text-align:justify;">~~' + value + '</p>'
       block.appendChild(p)
       block.scrollTop = block.scrollHeight;
       
       
       //костыль для шифра цезаря
       let cesarCyph = value.includes("cesar")
       if (cesarCyph) {
        cesarCyph = value.split('"')
        value = "cesar"
       }
       //

       if (name == "quiz") {
        quizMessage = value
        value = "quizGame"
       }
       //

       switch (value) {
         case "ls":
           console.log("ls");
           for (i in listFiles) {printLine(listFiles[i])}
           break;
         case "best_photo.jpg":
           printLine("Ошибка, ОБЕЗЛИЧЕНО");
           break;
         case "quiz.exe":
           printLine('Добро пожаловать в мини-викторину! Просьба сохранить код окончания викторины, он может быть полезен разработчикам при отладке.')
           //document.getElementById('input-main').value = "%"
           document.getElementById('input-main').name = "quiz"
           printLine("Первый вопрос звучит так: Назови самую близкую к нам галактику")
           break;
         case "quizGame":
           quiz(quizMessage)  
           break
         case "help":
           console.log("help");
           for (i in helpComm) {printLine(helpComm[i])}
           break;
         case "colors.exe":
           printLine("Adobe Colors Library --- ver 0.4")
           for (i in colorsExe) {printLine(colorsExe[i])}
           printLine('<span style="color: red;font-size:16px;">Ошибка выполнения программы. В случае повторного сбоя обратитесь в техническую поддержку ...</span>')
           break;
         case "hubble -latest":
           printLine("Подключение произведено успешно. Время ожидания менее 1 сек.")
           printLine('<p style="text-align: center; margin: auto;"><img style="margin: auto;" src="media/hubble.png" width="750" height="550"></p>');
           printLine('<span style="font-size:12px">Галактика ARP 143, состоящая из двух галактик, сталкивающихся с другой галактикой.</span>')
           break;
         case "sensors.exe":
           printLine(sensors)
           break;
         case "cat gift.txt":
           printLine(giftFile)
           break;
          case "cat notes.txt":
           for (i in notesFile) {printLine(notesFile[i])}
           break; 
         case 'unzip gift.rar -pass "iloveyouhoney"':
             if (listFiles.includes("gift.txt")) {
              printLine('<span style="color: red;">Ошибка. Извлекаемый файл gift.txt уже существует в директории.</span>')
             }
             else {
              listFiles.push("gift.txt");
              printLine("Файл gift.txt успешно извлечен из архива.");
             }

             break;
          case "cesar":
             cesar(cesarCyph[1])
             break;
         default:
          printLine('<span style="color: red;">Неверная комманда. Повторите ввод.</span>')
           break;           
       }
     }
}

function printLine (val) {
    let block = document.getElementById('main-window')
    let p = document.createElement('p')
    p.innerHTML = '<p style="color:rgb(13, 153, 0); margin: 10px 10px; text-align:justify;">' + val + '</p>'
    block.appendChild(p)
    block.scrollTop = block.scrollHeight;
}

function getRndInteger() {
  let min = 38
  let max = 48
  return Math.floor(Math.random() * (max - min) ) + min;
}

function cesar(word) {
    //let word = "vybirlbhubarl"
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let cesarKey = 13
    let out = ""
    let j = 0

    for (var k in word) {
      i = 0
      index = alphabet.indexOf(word[k]) + cesarKey
      if (index > 25) {
          j = index - 25
          while (true) {
              j = j - 1
              if (j <= 0) {
                break
              }
              i = i + 1

              if (i == 26) {
                i = 0
                continue
              }
          }
      }

      else {
        i = index
      }
      let tmp = ""
      tmp = alphabet[i]
      out = out + tmp
      
    }
    printLine(out)
}

function quiz(value) {
  
  //value = value[1]
  
  if (answers.includes(value)) {
    answerId = answers.indexOf(value)

    if (answerId === 7) {
      printLine("Верно! Поздравляю, это был последний вопрос. Код окончания викторины - HUB") 
      printLine("Благодарим за участие!")
      document.getElementById('input-main').name = ""
    }
    else {
      printLine("Верно! Следующий вопрос:");
      document.getElementById('input-main').name = "quiz"
      printLine(questions[answerId + 1])
    }
  }
  else {
    printLine("Неверный ответ, попробуй еще раз)")
    document.getElementById('input-main').name = "quiz"
  }
  
}

