
/*
const child_process = require('child_process');
child_process.execFile('powershell.exe', ['-ExecutionPolicy', 'Unrestricted', '-File', 'C:\\Users\\user\\Desktop\\test.ps1']), (error, stdout, stderr) => {
    if (error) {
        console.error('stderr', stderr);
        throw error;
    }
    console.log(stdout);
};

let comando = child_process.spawn('powershell.exe', ['/c', 'ssh adminbot.contrasenas@172.25.26.11', 'C:']);
comando.stdout.on('data', function (datos) {
    console.log('Salida: ');
    console.log(datos.toString());
});


comando.stderr.on('data', function (datos) {
    console.log('Error: ');
    console.log(datos.toString());
});

comando.on('exit', function (code) {
    console.log('Proceso finalizado con código: ' + code);
});

*/

/*

var path, node_ssh, ssh,
fs
fs = require('fs')
path = require('path')
node_ssh = require('node-ssh')
ssh = new node_ssh()
ssh.connect(
    {
        host: '172.25.26.11', username: 'adminbot.contrasenas', password: 'Soporte365*',
    })
    .then(function (response) { console.log(response) })


    const {NodeSSH} = require('node-ssh');
    const ssh = new NodeSSH();
    ssh.connect(
        {
            host: '172.25.26.11', username: 'adminbot.contrasenas', password: 'Soporte365*',
        })
        .then(function (response) { console.log(response.connect) })

    let conn = new ssh2.Client()
    return new Promise((resolve, reject) => {
        conn.on('ready', () => {
            conn.exec(cmd, (err, stream) => {
                if (err) {
                    reject(err)
                }
                stream.on('close', (code, signal) => {
                    if (code !== 0) {
                        reject(code)
                    }
                    conn.end()
                    resolve(code)
                }).stderr.on('data', (data) => {
                    reject(data)
                })
            })
        }).connect({
            host: `172.25.26.11`,
            port: 22,
            username: 'adminbot.contrasenas',
            privateKey: fs.readFileSync('/Users/<me>/.ssh/id_rsa'),
            debug: (s) => {console.log(s)}
        })
    })
    */

var Client = require('ssh2').Client;
let email = 'yency.ramirez@amarilo.com';//context.userData.variables.email;
let user = email.replace('@amarilo.com', '');

let usuario = user;
let comand = 'dsquery user -samid ' + usuario + ' | dsmod user -disabled no';

var conn = new Client();
conn
    .on('ready', function () {
        console.log('Client :: ready');
        conn.exec(comand, function (err, stream) {
            if (err) throw err;
            stream
                .on('close', function (code, signal) {
                    console.log(
                        'Stream :: close :: code: ' + code + ', signal: ' + signal
                    );
                    conn.end();
                })
                .on('data', function (data) {
                    console.log('STDOUT: ' + data);
                })
                .stderr.on('data', function (data) {
                    console.log('STDERR: ' + data);
                });
        });
    })
    .connect({
        host: '172.25.26.11',
        port: 22,
        username: 'adminbot.contrasenas',
        password: 'Soporte365*',
    });