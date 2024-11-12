const tab_button1 = document.getElementById('tab_btn1');
const tab_button2 = document.getElementById('tab_btn2');
const tab_button3 = document.getElementById('tab_btn3');
const tab_button4 = document.getElementById('tab_btn4');
const tab_button5 = document.getElementById('tab_btn5');

const tab_button1_border = document.getElementById('tab_btn1_border');
const tab_button2_border = document.getElementById('tab_btn2_border');
const tab_button3_border = document.getElementById('tab_btn3_border');
const tab_button4_border = document.getElementById('tab_btn4_border');
const tab_button5_border = document.getElementById('tab_btn5_border');

/* Immediately disable button_1's border selection and cursor pointer event
 * because this is the first button selected by default on page load.
 */
tab_button1_border.style.pointerEvents = 'none';
tab_button1_border.style.userSelect ='none';

/* Add hover effect with an orange border and pointer cursor to all buttons. */

tab_button1_border.addEventListener('mouseover', () => {
  tab_button1_border.style.border = '2px solid rgb(242, 60, 5)';
  tab_button1_border.style.cursor = 'pointer';
});

tab_button1_border.addEventListener('mouseout', () => {
  tab_button1_border.style.border = '';
  tab_button1_border.style.cursor = 'auto';
});

tab_button2_border.addEventListener('mouseover', () => {
  tab_button2_border.style.border = '2px solid rgb(242, 60, 5)';
  tab_button2_border.style.cursor = 'pointer';
});

tab_button2_border.addEventListener('mouseout', () => {
  tab_button2_border.style.border = '';
  tab_button2_border.style.cursor = 'auto';
});

tab_button3_border.addEventListener('mouseover', () => {
  tab_button3_border.style.border = '2px solid rgb(242, 60, 5)';
  tab_button3_border.style.cursor = 'pointer';
});

tab_button3_border.addEventListener('mouseout', () => {
  tab_button3_border.style.border = '';
  tab_button3_border.style.cursor = 'auto';
});

tab_button4_border.addEventListener('mouseover', () => {
  tab_button4_border.style.border = '2px solid rgb(242, 60, 5)';
  tab_button4_border.style.cursor = 'pointer';
});

tab_button4_border.addEventListener('mouseout', () => {
  tab_button4_border.style.border = '';
  tab_button4_border.style.cursor = 'auto';
});

tab_button5_border.addEventListener('mouseover', () => {
  tab_button5_border.style.border = '2px solid rgb(242, 60, 5)';
  tab_button5_border.style.cursor = 'pointer';
});

tab_button5_border.addEventListener('mouseout', () => {
  tab_button5_border.style.border = '';
  tab_button5_border.style.cursor = 'auto';
});

















