
const first= readFileSync('./contest/first.txt','utf8');
const second= readFileSync('./contest/second.txt','utf8');

console.log(first,second)

writeFileSync(
    './contest/result-sync.txt',
    `here is the result; ${first}, ${second}`
)