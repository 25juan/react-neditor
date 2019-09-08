import React from 'react';
import PropTypes from "prop-types" ;
import { createScript } from "./utils";

window.isLoaded = false ;
window._ue_id = 0 ;
window.getId = ()=>{
    window._ue_id++ ;
    return `neditor_${window._ue_id}`
};

class ReactNeditor extends React.Component {

    static propTypes = {
        config:PropTypes.object,
        neditorPath:PropTypes.string.isRequired,
        onReady:PropTypes.func,
        content:PropTypes.string.isRequired,
    };

    static defaultProps = {
        config:{  },
        onReady:(editor)=>{},
        content:""
    };

    editorId = window.getId() ;

    neditor = null ;

    async componentDidMount(){
        this._loadScript();
    }

    _loadScript = async ()=>{
        let { neditorPath } = this.props ;
        if(!neditorPath){
            throw new Error("请配置neditor的静态资源文件路径");
            return  ;
        }
        if(!window.isLoaded){ // 加载静态资源文件
            await createScript(neditorPath + '/neditor.config.js') ;
            await createScript(neditorPath + '/neditor.all.js') ;
            await createScript(neditorPath + '/neditor.service.js');
            await createScript(neditorPath + '/i18n/zh-cn/zh-cn.js');
            await createScript(neditorPath + '/neditor.service.js');
            await createScript(neditorPath + '/third-party/browser-md5-file.min.js');
            await createScript(neditorPath + '/third-party/jquery-1.10.2.min.js');
            window.isLoaded = true ;
        }
        if(!this.neditor){
            this.initEditor() ; // 初始化编辑器
        }
    };



    initEditor = ()=>{
        this.neditor = window.UE.getEditor(this.editorId,{
            ...this.props.config,
            UEDITOR_HOME_URL: `${this.props.neditorPath}/`,
            enableAutoSave: false
        });
        this.neditor.addListener("ready",()=>{
            this.props.onReady(this.neditor) ;
        });
    } ;

    render() {
        return (
            <div id={this.editorId} />
    )
    }
}

export default ReactNeditor ;
