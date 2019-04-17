$(function() {
  init();
  console.log("Main Init Called");
});

function InitFilesRanksBrd() {
	var index = 0;
	var file = FILES.FILE_A;
	var rank = RANKS.RANK_1;
	var sq = SQUARES.A1;

// Clearing all of 120 squares inside the board to offboard
  for(index = 0; index < BRD_SQ_NUM; ++index) {
  FilesBrd[index] = SQUARES.OFFBOARD;
  RanksBrd[index] = SQUARES.OFFBOARD;
}

// Set the rank
for(rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
  for(file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
    sq = FR2SQ(file,rank);
    FilesBrd[sq] = file;
    RanksBrd[sq] = rank;
  }
}
}

function init() {
  console.log("Init() called");
}
