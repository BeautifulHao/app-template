const shelljs = require('shelljs');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const pxToVm = require('postcss-px-to-viewport');
const getPostCSSToVMConfig = require('../config/pxTovm');
const themes = require('../src/theme/index.js')

themes.forEach(e => {
    let outFileName = path.resolve(__dirname, "../public/static/css/theme/", e + ".min.css");
    
    // less 转换为 css
    shelljs.exec(`lessc -js ${path.resolve(__dirname,"../src/theme/",e+".less")} ${outFileName} --clean-css="--advanced"`, {
        fatal: false
    })

    // 移动端适配
    fs.readFile(outFileName, (err, data) => {
        let postcssString = postcss(pxToVm()).process(data,getPostCSSToVMConfig()).css;

        fs.writeFile(outFileName, postcssString, (err) => {
            if (err) {
                console.error(err)
            } else {
                console.log(`${outFileName} created.`)
            }
        })
    })

})