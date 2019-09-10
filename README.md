### react-neditor
neditor的react 版本。
#### 使用方法
1. 下载`neditor`文件夹解压拷贝到项目的静态目录下。如果是create-react-app则拷贝到`public`文件夹下即可。
2. 安装`react-neditor`。命令如下：`yarn add git+https://github.com/25juan/react-neditor.git`
```
import ReactNeditor from 'react-neditor' ;
<ReactNeditor config={{
                toolbars: [[
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
```
#### 属性
|属性|类型|默认值|
-|-|-
|config|object|{},[ueditor配置项](http://fex.baidu.com/ueditor/)|
|neditorPath|string|无，neditor静态文件路径|
|onReady|function|编辑器初始化完成之后的回调|
|content|strin|编辑器的初始内容|
