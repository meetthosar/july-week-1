import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const shouldFail = async (fp) => {
  let worked = undefined;
  try {
    await fp();
    worked = true;
  } catch (e) {
    worked = false;
  }
  console.log(`\tshouldFail = ${worked}`);
  if (worked !== false) {
    throw Error(`shouldFail`);
  }
};

const commanFunctions = {
  seeNotification : (accepted) => {
    if(accepted)
      console.log('Bank accepted the swap');
    else
      console.log('Bank rejected the swap')
  },
  attacherMatched : (accepted) => {
    if(accepted)
      console.log('Attacher Matched');
    else
      console.log('Attached not matched')
  }
};

const startingBalance = stdlib.parseCurrency(100);

const time = stdlib.connector === 'CFX' ? 50 : 10;

const [ accLandlord, accBank ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Landlord and Bank!');


const landToken = await stdlib.launchToken(accLandlord, "land", "LND");
const rupeeToken = await stdlib.launchToken(accLandlord,'rupee', 'RUPEE');


if ( stdlib.connector === 'ETH' || stdlib.connector === 'CFX' ) {
  const gasLimit = 5000000;
  accLandlord.setGasLimit(gasLimit);
  accBank.setGasLimit(gasLimit);
} else if ( stdlib.connector == 'ALGO' ) {
  console.log(`Demonstrating need to opt-in on ALGO`);
  await shouldFail(async () => await zorkmid.mint(accLandlord, startingBalance));
  console.log(`Opt-ing in on ALGO`);
  await accLandlord.tokenAccept(landToken.id);
  await accLandlord.tokenAccept(rupeeToken.id);
  await accBank.tokenAccept(landToken.id);
  await accBank.tokenAccept(rupeeToken.id);
}


await landToken.mint(accLandlord, startingBalance.mul(2));
await rupeeToken.mint(accBank, startingBalance.mul(2));

console.log('Launching...');
const ctcLandlord = accLandlord.contract(backend);
const ctcBank = accBank.contract(backend, ctcLandlord.getInfo());

console.log('Starting backends...');

await Promise.all([
  backend.Landlord(ctcLandlord, {
    ...commanFunctions,
    proposeSwap : () => {
        console.log("Landlord is proposing Swap")
        return [landToken.id, 1, rupeeToken.id, 2, time];
    },
    nameTheBank : () => {
      console.log('Providing Bank\'s Address');
      return accBank.getAddress();
    }
  }),
  backend.Bank(ctcBank, {
    ...commanFunctions,
    acceptSwap : (...v) => {
      console.log(`Bank accepts swap of`, v);
      return true;
    }
  }),
]);

console.log('Swap Completed!');
