var SwearInput = document.getElementById("input-id");
var Button = document.getElementById("buttonSumbit");

function SwearGenerator(stringForSwear) {
    var Words = stringForSwear.toString().split(" ");
    var Swears = ["блять", "пиздец", "пизда", "хуй", "бля", "Бля", "сука", "Блять", "Пиздец", "Пизда", "Хуй", "Сука", "Ебать", "ебать"]
    var RandomWordPosition = Math.floor(Math.random() * Words.length)
    var RandomSwears = Math.floor(Math.random() * Swears.length)
    Words.splice(RandomWordPosition, 0, Swears[RandomSwears])
    var Result = Words.join(' ')
    return Result;
    console.log = ("Swears has loaded.")
}

Button.onclick = function() {
    SwearInput = document.getElementById("input-id");
    SwearInput.value = SwearGenerator(SwearInput.value);
    console.log = ("Swears was generated to text.")
};
