
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

        $delCheckBox.addEventListener('click', () => {$wrapCheckBox.parentNode.removeChild($wrapCheckBox);});

        let $wrapCheckBox = document.createElement('div');
        $wrapCheckBox.className = 'wrapCheckBox';

        $btnDelAll.addEventListener('click', () => {$wrapCheckBox.parentNode.removeChild($wrapCheckBox);});

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
            console.log(arr);
        }
        return $wrapCheckBox;
        
}
$btnAddCheckBox.addEventListener('click', createCheckBoxList);

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








