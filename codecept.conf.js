exports.config = {
  tests: './test_*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: false,
      windowSize: '1200x900'
    },
    MailSlurp: {
        require: '@codeceptjs/mailslurp-helper',
        apiKey: 'c83b21e2002a6dbaf09697825fd38cf8446a93a3e19dc6c2910988d174b27570'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test_for_work',
  translation: 'ru-RU',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}