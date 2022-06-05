var gameData = {
    diamonds: 0,
    diamondsPerClick: 1,
    diamondsPerClickCost: 10,
}

function mineDiamonds() {
    gameData.diamonds += gameData.diamondsPerClick
    document.getElementById("diamondsMined").innerHTML = gameData.diamonds + " Diamonds Mined"
}

function buyDiamondsPerClick() {
    if (gameData.diamonds >= gameData.diamondsPerClickCost){
        gameData.diamonds -= gameData.diamondsPerClickCost
        gameData.diamondsPerClick += 1
        gameData.diamondsPerClickCost *= 2
        document.getElementById("diamondsMined").innerHTML = gameData.diamonds + " Diamonds Mined"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Miner (Currently Level " + gameData.diamondsPerClick + ") Cost: " + gameData.diamondsPerClickCost + " Diamonds"
    }
}

var mainGameLoop = window.setInterval(function() {
    mineDiamonds()
}, 1000)

var saveGameLoop = window.setInterval(function(){
    localStorage.setItem("diamondMinerSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("diamondMinerSave"))
if (savegame !== null) {
    gameData = savegame
}