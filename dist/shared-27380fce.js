import fs from 'fs';

function foo() {
  console.log(fs);
}

function bar() {
  console.log('bar');
}

export { bar as b, foo as f };
