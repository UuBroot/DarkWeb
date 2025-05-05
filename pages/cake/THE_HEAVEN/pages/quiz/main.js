let main = document.getElementById('main');
let header = document.getElementById('header');
function gameOver() {
    main.innerHTML = `
    <h2>You are not worthy</h2>
        <img src="img/gameover.gif" alt="">
    `;
    header.innerHTML = '';
}
function gameEnd() {
    window.open('hell/index.html', '_blank');
}
function q2() {
    main.innerHTML = `
    <h2>Question2: Fortnite vs PUBG?</h2>
    <div style="display: flex;justify-content: space-between;width: 60%;margin-left: auto;margin-right: auto;">
        <button onclick="gameOver()">Fotite</button>
        <button onclick="q3()">PUGE</button>
    </div>

    `;
}
function q3() {
    main.innerHTML = `
    <h2>Question3: If you were to save 5 people by killing one, whould you do it?</h2>
    <div style="display: flex;justify-content: space-between;width: 60%;margin-left: auto;margin-right: auto;">
        <button onclick="gameOver()">Yes</button>
        <button onclick="q4()">No</button>
    </div>

    `;
}
function q4() {
    main.innerHTML = `
    <h2>Question4: What is the meaning of life?</h2>
    <div style="display: flex;justify-content: space-between;width: 60%;margin-left: auto;margin-right: auto;">
        <button onclick="q5()">PUGE</button>    
        <button onclick="gameOver()">Having a family</button>
    </div>

    `;
}
function q5() {
    main.innerHTML = `
    <h2>Question5: Is sex valid?</h2>
    <div style="display: flex;justify-content: space-between;width: 60%;margin-left: auto;margin-right: auto;">
        <button onclick="q6()">Yes</button>    
        <button onclick="gameOver()">No</button>
    </div>

    `;
}
function q6() {
    main.innerHTML = `
    <h2>Question6: Do you believe in ghosts?</h2>
    <div style="display: flex;justify-content: space-between;width: 60%;margin-left: auto;margin-right: auto;">      
        <button onclick="q7()">No</button>
        <button onclick="gameOver()">Yes</button>  
    </div>

    `;
}
function q7() {
    main.innerHTML = `
    <h2 onclick="showSecretQuestion()">Question7: Do you belieeeeeeeeve in god?</h2>
    <div id="secret" style="display: flex;justify-content: space-between;width: 60%;margin-left: auto;margin-right: auto;">      
        <button onclick="gameOver()">Yes</button>
        <button onclick="gameOver()">Yes</button>  
    </div>

    `;
}
function showSecretQuestion() {
    document.getElementById('secret').innerHTML += `
    <button onclick="q8()" style="background-color:red;">No</button>
    `;
}
function q8() {
    main.innerHTML = `
    <h2 onclick="showSecretQuestion()">Question8: Do you believe in more then one god?</h2>
    <div id="secret" style="display: flex;justify-content: space-between;width: 60%;margin-left: auto;margin-right: auto;">      
        <button onclick="q9()">Yes</button>
        <button onclick="gameOver()">No</button>  
    </div>

    `;
}
function q9() {
    main.innerHTML = `
    <h2 onclick="showSecretQuestion()">Question9: Do you love your pet?</h2>
    <div id="secret" style="display: flex;justify-content: space-between;width: 60%;margin-left: auto;margin-right: auto;">      
        <button onclick="gameEnd()">Yes</button>
        <button onclick="gameOver()">No</button>  
    </div>

    `;
}