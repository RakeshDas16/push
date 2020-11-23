var push=require('web-push');

let vapidKeys={
    publicKey: 'BPGIzs3SBrp1ZYMtTvU4GBkSUQBPDc6qrl34CdEOaCScQXCwvAcHCHpM3A6haLAU_r5xmT5UiCneobG8nuW1qq0',
    privateKey: 'm3ciBmtcsaVz4jT-LvzZM19IM74aNt64xdabXWKVGGE'
  }

  push.setVapidDetails('imrakesh.gir@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

  let sub={};
  push.sendNotification(sub,'test message')
