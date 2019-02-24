let keyValue = 1000;
function test() {
  keyValue = 20000;
  console.log('tested !');
}

let text = 'Some text';

export {keyValue, test};
export default text;