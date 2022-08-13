
// Selecionar elemento
let container = document.querySelector('.container');
console.log("Elemento selecionado: ", container);

// Pegar nodos filhos
let containerChilds = container.childNodes;
console.log("childNodes: ", containerChilds);

// Pegar primeiro filho da lista
let firstNode = container.firstChild;
console.log("firstChild: ", firstNode);

// Pegar o nome do node
let nodeName = container.nodeName;
console.log("nodeName: ", nodeName);

// Pegar valor (texto) do nodo
let nodeValue = container.childNodes[3].firstChild.nodeValue;
console.log("nodeValue: ", nodeValue);

// Pegar o tipo elemento
let elemType = container.nodeType;
console.log("nodeType: ", elemType); // 1 - Element / 2 - Attr

// Pegar o elemento "pai"
let parentElem = container.parentElement;
console.log("parentElement: ", parentElem);

// Pegar primeiro elemento filho
let firstChildElem = container.firstElementChild;
console.log("firstElementChild: ", firstChildElem);

// Pegar o último elemento filho
let lastChildElem = container.lastElementChild;
console.log("lastElementChild: ", lastChildElem);