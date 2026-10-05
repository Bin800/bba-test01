function printLeaderBoard(players) {
    for (i = 0; i < players.length; i++) {
        rank = i + 1;
        medal = "";
        if (rank === 1) {
            medal = "🥇";
        } else if (rank === 2) {
            medal = "🥈";
        } else if (rank === 3) {
            medal = "🥉";
        } else {
            medal = "#"
        }
    
        console.log(`${medal} Rank ${i + 1}. ${players[i].name} - ${players[i].score}`);
    }
}

const nguoiChoi = [
    {name: "Mario", score: 1000},
    {name: "Luigi", score: 900},
    {name: "Peach", score: 800},
    {name: "Yoshi", score: 700},
    {name: "Bowser", score: 600},
]

printLeaderBoard(nguoiChoi);