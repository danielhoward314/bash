//Output a prompt
const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.match(/^cat/)){

  }


  process.stdout.write('\nYou typed: ' + cmd);
  process.stdout.write('\nprompt >'); //adds prompt to ls output weird...
});
