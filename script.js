var SwearInput = document.getElementById("input-id");
var Button = document.getElementById("buttonSumbit");

function SwearGenerator(stringForSwear) {
    var Words = stringForSwear.toString().split(" ");
    var Swears = ["UwU", "OwO", "QwQ", "oWo", "OvO", ">W<", "^w^"]
    var RandomWordPosition = Math.floor(Math.random() * Words.length)
    var RandomSwears = Math.floor(Math.random() * Swears.length)
    Words.splice(RandomWordPosition, 0, Swears[RandomSwears])
    var Result = Words.join(' ')
    return Result;
}

Button.onclick = function() {
    SwearInput = document.getElementById("input-id");
    SwearInput.value = SwearGenerator(SwearInput.value);
};
