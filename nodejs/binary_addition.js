process.stdin.resume();
process.stdin.setEncoding('utf8');

let stdin = '';
process.stdin.on('data', (chunk) => {
  stdin = `${stdin}${chunk}`;
}).on('end', () => {
  const lines = stdin.trim().split('\n');
  for (const line of lines) {
    const binaries = line?.split(',');
    if (binaries.length === 2) {
      const first = parseInt(binaries[0], 2);
      const second = parseInt(binaries[1], 2);
      const sum = (first + second).toString(2);
      process.stdout.write(`${sum}\n`);
    }
  }
});