
//llamamos el proceso Spawn

const { spawn } = require('child_process');
//Guardamos en la variable lo que le vamos a enviar al cmd
const ps = spawn( 'ping',['172.25.26.11'])

ps.stdout.setEncoding('utf8')
ps.stdout.on('data', data => {
    console.log(data)
})

ps.stderr.setEncoding('utf8')
ps.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ps.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });