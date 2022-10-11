// // common wrapper for todo list
// const wrapper = document.querySelector('.wrapper');
// // 
// const wrapCheckBoxList = document.createElement('div')
// // input type text 
// const input = document.querySelector('.text');
// // btn for add task
// const btnAddCheckBox = document.querySelector('.btn');
// // 
// wrapBtn = document.querySelector('.wrapBtn');



// wrapper.append(wrapCheckBoxList);

// function createElement (status, value) {
//     let wrapCheckBox = document.createElement('div');
//         wrapCheckBox.className = 'wrapCheckBox';

//     let label = document.createElement('label');
//         label.className = 'option';
//         label.className = 'check';
//         label.textContent = value;
    
//     let checkInput = document.createElement('input');
//         checkInput.className = 'check__input';
//         checkInput.type = 'checkbox';
    
//     let checkSpan = document.createElement('span');
//         checkSpan.className = 'check__box';
    
//         label.prepend(checkInput, checkSpan);
    
//     let delCheckBox = document.createElement('div');
//         delCheckBox.textContent = '❌';

//         checkInput.checked = status;

//         if (status) {
//             label.classList.add('.line');
//         }
//         else {
//             label.classList.remove('.line');
//         }

//         wrapCheckBox.append(label, delCheckBox);

//         wrapCheckBoxList.addEventListener('click', () => {
//             let value = event.target;
//             console.log(value);
//             if (value.type == "checkbox") {
//                 label.toggleAttribute("line")
//                 // check.nextSibling.classList.toggle("checked")
//                 saveTasks()
//             } else { 
//                 // обработка нажатия на крестик
//                 // label.outerHTML = null;
//         }}
//         )

//         return wrapCheckBox;
// }

// function renderElement (status, value) {
//     wrapCheckBoxList.append(createElement(status, value));
// }

// function saveElement () {
//     let arr = [];
//     const list = document.querySelectorAll('.check');
//     list.forEach(el => {
//         arr.push({
//             status : el.childNodes[0].checked,
//             value: el.innerText,
//         })
//     });

//     localStorage.setItem('list', JSON.stringify(arr));
//     return Object.values(JSON.parse(localStorage.getItem('list'))).length;
// };

// (function main () {
//     if (localStorage.getItem('list')) {
//         let arr = JSON.parse(localStorage.getItem('list'));
//         arr.forEach(el => renderElement(el.status, el.value));
//         wrapBtn.style.display = 'block';
//     }
// })()



// btnAddCheckBox.addEventListener('click', () => {
//     renderElement(true, input.value);
//     wrapBtn.style.display = 'block';
//     input.value = null;
//     saveElement();

//     let checkIsEmpty = saveElement();
//     if(!checkIsEmpty) {
//         wrapBtn.style.display = 'none';
//         localStorage.clear();
//     }
// })




const $wrapper = document.querySelector('.wrapper');
const $input = document.querySelector('.text');
const $btnAddCheckBox = document.querySelector('.btn');
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

    let $delCheckBox = document.createElement('div');
        $delCheckBox.textContent = '❌';

        $delCheckBox.addEventListener('click', () => {
            $wrapCheckBox.parentNode.removeChild($wrapCheckBox);
            let tasks = document.querySelectorAll('.wrapCheckBox');
            let arr = [];
            tasks.forEach(el => arr.push({
                status: false,
                value: el.childNodes[0].innerText,
            }))
            localStorage.setItem('checkboxes', JSON.stringify(arr));
            let newarr = localStorage.getItem('checkboxes');
            newarr.forEach(el => $wrapCheckBoxList.prepend(createCheckBox(el.value)));
            $wrapper.append($wrapCheckBoxList, $wrapBtn);

        });

        let $wrapCheckBox = document.createElement('div');
        $wrapCheckBox.className = 'wrapCheckBox';

        $btnDelAll.addEventListener('click', () => {
            $wrapCheckBox.parentNode.removeChild($wrapCheckBox);
            localStorage.clear();
        });

        $btnDelChecked.addEventListener('click', () => {
            if ($checkInput.checked) {
                $wrapCheckBox.parentNode.removeChild($wrapCheckBox);
            }
        })
    
        $wrapCheckBox.prepend($label, $delCheckBox);

        function createObj ($value, $id) {
            let obj = {
                value: `${$value}`,
                id: `${$id}`,
                checked: $checkInput.checked,
            }
            return obj;
        }

        arr.push(createObj($value, $id, $checkInput.checked));

        function fff () {
            let arr = localStorage.getItem('checkboxes');
            arr.forEach(el => createCheckBoxList(el.value))
        }
        return $wrapCheckBox;
        
};

(function main () {
    if(localStorage.getItem('checkboxes')) {
        let arr = JSON.parse(localStorage.getItem('checkboxes'));

        arr.forEach(el => $wrapCheckBoxList.prepend(createCheckBox(el.value)))
        $wrapper.append($wrapCheckBoxList, $wrapBtn)
        
    }
})()


$btnAddCheckBox.addEventListener('click', () => createCheckBoxList());

function createCheckBoxList () {
    if ($input.value) {
        // $wrapper.style.minHeight = '283px';

        $id += 'a';

        $wrapCheckBoxList.prepend(createCheckBox($input.value));

        $wrapper.append($wrapCheckBoxList, $wrapBtn);

        localStorage.setItem('checkboxes', JSON.stringify(arr));
    }

    else {
        $input.style.border = '1px solid red';
    }

    $input.value = '';

    $input.addEventListener('input', start);

    function start () {
        $input.style.border = '1px solid #CED4DA';
    } 
}









