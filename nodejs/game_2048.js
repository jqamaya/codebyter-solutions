process.stdin.resume();
process.stdin.setEncoding('utf8');

let stdin = '';
process.stdin.on('data', (chunk) => {
  stdin = `${stdin}${chunk}`;
}).on('end', () => {
  const lines = stdin.trim().split('\n');
  if (lines.length === 0) {
    process.stdout.write("" + '\n');
    return;
  }
  const direction = lines[0];
  const size = 4;
  let grid = [];
  const row1 = lines[1].split(' ');
  const row2 = lines[2].split(' ');
  const row3 = lines[3].split(' ');
  for (let i = 0; i < 4; i++) {
    grid[i] = [];
    const row = lines[i + 1].split(' ');
    for (let j = 0; j < row.length; j++) {
      grid[i][j] = parseInt(row[j]);
    }
  }
  
  switch (direction) {
    case "up":
      grid = moveUp(grid, size);
      break;
    case "down":
      grid = moveDown(grid, size);
      break;
    case "right":
      grid = moveRight(grid, size);
      break;
    case "left":
      grid = moveLeft(grid, size);
      break;
    default:
      break; 
  }
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      process.stdout.write(`${grid[x][y]}`);
      if (y < size - 1) {
        process.stdout.write(' ');
      }
    }
    process.stdout.write('\n');
  }
});

const moveUp = (cells, size) => {
  for (let y = 0; y < size; y++) {
    let cellCol = [];
    for (let x = 0; x < size; x++) {
      cellCol.push(cells[x][y]);
    }
    cellCol = getRowValue(cellCol);
    for (let x = 0; x < size; x++) {
      cells[x][y] = cellCol[x];
    }
  }
  return cells;
};

const moveDown = (cells, size) => {
  for (let y = 0; y < size; y++) {
    let cellCol = [];
    for (let x = 0; x < size; x++) {
      cellCol.push(cells[x][y]);
    }
    cellCol = getRowValue(cellCol.reverse()).reverse();
    for (let x = 0; x < size; x++) {
      cells[x][y] = cellCol[x];
    }
  }
  return cells;
};

const moveRight = (cells, size) => {
  for (let x = 0; x < size; x++) {
    cells[x] = getRowValue(cells[x].reverse()).reverse();
  }
  return cells;
};

const moveLeft = (cells, size) => {
  for (let x = 0; x < size; x++) {
    cells[x] = getRowValue(cells[x]);
  }
  return cells;
};
  
const getRowValue = (arr = []) => {
  let next;
  for (let i = 0; i < arr.length; i++) {
    next = arr.findIndex((el, index) => {
      return index > i && el !== 0;
    });
    if (next !== -1) {
      if (arr[i] === 0) {
        arr[i] = arr[next];
        arr[next] = 0;
        i -= 1;
      } else if (arr[i] === arr[next]) {
        arr[i] = arr[i] * 2;
        arr[next] = 0;
      }
    }
  }
  return arr;
};
