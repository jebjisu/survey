// 시작 페이지 → 설문 페이지 전환
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

// 질문 표시 함수
function showQuestion(index) {
  questions.forEach((q, i) => q.style.display = i === index ? 'block' : 'none');
  progressBar.style.width = ((index + 1) / questions.length) * 100 + '%';

  document.getElementById('prevBtn').style.display = index === 0 ? 'none' : 'inline-block';
  document.getElementById('nextBtn').style.display = index === questions.length - 1 ? 'none' : 'inline-block';
  document.getElementById('submitBtn').style.display = index === questions.length - 1 ? 'inline-block' : 'none';

  // 현재 질문 안의 모든 input(radio, checkbox)에 이벤트 부여
  const inputs = questions[index].querySelectorAll('input[type="radio"], input[type="checkbox"]');
  inputs.forEach(input => {
    input.onclick = () => {
      // 라디오 선택 시 자동 다음 질문으로 이동
      if (input.type === 'radio' && currentIndex < questions.length - 1) {
        setTimeout(() => changeQuestion(1), 200); // 0.2초 뒤 자동 이동
      }
    };
  });
}

// 질문 이동 함수
function changeQuestion(step) {
  currentIndex += step;
  showQuestion(currentIndex);
}

// 설문 제출
document.getElementById('surveyForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('설문이 제출되었습니다! 감사합니다.');
});
