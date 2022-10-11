// common wrapper
const $wrapper = document.querySelector('.wrapper');
// input type text
const $input = document.querySelector('.text');
// btn add task
const $btnAddCheckBox = document.querySelector('.btn');
// wrapper for checkbox list
const $wrapCheckBoxList = document.createElement('div'); 
$wrapCheckBoxList.className =  'wrapCheckBoxList';
// block: button wrapper

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
function createCheckBoxList () {
    if ($input.value) {

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

(function main () {
    if(localStorage.getItem('checkboxes')) {
        let arr = JSON.parse(localStorage.getItem('checkboxes'));

        arr.forEach(el => $wrapCheckBoxList.prepend(createCheckBox(el.value)))
        $wrapper.append($wrapCheckBoxList, $wrapBtn)
        
    }
})()


$btnAddCheckBox.addEventListener('click', () => createCheckBoxList());











