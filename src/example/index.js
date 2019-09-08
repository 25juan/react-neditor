import React from 'react';
import ReactNeditor from '../lib' ;

const App = ()=>{
    let editor1 = null ;
    let editor2 = null ;
    return (
        <div>
            <ReactNeditor
                config={{
                    toolbars: [
                        [
                            'anchor', //锚点
                            'undo', //撤销
                            'redo', //重做
                            'bold', //加粗
                            'indent', //首行缩进
                            'snapscreen', //截图
                            'italic', //斜体
                            'underline', //下划线
                        ]
                    ]
                }}
                onReady={editor=>editor1 = editor } neditorPath={"./neditor"}/>
            <div>
                <button onClick={()=> alert(editor1.getAllHtml())}>获得整个html的内容</button>
                <button onClick={ ()=> {
                    var arr = [];
                    arr.push("使用editor.getContent()方法可以获得编辑器的内容");
                    arr.push("内容为：");
                    arr.push(editor1.getContent());
                    alert(arr.join("\n"));
                } }>获得内容</button>
                <button onClick={()=> {
                    var arr = [];
                    arr.push("使用editor.setContent('欢迎使用ueditor')方法可以设置编辑器的内容");
                    arr.push(editor1.setContent('欢迎使用ueditor', false));
                    alert(arr.join("\n"));
                }}>写入内容</button>
                <button onClick={()=> {
                    var arr = [];
                    arr.push("使用editor.setContent('欢迎使用ueditor')方法可以设置编辑器的内容");
                    arr.push(editor1.setContent('欢迎使用ueditor', true));
                    alert(arr.join("\n"));
                }}>追加内容</button>
                <button onClick={ ()=> {
                    var arr = [];
                    arr.push("使用editor.getContentTxt()方法可以获得编辑器的纯文本内容");
                    arr.push("编辑器的纯文本内容为：");
                    arr.push(editor1.getContentTxt());
                    alert(arr.join("\n"));
                } }>获得纯文本</button>
                <button onClick={()=> {
                    var arr = [];
                    arr.push("使用editor.getPlainTxt()方法可以获得编辑器的带格式的纯文本内容");
                    arr.push("内容为：");
                    arr.push(editor1.getPlainTxt());
                    alert(arr.join('\n'))
                } }>获得带格式的纯文本</button>
            </div>

            <ReactNeditor
                onReady={editor=>editor2 = editor }
                neditorPath={"./neditor"}/>
            <div>
                <button onClick={()=> alert(editor1.getAllHtml())}>获得整个html的内容</button>
                <button onClick={ ()=> {
                    var arr = [];
                    arr.push("使用editor.getContent()方法可以获得编辑器的内容");
                    arr.push("内容为：");
                    arr.push(editor2.getContent());
                    alert(arr.join("\n"));
                } }>获得内容</button>
                <button onClick={()=> {
                    var arr = [];
                    arr.push("使用editor.setContent('欢迎使用ueditor')方法可以设置编辑器的内容");
                    arr.push(editor2.setContent('欢迎使用ueditor', false));
                    alert(arr.join("\n"));
                }}>写入内容</button>
                <button onClick={()=> {
                    var arr = [];
                    arr.push("使用editor.setContent('欢迎使用ueditor')方法可以设置编辑器的内容");
                    arr.push(editor2.setContent('欢迎使用ueditor', true));
                    alert(arr.join("\n"));
                }}>追加内容</button>
                <button onClick={ ()=> {
                    var arr = [];
                    arr.push("使用editor.getContentTxt()方法可以获得编辑器的纯文本内容");
                    arr.push("编辑器的纯文本内容为：");
                    arr.push(editor2.getContentTxt());
                    alert(arr.join("\n"));
                } }>获得纯文本</button>
                <button onClick={()=> {
                    var arr = [];
                    arr.push("使用editor.getPlainTxt()方法可以获得编辑器的带格式的纯文本内容");
                    arr.push("内容为：");
                    arr.push(editor2.getPlainTxt());
                    alert(arr.join('\n'))
                } }>获得带格式的纯文本</button>
            </div>
        </div>
    )
};
export default App ;

