const concurrently = require('concurrently');
const { result } = concurrently([
  { command: 'cd backend && flask run', name: 'BACKEND', prefixColor: 'blue' },
  { command: 'cd frontend && npm start', name: 'FRONTEND', prefixColor: 'green' }
], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
  restartTries: 3,
  restartDelay: 1000,
});

result.then(success, failure);

function success() {
  console.log('Success: All processes exited with code 0');
}

function failure() {
  console.log('Failure: One or more processes exited with non-zero exit code');
  process.exit(1);
}