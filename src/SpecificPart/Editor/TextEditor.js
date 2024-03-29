const editor = document.getElementById('editor');
const btnBold = document.getElementById('btn-bold');
const btnItalic = document.getElementById('btn-italic');
const btnUnderline = document.getElementById('btn-underline');
const btnStrike = document.getElementById('btn-strike');
const btnOrderedList = document.getElementById('btn-ordered-list');
const btnUnorderedList = document.getElementById('btn-unordered-list');

btnBold.addEventListener('click', () => {
    setStyle('b');
})

btnItalic.addEventListener('click', () => {
    setStyle('i');
})

btnUnderline.addEventListener('click', () => {
    setStyle('u');
})

btnStrike.addEventListener('click', () => {
    setStyle('s');
})

btnOrderedList.addEventListener('click', () => {
    setStyle('insertOrderedList');
})

btnUnorderedList.addEventListener('click', () =>{
    setStyle('insertUnorderedList');
})

function setStyle(style) {
    // document.execCommand(style);
    // execCommand 안쓰고 에디터 만들기
    let node = document.createElement(style);
    let selected = window.getSelection().getRangeAt(0);
    console.log(node);
    console.log(selected);
    node.innerText = selected;
    selected.deleteContents();
    selected.insertNode(node);
    focusEditor();
}

function focusEditor() {
    /* 
        focus : 포커스를 받을 수 있는 경우 지정된 요소에 포커스를 설정.
            포커스가 있는 요소는 기본젖ㄱ으로 키보드 및 유사한 이벤트를 수신하는 요소이다.
        preventScroll : 새로 초점을 맞춘 요소를 보기 위해 브라우저가 문서를 스크롤해야 하는지 여부를 나타냄.
        focusVisible : true 요소에 포커스가 있음을 시각적으로 표시하기 위해 설정하는 boolean 값이다.
    */ 
    editor.focus();
}

