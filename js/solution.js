(function () {
    const ulChilds = document.getElementById('ulId').childNodes

    const arr = [];
    const arr2 = [];
    for(const element of ulChilds) {
        if (element instanceof HTMLLIElement) {
            arr.push(element);
            arr2.push(element.innerText)
            console.log(element);
        }
    }
    console.log(arr.length);
    console.log(arr2);
})()