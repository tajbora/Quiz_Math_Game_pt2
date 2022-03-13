function addUser() {

    const p1 = document.getElementById("player1_name_input").value;
    const p2 = document.getElementById("player2_name_input").value;

    console.log("p1=" + p1)
    console.log("p2=" + p2)

    localStorage.setItem("player1_name", p1);
    localStorage.setItem("player2_name", p2);
    

    window.location.href = "quiz_game_page.html";

    console.log("addUser Getting Called")
}