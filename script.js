const container = document.getElementById("container");

function showData() {
    fetch("data.json").then((res) => res.json())
        .then((json) => {
            let outData = "";
            json.forEach(function(cart) {
                outData += `
                <div class="cart-container">
                <div class="cart-image">
                    <img src="image/${cart.imageName}" alt="${cart.imageName}">
                </div>
                <div class="cart-header">
                    <h2>${cart.title}</h2>
                    <p>${cart.trans}</p>
                </div>
                <div>
                    <button onclick="textSpeech(this)" data-text="${cart.title}">تلفظ</button>
                </div>
            </div>
        `;
            });
            container.innerHTML += outData;
        })
}
showData();
let speech = new SpeechSynthesisUtterance();
speech.volume = 10; // From 0 to 1
speech.rate = .8; // From 0.1 to 10
speech.pitch = 2; // From 0 to 2
function textSpeech(e) {
    speech.text = e.dataset.text;
    window.speechSynthesis.speak(speech);
}