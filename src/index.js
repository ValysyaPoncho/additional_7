module.exports = function solveSudoku(matrix) {
  var matrixProt = matrix;

  function replOfPasses (matrixProt) {
    for (let i = 0; i < matrixProt.length; i++) {
      for (let j = 0; j < matrixProt[i].length; j++) {
        if (matrixProt[i][j] == 0) {
          matrixProt[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        };
      };
    };
    return matrixProt;
  };

 
  function goOverLine (matrixProt) {
    var arrPos = [];
    for (let i = 0; i < matrixProt.length; i++) {
      for (let j = 0; j < matrixProt[i].length; j++) {
        if (typeof matrixProt[i][j] == "object") {
          arrPos.push(j);
        };
      };
      for (let j = 0; j < arrPos.length; j++) {
        for (let l = 0; l < matrixProt[i][arrPos[j]].length; l++) {
          for (let k = 0; k < matrixProt[i].length; k++) {
            if (matrixProt[i][arrPos[j]][l] == matrixProt[i][k]) {
              matrixProt[i][arrPos[j]].splice(l, 1);
              if (matrixProt[i][arrPos[j]].length == 1) {
                matrixProt[i][arrPos[j]] = matrixProt[i][arrPos[j]][0];
              };
            };
          };
        };
      };
    };
    return matrixProt;
  };


  function goOverColumn (matrixProt) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (typeof matrixProt[i][j] == "object") {
          for (let g = 0; g < 9; g++) {
            for (let k = 0; k < matrixProt[i][j].length; k++) {
              if (matrixProt[i][j][k] == matrixProt[g][j] && typeof matrixProt[g][j] != "object") {
                matrixProt[i][j].splice(k, 1);
                if (matrixProt[i][j].length == 1) {
                  matrixProt[i][j] = matrixProt[i][j][0];
                };
              };
            };
          };
        };
      };
    };
    return matrixProt;
  };

  return goOverColumn(goOverLine(replOfPasses(matrixProt)));
};