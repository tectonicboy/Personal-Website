/* Grab the HTML button elements whose styling our javascript code will need 
 * to edit as a result of a button being clicked, in their event listeners.
 */
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

/* Variables to keep track globally of which button the user is currently on
 * because event handlers for all other buttons need to know which button's
 * hover event and interactivity to restore once that other button is clicked.
 */
var current_button = '1';
var btn_string = 'tab_btn';
var border_string = '_border';

var curr_btn_name_string = btn_string + current_button;
var curr_btn_border_name_string = curr_btn_name_string + border_string;

/* On initialization, disable button_1's border selection and cursor pointer
 * hover event since this is the first button selected by default on page load.
 */
tab_button1_border.style.pointerEvents = 'none';
tab_button1_border.style.userSelect ='none';

/* A neat little function that all buttons' ON CLICKED event handler functions
 * can call to easily hide the currently shown content, with knowledge from
 * the globally maintained state of which button was last clicked, using the
 * global state variables above.
 */
function Global_State_Hide_Content(current_button){

    console.log("Entered Hide_Content. curr_button = " + current_button);

    let array_IDs = [];
    let count_IDs;
    
    switch(current_button){
        case '1':{
   
            /* Number of content items shown for having clicked button_1. */
            count_IDs = 3;
        
            /* Content that was shown due to button_1 having been clicked. */
            array_IDs.push( 'hello_box' 
                           ,'my_intro'
                           ,'my_intro_border'
                          );                                       
            break;
        }
        
        case '2':{
            count_IDs = 1;
            array_IDs.push('Text_Work_Experience');
            break;
        }
        
        case '3':{
            count_IDs = 1;
            array_IDs.push('Text_Hobby_Projects');
            break;
        }
        
        case '4':{
            count_IDs = 1;
            array_IDs.push("Text_My_Interests");
            break;
        }
        
        case '5':{
            count_IDs = 1;
            array_IDs.push("Text_Contact_Me");
            break;
        }
    }
    
    /* Hide them before the newely pressed button's event listener for
     * ON CLICKED can now display its own relevant site content.
     */
    for(let i = 0; i < count_IDs; ++i){
        (document.getElementById(array_IDs[i])).style.display = 'none';
    }   
}

/* Simple ON HOVER event listeners to add borders to hovered buttons and to 
 * remove the borders once the mouse cursor has gone out of the button.
 */
tab_button1_border.addEventListener('mouseover', () => {
  tab_button1_border.style.border = '3px solid rgb(242, 60, 5)';
  tab_button1_border.style.borderBottomWidth = '2px';
  tab_button1_border.style.cursor = 'pointer';
});

tab_button1_border.addEventListener('mouseout', () => {
  tab_button1_border.style.border = '';
  tab_button1_border.style.cursor = 'auto';
});

tab_button2_border.addEventListener('mouseover', () => {
  tab_button2_border.style.border = '3px solid rgb(242, 60, 5)';
  tab_button2_border.style.borderBottomWidth = '2px';
  tab_button2_border.style.cursor = 'pointer';
});

tab_button2_border.addEventListener('mouseout', () => {
  tab_button2_border.style.border = '';
  tab_button2_border.style.cursor = 'auto';
});

tab_button3_border.addEventListener('mouseover', () => {
  tab_button3_border.style.border = '3px solid rgb(242, 60, 5)';
  tab_button3_border.style.borderBottomWidth = '2px';
  tab_button3_border.style.cursor = 'pointer';
});

tab_button3_border.addEventListener('mouseout', () => {
  tab_button3_border.style.border = '';
  tab_button3_border.style.cursor = 'auto';
});

tab_button4_border.addEventListener('mouseover', () => {
  tab_button4_border.style.border = '3px solid rgb(242, 60, 5)';
  tab_button4_border.style.borderBottomWidth = '2px';
  tab_button4_border.style.cursor = 'pointer';
});

tab_button4_border.addEventListener('mouseout', () => {
  tab_button4_border.style.border = '';
  tab_button4_border.style.cursor = 'auto';
});

tab_button5_border.addEventListener('mouseover', () => {
  tab_button5_border.style.border = '3px solid rgb(242, 60, 5)';
  tab_button5_border.style.borderBottomWidth = '2px';
  tab_button5_border.style.cursor = 'pointer';
});

tab_button5_border.addEventListener('mouseout', () => {
  tab_button5_border.style.border = '';
  tab_button5_border.style.cursor = 'auto';
});

/* Event handler functions for every button's ON CLICK event. Each uses globally
 * maintained state to elegantly remove the currently shown content before
 * displaying its own content to the user.
 */
tab_button1_border.addEventListener('click', () => {

    /* Thanks to more elegant logic for keeping track globally of which button
     * was previously clicked at the time a new button is clicked, every
     * button's event listener can easily pick that up and UNclick the button.
     */
    let prev_btn = document.getElementById(curr_btn_name_string);
    let prev_btn_border = document.getElementById(curr_btn_border_name_string);
    
    /* Helper locals for showing this button's necessary content elements. */
    let array_IDs = ['hello_box', 'my_intro', 'my_intro_border'];
    let count_IDs = 3;
    
    /* Put the button we were on until now to an UNCLICKED state. */    
    prev_btn.style.backgroundColor = 'black';
    prev_btn_border.style.pointerEvents = 'auto';
    prev_btn_border.style.userSelect ='auto';
    
    /* Put the button we clicked just now in a CLICKED state. */  
    tab_button1_border.style.border = '';
    tab_button1_border.style.cursor = 'auto';
    tab_button1_border.style.pointerEvents = 'none';
    tab_button1_border.style.userSelect ='none';
    
    tab_button1.style.backgroundColor = 'rgb(242, 60, 5)';

    Global_State_Hide_Content(current_button);

    /* Show this button's necessary site content HTML elements. */
    for(let i = 0; i < count_IDs; ++i){
        (document.getElementById(array_IDs[i])).style.display = 'block';
    }   

    /* Maintain the global state of which button is currently clicked to 
     * make it more elegant for every button's ON CLICK event listener function 
     * to keep track of which button was clicked until then.
     */
    current_button = '1';
    curr_btn_name_string = btn_string + current_button;
    curr_btn_border_name_string = curr_btn_name_string + border_string;
});

tab_button2_border.addEventListener('click', () => {

    let prev_btn = document.getElementById(curr_btn_name_string);
    let prev_btn_border = document.getElementById(curr_btn_border_name_string);

    /* Put the button we were on until now to an UNCLICKED state. */    
    prev_btn.style.backgroundColor = 'black';
    
    prev_btn_border.style.pointerEvents = 'auto';
    prev_btn_border.style.userSelect ='auto';
    
    /* Put the button we clicked just now in a CLICKED state. */  
    tab_button2_border.style.border = '';
    tab_button2_border.style.cursor = 'auto';
    tab_button2_border.style.pointerEvents = 'none';
    tab_button2_border.style.userSelect ='none';
    
    tab_button2.style.backgroundColor = 'rgb(242, 60, 5)';


    /* Use the maintained global state to hide the currently selected content
     * elegantly, regardless of which event listener calls it for which button.
     */
    Global_State_Hide_Content(current_button);

    
    (document.getElementById('Text_Work_Experience')).style.display = 'block';
    
    /* Maintain the global state of which button is currently clicked to 
     * make it more elegant for every button's ON CLICK event listener function 
     * to keep track of which button was clicked until then and thus more easily
     * know which content to hide by passing the globally maintained value of
     * current_button to Global_State_Hide_Content().
     */
    current_button = '2';
    curr_btn_name_string = btn_string + current_button;
    curr_btn_border_name_string = curr_btn_name_string + border_string;
});

tab_button3_border.addEventListener('click', () => {

    let prev_btn = document.getElementById(curr_btn_name_string);
    let prev_btn_border = document.getElementById(curr_btn_border_name_string);

    /* Put the button we were on until now to an UNCLICKED state. */    
    prev_btn.style.backgroundColor = 'black';
    
    prev_btn_border.style.pointerEvents = 'auto';
    prev_btn_border.style.userSelect ='auto';
    
    /* Put the button we clicked just now in a CLICKED state. */  
    tab_button3_border.style.border = '';
    tab_button3_border.style.cursor = 'auto';
    tab_button3_border.style.pointerEvents = 'none';
    tab_button3_border.style.userSelect ='none';
    
    tab_button3.style.backgroundColor = 'rgb(242, 60, 5)';


    /* Use the maintained global state to hide the currently selected content
     * elegantly, regardless of which event listener calls it for which button.
     */
    Global_State_Hide_Content(current_button);


    (document.getElementById('Text_Hobby_Projects')).style.display = 'block';
    /* Maintain the global state of which button is currently clicked to 
     * make it more elegant for every button's ON CLICK event listener function 
     * to keep track of which button was clicked until then and thus more easily
     * know which content to hide by passing the globally maintained value of
     * current_button to Global_State_Hide_Content().
     */
    current_button = '3';
    curr_btn_name_string = btn_string + current_button;
    curr_btn_border_name_string = curr_btn_name_string + border_string;
});

tab_button4_border.addEventListener('click', () => {

    let prev_btn = document.getElementById(curr_btn_name_string);
    let prev_btn_border = document.getElementById(curr_btn_border_name_string);

    /* Put the button we were on until now to an UNCLICKED state. */    
    prev_btn.style.backgroundColor = 'black';
    
    prev_btn_border.style.pointerEvents = 'auto';
    prev_btn_border.style.userSelect ='auto';
    
    /* Put the button we clicked just now in a CLICKED state. */  
    tab_button4_border.style.border = '';
    tab_button4_border.style.cursor = 'auto';
    tab_button4_border.style.pointerEvents = 'none';
    tab_button4_border.style.userSelect ='none';
    
    tab_button4.style.backgroundColor = 'rgb(242, 60, 5)';


    /* Use the maintained global state to hide the currently selected content
     * elegantly, regardless of which event listener calls it for which button.
     */
    Global_State_Hide_Content(current_button);

    (document.getElementById('Text_My_Interests')).style.display = 'block';
    
    /* Maintain the global state of which button is currently clicked to 
     * make it more elegant for every button's ON CLICK event listener function 
     * to keep track of which button was clicked until then and thus more easily
     * know which content to hide by passing the globally maintained value of
     * current_button to Global_State_Hide_Content().
     */
    current_button = '4';
    curr_btn_name_string = btn_string + current_button;
    curr_btn_border_name_string = curr_btn_name_string + border_string;
});

tab_button5_border.addEventListener('click', () => {

    let prev_btn = document.getElementById(curr_btn_name_string);
    let prev_btn_border = document.getElementById(curr_btn_border_name_string);

    /* Put the button we were on until now to an UNCLICKED state. */    
    prev_btn.style.backgroundColor = 'black';
    
    prev_btn_border.style.pointerEvents = 'auto';
    prev_btn_border.style.userSelect ='auto';
    
    /* Put the button we clicked just now in a CLICKED state. */  
    tab_button5_border.style.border = '';
    tab_button5_border.style.cursor = 'auto';
    tab_button5_border.style.pointerEvents = 'none';
    tab_button5_border.style.userSelect ='none';
    
    tab_button5.style.backgroundColor = 'rgb(242, 60, 5)';


    /* Use the maintained global state to hide the currently selected content
     * elegantly, regardless of which event listener calls it for which button.
     */
    Global_State_Hide_Content(current_button);

    (document.getElementById('Text_Contact_Me')).style.display = 'block';
    /* Maintain the global state of which button is currently clicked to 
     * make it more elegant for every button's ON CLICK event listener function 
     * to keep track of which button was clicked until then and thus more easily
     * know which content to hide by passing the globally maintained value of
     * current_button to Global_State_Hide_Content().
     */
    current_button = '5';
    curr_btn_name_string = btn_string + current_button;
    curr_btn_border_name_string = curr_btn_name_string + border_string;
});


