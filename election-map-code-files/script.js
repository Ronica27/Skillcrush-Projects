var winner; 
var createPol = function(name, partyColor){
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  return politician;
}

var poly1 = createPol("Jane", [132, 17, 11]);
var poly2 = createPol("Joe", [245, 141, 136]);

poly1.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

poly2.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,12];

poly1.electionResults[9] = 1;
poly2.electionResults[9] = 28;
poly1.electionResults[4] = 17;
poly2.electionResults[4] = 38;
poly1.electionResults[43] = 11;
poly2.electionResults[43] = 27;

poly1.votesTally = function()
{
 for (var i=0; i < this.electionResults.length; i++)
 {
     this.totalVotes = this.totalVotes + this.electionResults[i];
 }
};

poly2.votesTally = function()
{
 for (var i=0; i < this.electionResults.length; i++)
 {
     this.totalVotes = this.totalVotes + this.electionResults[i];
 }
};
poly1.votesTally();
poly2.votesTally();

var setStateResults = function(state){
    theStates[state].winner = null;
    
    if (poly1.electionResults[state] > poly2.electionResults[state])
    {
      theStates[state].winner = poly1;
    }
    else if (poly1.electionResults[state] < poly2.electionResults[state]){
      theStates[state].winner = poly2;
    }
    else{
      theStates[state].rgb = [11,32,57];
    }
  
    var stateWinner = theStates[state].winner;
 
    if (stateWinner !== null) {
       theStates[state].rgbColor = stateWinner.partyColor;
    } else {
       theStates[state].rgbColor = [11,32,57];
    }
    var stateInfoTable =   document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0]. children[0];
    var stateAbb = header.children[0].children[1];
    var name1 = body.children[0].children[0];
    var results1 = body.children[0].children[1];
    var name2 = body.children[1].children[0];
    var results2 = body.children[1].children[1];
    var nameWin = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    stateAbb.innerText = theStates[state].nameAbbrev;
    name1.innerText = poly1.name;
    name2.innerText = poly2.name;
    results1.innerText = poly1.electionResults[state];
    results2.innerText = poly2.electionResults[state];
    if (theStates[state].winner === null){
      nameWin.innerText = "DRAW";
    } else {
      nameWin.innerText = theStates[state].winner.name;
    }
};

var countryInfoTable = document.getElementById('countryResults');
var countryWinner = null;
var row = countryInfoTable.children[0].children[0];

if (poly1.totalVotes > poly2.totalVotes)
    {
      countryWinner = poly1;
    }
    else if (poly1.totalVotes < poly2.totalVotes){
      countryWinner = poly2;
    }
    else{
      countryWinner = null;
    }
 
row.children[0].innerText = poly1.name;
row.children[1].innerText = poly1.totalVotes;
row.children[2].innerText = poly2.name;
row.children[3].innerText = poly2.totalVotes;
row.children[5].innerText = countryWinner.name;
