let bestScore = -Infinity
let  bestMove;
function bestMove(){
    for(let i=0;i<3;i++){
        for(letj=0;j<3;j++)
//is spot available
if (board[i][j]==''){
    board[i][j]=ai;
    let score =minimax(board,0,true);
    board[i][j]==''
    if(score>bestScore){
        bestScore = score;
        bestMove = {i,j};

    }
}

    }


    let move = random(available);
    board[bestMove.i][bestMove.j] = ai;
    currentPlayer = human;
}
let scores = {
    'x' :1,
    'o' :-1,
    'tie' :0
}
function minimax(board,depth,isMaximizing){
    let result =checkWinner();
    if(result !== null){
        return score[result];
        
    }

    if (isMaximizing){
        let bestScore =-Infinity
        for(let i=0;i<3;i++){
            for(letj=0;j<3;j++) 
            if (board[i][j]==''){
                board[i][j]=ai;
                let score = minimax(board,depth+1,false)
                (board[i][j]=='')
                score = max(score,bestScore)
                if (score>bestScore){
                    bestScore=score;
                }
    }
        }
    }
        return bestScore;
    return 1
}else{      let bestScore =Infinity
    for(let i=0;i<3;i++){
        for(letj=0;j<3;j++) 
        if (board[i][j]==''){
            board[i][j]=human;
            let score = min(score,bestScore)
            (board[i][j]=='')
            if (score<bestScore){
                bestScore=score;
            }
}
    }
    else{

    }
}
