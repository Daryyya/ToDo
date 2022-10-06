
const $wrapper = document.querySelector('.wrapper');
const $input = document.querySelector('.text');
const $btnAddCheckBox = document.querySelector('button');



const $wrapCheckBoxList = document.createElement('div'); 
$wrapCheckBoxList.className =  'wrapCheckBoxList';



// 

const $wrapBtn = document.createElement('div');
$wrapBtn.className = 'wrapBtn';

const $btnDelChecked = document.createElement('button');
$btnDelChecked.className = 'btnDelChecked';
$btnDelChecked.textContent = 'Удалить завершенные задачи';


const $btnDelAll = document.createElement('button');
$btnDelAll.className = 'btnDelAll';
$btnDelAll.textContent = 'Удалить все';

$wrapBtn.prepend($btnDelChecked, $btnDelAll);

//

let $id = '';
let arr = [];



function createCheckBox ($value) {

    let $label = document.createElement('label');
    $label.className = 'option';
    $label.className = 'check';
    $label.for = `${$id}`
    $label.textContent = `${$value}`;

    let $checkInput = document.createElement('input');
    $checkInput.className = 'check__input';
    $checkInput.id = `${$id}`;
    $checkInput.type = 'checkbox';

    let $checkSpan = document.createElement('span');
    $checkSpan.className = 'check__box';

    $label.prepend($checkInput, $checkSpan)

        // $label.addEventListener('click', addCheckedValue);
        // function addCheckedValue () {
        //     if ($checkInput.checked === 'true') {
        //         $label.style.textDecoration = 'none';

        //     }
        //     else {
        //     $label.style.textDecoration = 'line-through';
        //     $label.style.opacity = '0.5';
        //     }
        // }

    let $delCheckBox = document.createElement('div');
        $delCheckBox.textContent = '❌';

        $delCheckBox.addEventListener('click', () => {$wrapCheckBox.innerHTML = '';});

        let $wrapCheckBox = document.createElement('div');
        $wrapCheckBox.className = 'wrapCheckBox';

        $btnDelAll.addEventListener('click', () => {$wrapCheckBox.innerHTML = '';});
    
        $wrapCheckBox.prepend($label, $delCheckBox);

        function createObj ($value, $id) {
            let obj = {
                value: `${$value}`,
                id: `${$id}`,
            }
            return obj;
        }

        arr.push(createObj($value, $id));

        console.log(arr);


        return $wrapCheckBox;
        
}



$btnAddCheckBox.addEventListener('click', createCheckBoxList);

function createCheckBoxList () {
    if ($input.value) {
        $wrapper.style.minHeight = '283px';

        $id += 'a';

        $wrapCheckBoxList.prepend(createCheckBox($input.value));

        $wrapper.append($wrapCheckBoxList, $wrapBtn);

        localStorage.setItem('checkboxes', JSON.stringify(arr));
    }

    else {
        $input.style.border = '1px solid red';
    }

    $input.value = '';

    $input.addEventListener('$input', start);

    function start () {
        $input.style.border = '1px solid #CED4DA';
    } 
}

// const url = 'http://localhost:3000'



// let test = fetch(url + '/getsomedata').then((res) => res.json()).then((data) => console.log(data.message))

// let aaaa = {
//     arr: [1, 2, 3]
// }

// async function ttt () {
//     let response = await fetch(url + '/test', {
//         method:"POST", 
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(arr)})
//     let data = await response.json()
//     alert(data.mes)
// }

// ttt();
// const btnReg = document.querySelector('.reg');

// const popup = document.createElement('div');
// popup.className = 'popup';
// document.body.prepend(popup);

// const modal = document.createElement('div');
// modal.className = 'modal';
// popup.prepend(modal);

// btnReg.addEventListener('click', () => alert('hello'));

const url = 'https://virtserver.swaggerhub.com/a-berezhkov/todo_app_sc_bc/1.0.0/rest-user';

const formTest = document.querySelector('.formTest');
const btnTest = document.querySelector('.btnTest');

const input1 = document.getElementById('1');
const input2 = document.getElementById('2');
const input3 = document.getElementById('3');














let response = fetch(url).then((res) => res.json()).then((data) => console.log(data));








