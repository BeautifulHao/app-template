const path = require('path');
const extractMessage = require('extract-react-intl-messages');

extractMessage(
    ['en', 'zh-cn'],
    "src/**/!(*.test).js",
    path.join(__dirname, '../src/locale'), {
        defaultLocale: 'zh-cn'
    }
).then(() => {
    console.log("intl finish");
})