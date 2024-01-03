let inputBx = document.getElementById("inputBx");
let list = document.getElementById("list");

inputBx.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (inputText) => {
    if (inputText.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            ${inputText} 
           <button class="noselect" onclick="deleteItem(this)">
           ❌
        </button>
        `;

        list.appendChild(listItem);
    }
};

window.deleteItem = (button) => {
    let listItem = button.parentNode;
    listItem.remove();
};