console.log('Theory String')

/**
 * 
 * Il existe trois délimiteurs de string
 * ''
 * ""
 * 
 * Seul le backtick apporte une différence
 * ``
 * 
 * Evaluation
 * Multiligne 
 */

const username = "Bob";

console.log('Simple','Hello ${username}');
console.log('Double',"Hello ${username}");
console.log('Backtick',`Hello ${username}`);


console.log(`
Il existe trois délimiteurs de string
- ''
- ""

Seul le backtick apporte une différence
- \`\`

- Evaluation
- Multiligne 
`);