module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/gh-vote-dapp/'
      : '/',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/gh-vote-dapp/'
      : '/'
  }