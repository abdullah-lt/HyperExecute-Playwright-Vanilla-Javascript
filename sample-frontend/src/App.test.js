const { expect, test } = require('@playwright/experimental-ct-react')


import App from './App';

test('should work', async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toContainText('Learn React');
  await sleep(30000)
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}