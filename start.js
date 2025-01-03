const concurrently = require('concurrently');

concurrently([
  { command: 'cd backend && flask run', name: 'BACKEND', prefixColor: 'blue' },
  { command: 'cd frontend && npm start', name: 'FRONTEND', prefixColor: 'green' }
], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
  restartTries: 3,
  restartDelay: 1000,
}).then(
  () => {
    console.log('Success: All processes exited with code 0');
  },
  (error) => {
    console.error('Failure:', error);
    process.exit(1);
  }
);