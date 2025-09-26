const startBtn = document.getElementById('startSurveyBtn');
const introPage = document.getElementById('introPage');
const surveyPage = document.getElementById('surveyPage');
const questions = document.querySelectorAll('.question');
const progressBar = document.getElementById('progressBar');
let currentIndex = 0;

startBtn?.addEventListener('click', () => {
  introPage.style.display = 'none';
  surveyPage.style.display = 'block';
  showQuestion(currentIndex);
});

function showQuestion(index) {
  questions.forEach((q, i) => q.style.display = i === index ? 'block' : 'none');
  progressBar.style.width = ((index + 1) / questions.length) * 100 + '%';
  document.getElementById('prevBtn').style.display = index === 0 ? 'none' : 'inline-block';
  document.getElementById('nextBtn').style.display = index === questions.length - 1 ? 'none' : 'inline-block';
  document.getElementById('submitBtn').style.display = index === questions.length - 1 ? 'inline-block' : 'none';
}

function changeQuestion(step) {
  currentIndex += step;
  showQuestion(currentIndex);
}

document.getElementById('surveyForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('설문이 제출되었습니다! 감사합니다.');
});
