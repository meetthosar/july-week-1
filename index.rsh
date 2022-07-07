'reach 0.1';

const commanFunctions = {
  seeNotification : Fun([],Null)
};

export const main = Reach.App(() => {
  const Landlord = Participant('Landlord', {
    ...commanFunctions,
    proposeSwap : Fun([], Tuple(Token, UInt, Token, UInt, UInt)),
    nameTheBank : Fun([], Address)    
  });
  const Bank = Participant('Bank', {
    ...commanFunctions,
    acceptSwap : Fun([Token, UInt, Token, UInt], Bool)
  });
  init();
  
  Landlord.only(() => {
    const [landToken, landAmt, ruppeeToken, ruppeAmt, time] = declassify(interact.proposeSwap());
    assume(landToken != ruppeeToken);
    check(landAmt != 0);
    check(ruppeAmt != 0)
  });
  
  Landlord.publish(landToken, landAmt, ruppeeToken, ruppeAmt, time);
  ;
  
  commit();
  Landlord.pay([[landAmt, landToken]]);
  commit();
  
  Bank.only(() => {
    const accepted = declassify(interact.acceptSwap(landToken, landAmt, ruppeeToken, ruppeAmt))
    assume(landToken != ruppeeToken);
  });

  Bank.publish(accepted);
  const attacher = new Set();
  attacher.insert(Bank);

  commit();

  Bank.pay([[ruppeAmt, ruppeeToken]])
  .when(accepted)
  .timeout(relativeTime(time), () => {
    Landlord.publish();
    transfer(landAmt, landToken).to(Landlord);
    // each([A, B], () => interact.seeTimeout());
    commit();
    exit();
  });;    

  commit();

  Landlord.only(() => {
    const bankAddress = declassify(interact.nameTheBank());
  })
  
  Landlord.publish(bankAddress);
  
  if(attacher.member(bankAddress)){
    transfer(ruppeAmt, ruppeeToken).to(Landlord);
    transfer(landAmt, landToken).to(Bank);    
  }else{
    transfer(landAmt, landToken).to(Landlord);
    transfer(ruppeAmt, ruppeeToken).to(Bank)
  }
  commit();
  // write your program here
  exit();
});
