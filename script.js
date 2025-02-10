const wordPairs = [
  { "english": "ability", "thai": "ความสามารถ" },
  { "english": "after", "thai": "หลังจาก" },
  { "english": "always", "thai": "เสมอ" },
  { "english": "animal", "thai": "สัตว์" },
  { "english": "answer", "thai": "คำตอบ" },
  { "english": "arrive", "thai": "มาถึง" },
  { "english": "beautiful", "thai": "สวยงาม" },
  { "english": "believe", "thai": "เชื่อ" },
  { "english": "book", "thai": "หนังสือ" },
  { "english": "brother", "thai": "พี่ชาย" },
  { "english": "cat", "thai": "แมว" },
  { "english": "change", "thai": "การเปลี่ยนแปลง" },
  { "english": "child", "thai": "เด็ก" },
  { "english": "choice", "thai": "ตัวเลือก" },
  { "english": "clean", "thai": "สะอาด" },
  { "english": "clothes", "thai": "เสื้อผ้า" },
  { "english": "cold", "thai": "หนาว" },
  { "english": "come", "thai": "มา" },
  { "english": "community", "thai": "ชุมชน" },
  { "english": "conversation", "thai": "การสนทนา" },
  { "english": "day", "thai": "วัน" },
  { "english": "different", "thai": "แตกต่าง" },
  { "english": "dog", "thai": "สุนัข" },
  { "english": "door", "thai": "ประตู" },
  { "english": "eat", "thai": "กิน" },
  { "english": "end", "thai": "จบ" },
  { "english": "example", "thai": "ตัวอย่าง" },
  { "english": "family", "thai": "ครอบครัว" },
  { "english": "father", "thai": "พ่อ" },
  { "english": "find", "thai": "หา" },
  { "english": "friend", "thai": "เพื่อน" },
  { "english": "future", "thai": "อนาคต" },
  { "english": "girl", "thai": "เด็กหญิง" },
  { "english": "give", "thai": "ให้" },
  { "english": "go", "thai": "ไป" },
  { "english": "good", "thai": "ดี" },
  { "english": "happy", "thai": "มีความสุข" },
  { "english": "have", "thai": "มี" },
  { "english": "home", "thai": "บ้าน" },
  { "english": "hour", "thai": "ชั่วโมง" },
  { "english": "house", "thai": "บ้าน" },
  { "english": "idea", "thai": "ความคิด" },
  { "english": "in", "thai": "ใน" },
  { "english": "interest", "thai": "ความสนใจ" },
  { "english": "it", "thai": "มัน" },
  { "english": "join", "thai": "เข้าร่วม" },
  { "english": "judge", "thai": "ตัดสิน" },
  { "english": "kind", "thai": "ใจดี" },
  { "english": "language", "thai": "ภาษา" },
  { "english": "laugh", "thai": "หัวเราะ" },
  { "english": "learning", "thai": "การเรียนรู้" },
  { "english": "live", "thai": "ใช้ชีวิต" },
  { "english": "look", "thai": "มอง" },
  { "english": "man", "thai": "ผู้ชาย" },
  { "english": "market", "thai": "ตลาด" },
  { "english": "mother", "thai": "แม่" },
  { "english": "move", "thai": "เคลื่อนไหว" },
  { "english": "much", "thai": "มาก" },
  { "english": "music", "thai": "ดนตรี" },
  { "english": "name", "thai": "ชื่อ" },
  { "english": "new", "thai": "ใหม่" },
  { "english": "night", "thai": "คืน" },
  { "english": "now", "thai": "ตอนนี้" },
  { "english": "old", "thai": "เก่า" },
  { "english": "open", "thai": "เปิด" },
  { "english": "people", "thai": "ผู้คน" },
  { "english": "place", "thai": "สถานที่" },
  { "english": "point", "thai": "จุด" },
  { "english": "problem", "thai": "ปัญหา" },
  { "english": "promise", "thai": "สัญญา" },
  { "english": "quality", "thai": "คุณภาพ" },
  { "english": "question", "thai": "คำถาม" },
  { "english": "rain", "thai": "ฝน" },
  { "english": "read", "thai": "อ่าน" },
  { "english": "right", "thai": "ถูกต้อง" },
  { "english": "school", "thai": "โรงเรียน" },
  { "english": "see", "thai": "เห็น" },
  { "english": "she", "thai": "เธอ" },
  { "english": "sister", "thai": "พี่สาว" },
  { "english": "smile", "thai": "ยิ้ม" },
  { "english": "student", "thai": "นักเรียน" },
  { "english": "story", "thai": "เรื่องราว" },
  { "english": "strong", "thai": "แข็งแรง" },
  { "english": "study", "thai": "ศึกษา" },
  { "english": "summer", "thai": "ฤดูร้อน" },
  { "english": "take", "thai": "เอา" },
  { "english": "talk", "thai": "พูด" },
  { "english": "tea", "thai": "ชา" },
  { "english": "thank", "thai": "ขอบคุณ" },
  { "english": "time", "thai": "เวลา" },
  { "english": "today", "thai": "วันนี้" },
  { "english": "together", "thai": "ด้วยกัน" },
  { "english": "tree", "thai": "ต้นไม้" },
  { "english": "trust", "thai": "ความไว้วางใจ" },
  { "english": "understand", "thai": "เข้าใจ" },
  { "english": "up", "thai": "ขึ้น" },
  { "english": "visit", "thai": "เยี่ยมเยือน" },
  { "english": "walk", "thai": "เดิน" },
  { "english": "watch", "thai": "ดู" },
  { "english": "water", "thai": "น้ำ" },
  // เพิ่มคำศัพท์ตามที่ต้องการ
];

let currentWordPair = {};
let score = 0;
let timer;
let timeLeft = 10;
let usedWords = []; // ติดตามคำที่ใช้แล้ว

// สร้างออบเจ็กต์ไฟล์เสียง
const clickSound = new Audio('click.mp4');
const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');
const resetSound = new Audio('reset.WAV');

// ฟังก์ชันที่ถูกเรียกเมื่อเริ่มเกมหรือเมื่อโหลดหน้าใหม่
window.onload = function () {
  if (localStorage.getItem('gameStarted') === 'true') {
    score = parseInt(localStorage.getItem('score')) || 0;
    document.getElementById('score').textContent = `คะแนน: ${score}`;
    nextWord();
  }
};

// ฟังก์ชันตั้งเวลานับถอยหลัง
function startTimer() {
  timeLeft = 10;
  updateTimerDisplay();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById('feedback').textContent = "หมดเวลา!";
      document.getElementById('feedback').className = 'incorrect';
      setTimeout(nextWord, 1000);
    }
  }, 1000);
}

// ฟังก์ชันอัปเดตการแสดงผลเวลา
function updateTimerDisplay() {
  document.getElementById('timer').textContent = `เวลาที่เหลือ: ${timeLeft} วินาที`;
}

// ฟังก์ชันที่เลือกคำใหม่และอัปเดตหน้าจอ
function nextWord() {
  if (usedWords.length === wordPairs.length) {
    document.getElementById('english-word').textContent = "เกมจบแล้ว!";
    document.getElementById('feedback').textContent = "ไม่มีคำเพิ่มเติม";
    document.getElementById('feedback').className = 'incorrect';
    clearInterval(timer);
    
    // ซ่อนปุ่มตัวเลือกคำตอบเมื่อไม่มีคำศัพท์เพิ่มเติม
    document.getElementById('options').style.display = 'none';
    return;
  }

  clearInterval(timer);
  startTimer();

  const remainingWords = wordPairs.filter((_, index) => !usedWords.includes(index));
  if (remainingWords.length === 0) return;

  const randomIndex = Math.floor(Math.random() * remainingWords.length);
  currentWordPair = remainingWords[randomIndex];
  const originalIndex = wordPairs.findIndex(pair => pair.english === currentWordPair.english);
  usedWords.push(originalIndex);

  document.getElementById('english-word').textContent = currentWordPair.english;

  const options = [currentWordPair.thai];
  while (options.length < 3) {
    const randomPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    if (!options.includes(randomPair.thai)) {
      options.push(randomPair.thai);
    }
  }

  options.sort(() => Math.random() - 0.5);

  document.getElementById('option1').textContent = options[0];
  document.getElementById('option2').textContent = options[1];
  document.getElementById('option3').textContent = options[2];

  document.getElementById('feedback').textContent = "";
  // แสดงปุ่มตัวเลือกคำตอบอีกครั้งเมื่อมีคำศัพท์ใหม่
  document.getElementById('options').style.display = 'block';
}

// ฟังก์ชันตรวจคำตอบ
function checkAnswer(selectedOption) {
  clearInterval(timer);
  const selectedAnswer = document.getElementById(selectedOption).textContent;

  if (selectedAnswer === currentWordPair.thai) {
    score++;
    document.getElementById('feedback').textContent = "ถูกต้อง!";
    document.getElementById('feedback').className = 'correct';
    playCorrectSound();
  } else {
    document.getElementById('feedback').textContent = `ผิด! คำที่ถูกต้องคือ: ${currentWordPair.thai}`;
    document.getElementById('feedback').className = 'incorrect';
    playIncorrectSound();
  }

  document.getElementById('score').textContent = `คะแนน: ${score}`;
  localStorage.setItem('score', score);

  setTimeout(nextWord, 1000);
}

// ฟังก์ชันรีเซ็ตเกม
function resetGame() {
  resetSound.play();
  score = 0;
  usedWords = [];
  document.getElementById('score').textContent = `คะแนน: ${score}`;
  document.getElementById('feedback').textContent = "";
  clearInterval(timer);
  nextWord();
  localStorage.setItem('score', score);
}

// ฟังก์ชันเล่นเสียง
function playClickSound() {
  clickSound.pause(); 
  clickSound.currentTime = 0;
  clickSound.play();
}

function playCorrectSound() {
  correctSound.pause(); 
  correctSound.currentTime = 0;
  correctSound.play();
}

function playIncorrectSound() {
  incorrectSound.pause();  // หยุดเสียงที่เล่นอยู่
  incorrectSound.currentTime = 0;  // รีเซ็ตเวลาเริ่มต้นของเสียง
  incorrectSound.play();
}

function playResetSound() {
  resetSound.pause();  // หยุดเสียงที่เล่นอยู่
  resetSound.currentTime = 0;  // รีเซ็ตเวลาเริ่มต้นของเสียง
  resetSound.play();  // เล่นเสียงใหม่
}
let currentQuestion = 0; // ตัวแปรนับจำนวนข้อ

function nextWord() {
  if (usedWords.length === wordPairs.length) {
    document.getElementById('english-word').textContent = "เกมจบแล้ว!";
    document.getElementById('feedback').textContent = "ไม่มีคำเพิ่มเติม";
    document.getElementById('feedback').className = 'incorrect';
    clearInterval(timer);
    document.getElementById('options').style.display = 'none';
    return;
  }

  clearInterval(timer);
  startTimer();

  currentQuestion++; // เพิ่มเลขข้อ
  document.getElementById('question-counter').textContent = `${currentQuestion}/${wordPairs.length}`;

  const remainingWords = wordPairs.filter((_, index) => !usedWords.includes(index));
  if (remainingWords.length === 0) return;

  const randomIndex = Math.floor(Math.random() * remainingWords.length);
  currentWordPair = remainingWords[randomIndex];
  const originalIndex = wordPairs.findIndex(pair => pair.english === currentWordPair.english);
  usedWords.push(originalIndex);

  document.getElementById('english-word').textContent = currentWordPair.english;

  const options = [currentWordPair.thai];
  while (options.length < 3) {
    const randomPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    if (!options.includes(randomPair.thai)) {
      options.push(randomPair.thai);
    }
  }

  options.sort(() => Math.random() - 0.5);

  document.getElementById('option1').textContent = options[0];
  document.getElementById('option2').textContent = options[1];
  document.getElementById('option3').textContent = options[2];

  document.getElementById('feedback').textContent = "";
  document.getElementById('options').style.display = 'block';
}

// ใน HTML เพิ่ม <div id="question-counter" style="position: absolute; top: 10px; right: 10px; font-size: 18px; color: #fff;"></div>
