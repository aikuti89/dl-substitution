
let okikae = JSON.parse(
`[
    {"pattern": "メスガキ", "replaced": "ざぁ~こ♡"}
    ,{"pattern": "逆レイプ", "replaced": "逆レ"}
    ,{"pattern": "レイプ", "replaced": "合意なし"}
    ,{"pattern": "ロリ", "replaced": "ひよこ"}
    ,{"pattern": "監禁", "replaced": "閉じ込め"}
    ,{"pattern": "鬼畜", "replaced": "超ひどい"}
    ,{"pattern": "強制", "replaced": "命令"}
    ,{"pattern": "近親相姦", "replaced": "近親もの"}
    ,{"pattern": "拷問", "replaced": "責め苦"}
    ,{"pattern": "催眠音声", "replaced": "暗示ボイス"}
    ,{"pattern": "催眠", "replaced": "暗示"}
    ,{"pattern": "獣姦", "replaced": "動物なかよし"}
    ,{"pattern": "洗脳", "replaced": "精神支配"}
    ,{"pattern": "痴漢", "replaced": "秘密さわさわ"}
    ,{"pattern": "調教", "replaced": "しつけ"}
    ,{"pattern": "奴隷", "replaced": "下僕"}
    ,{"pattern": "陵辱", "replaced": "屈辱"}
    ,{"pattern": "輪姦", "replaced": "回し"}
    ,{"pattern": "蟲姦", "replaced": "虫えっち"}
    ,{"pattern": "モブ姦", "replaced": "モブおじさん"}
    ,{"pattern": "異種姦", "replaced": "異種えっち"}
    ,{"pattern": "機械姦", "replaced": "機械責め"}
    ,{"pattern": "睡眠姦", "replaced": "すやすやえっち"}
]`);


async function findAndReplace() {
    let wElements = document.body.getElementsByTagName('*');
    
    for (const _element of wElements) {
        for(const cNode of _element.childNodes) {
            if(cNode.nodeType === 3) {
                okikae.forEach(element => {
                    cNode.nodeValue = cNode.nodeValue.replaceAll(element.pattern, element.replaced);    
                });
            }
        }
    }

    // let wFrameElements = document.body.getElementsByTagName('iframe');
    // for (const _ftarget of wFrameElements) {
    //     let wFElements = _ftarget.contentWindow.document.body.getElementsByTagName('*');    
    //     for (const _element of wFElements) {
    //         for(const cNode of _element.childNodes) {
    //             if(cNode.nodeType === 3) {
    //                 okikae.forEach(element => {
    //                     cNode.nodeValue = cNode.nodeValue.replaceAll(element.pattern, element.replaced);
    //                 });
    //             }
    //         }
    //     }
    // }
    return true;
};

async function observerCallback(mutationsList, observer){
    observer.disconnect();

    findAndReplace().then(value => {
        observer.observe(document.body, config);
    });

}

let config = { attributes: true, childList: true, subtree: true };
let observer = new MutationObserver(observerCallback);

window.onload = (value =>{
    findAndReplace().then(value => {
        observer.observe(document.body, config);
    });
})