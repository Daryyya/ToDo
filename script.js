
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

function createCheckBox (value) {

    let $checkBox = document.createElement('input');
        $checkBox.type = 'checkbox';
        $checkBox.id = `${$id}`;
        $checkBox.className = 'checkBox';

    let $label = document.createElement('label');
        $label.for = `${$id}`;
        $label.textContent = `${value}`;
        $label.prepend($checkBox);

        $label.addEventListener('click', addCheckedValue);
        function addCheckedValue () {
            $label.style.textDecoration = 'line-through';
            $label.style.opacity = '0.5';
        }

    let $delCheckBox = document.createElement('div');
        $delCheckBox.textContent = '❌';

        $delCheckBox.addEventListener('click', () => {$wrapCheckBox.innerHTML = '';});

        let $wrapCheckBox = document.createElement('div');
        $wrapCheckBox.className = 'wrapCheckBox';

        $btnDelAll.addEventListener('click', () => {$wrapCheckBox.innerHTML = '';});
    
        $wrapCheckBox.prepend($label, $delCheckBox);

        return $wrapCheckBox;
}



$btnAddCheckBox.addEventListener('click', createCheckBoxList);

function createCheckBoxList () {
    if ($input.value) {
        $wrapper.style.minHeight = '283px';

        $wrapCheckBoxList.prepend(createCheckBox($input.value));

        $wrapper.append($wrapCheckBoxList, $wrapBtn);
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

