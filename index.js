// const axios = require('axios')
// const path = require('path')
// const http01 = require('le-challenge-fs').create({ webrootPath: '/tmp/acme-challenges' })
// const S3 = { bucketName: 'pfoliosslcertificate' }
// const store = require('le-store-s3').create({ S3 })

// const greenlock = require('greenlock').create({
//   server: 'https://acme-v02.api.letsencrypt.org/directory',
//   version: 'draft-11',
//   configDir: path.join(__dirname, 'acme'),
//   manager: "@greenlock/manager",
//   approveDomains,
//   app: require('./app.js'),
//   communityMember: true,
//   maintainerEmail: "s@pfolio.me",
//   store,
//   debug: process.env.NODE_ENV === 'development',
//   renewBy: 10 * 24 * 60 * 60 * 1000,
//   renewWithin: 14 * 24 * 60 * 60 * 1000,
//   packageAgent: pkg.name + '/'+ pkg.version
// })

// function approveDomains (opts, certs, cb) {
//   opts.challenges = { 'http-01': http01 }
//   opts.email = config.email

//   if (certs) {
//     opts.domains = [certs.subject].concat(certs.altnames)
//   }
//   if (err) { cb(err); return }
//   opts.agreeTos = agree
//   cb(null, { options: opts, certs: certs })
  
// }


// greenlock.listen(80, 443)