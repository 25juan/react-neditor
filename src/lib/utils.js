export const createScript = url => {
    let scriptTags = window.document.querySelectorAll('script') ;
    let len = scriptTags.length ;
    let i = 0 ;
    let _url = window.location.origin + url ;
    return new Promise((resolve, reject) => {
        for (i = 0; i < len; i++) {
            let src = scriptTags[i].src;
            if (src && src === _url) {
                scriptTags[i].parentElement.removeChild(scriptTags[i])
            }
        }

        let node = document.createElement('script') ;
        node.src = url ;
        node.onload = resolve ;
        document.body.appendChild(node)
    })
} ;