const $teacher = document.getElementById('teacher');
const $teacherOptions = document.getElementById('teacher-options');
const $listDay = document.getElementById('list-day');
const $hourDate = document.getElementById('Hour-day');
const $hourWeekend = document.getElementById('hour-weekend');
const $weekend = document.getElementById('weekend');

$teacher.addEventListener('click', (event) => {
  $teacherOptions.classList.toggle('active');
})
$listDay.addEventListener('click', (event) => {
  $hourDate.classList.toggle('active');
})
$hourWeekend.addEventListener('click', () => {
  $weekend.classList.toggle('active');
})