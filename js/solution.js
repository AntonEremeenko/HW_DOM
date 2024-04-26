(function () {
    const ul = document.getElementById('ulId');

    const nameAttr = [];
    const valueAttr = [];

    for (const element of ul.children) {
        console.log(element);
    }
    for (const attr of ul.attributes) {
        valueAttr.push(attr.value);
        nameAttr.push(attr.name);

    }

    console.log(nameAttr);
    console.log(valueAttr);

    ul.lastElementChild.innerHTML = "Привіт моє ім’я Антон";
    ul.firstElementChild.setAttribute("data-my-name", "Anton");
    ul.removeAttribute("data-dog-tail");
})()
