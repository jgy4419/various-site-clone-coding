const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8000, function(){
    console.log('listening on 8080');
})

// app.use('/', express.static(path.join(__dirname, 'abc')));
app.use('/', express.static(path.join(__dirname, 'build')));

// app.get('/', function(요청, 응답){
//     응답.sendFile(path.join(__dirname, 'abc/abc.html'));
// })
app.get('/', function(요청, 응답){
    응답.sendFile(path.join(__dirname, 'build/index.html'));
})
// *는 모든글자라는 뜻. 즉, 유저가 URL 아무거나 입력했을 때 리액트 html(build/index.html을 보내달라는 뜻.)
// app.get('*', function(요청, 응답){
//     응답.sendFile(path.join(__dirname, 'build/index.html'));
// })