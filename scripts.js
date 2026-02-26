function buttonclicked(){
    const respuestas = [
        "Aye",
        "Nay",
        "Thee shall inquire yet again",
        "Aye?",
        "Nay?",
        "Perhaps thee is a nincompoop",
        "Perish.",
        "Thy input is likely to be correct",
        "Thy inquiry is certainly correct",
    ];
    

    const randomNumber = Math.floor(Math.random()*respuestas.length);
    document.getElementById("answer").textContent=respuestas[randomNumber];
}