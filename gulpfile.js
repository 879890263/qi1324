const gulp=require('gulp')
const webserver=require('gulp-webserver')
const mock=require('mockjs')
gulp.task('webserver',function(){
    gulp.src('.')
    .pipe(webserver({
         host:'localhost',
        port:8090,
         open:true,
         fallback:'index.html',
         livelodad:true

    }))
})
gulp.task('ting',function(){
    gulp.src('.')
    .pipe(webserver({
        host:'localhost',
        port:8080,
        
       
        middleware:function(req,res){
            res.writeHead(200,{
                "Content-Type":'text/json;charset=utf8;',
                "Access-Control-Allow-Origin":"*"
            })
            if(req.url=='/data'){
                var data=require('fs').readFileSync('App/Data/up.json')
                res.end(data)
            }
            if(req.url=='/'){
                  var arr=[];
                	

              for(var i=0;i<15;i++){
                 arr.push(mock.mock({
                        "price|1-999":999,
                         "string|1-5":"★",
                         "title":"@ctitle(10,20)",
                         "type|1":['甜点','火锅','自助餐','西餐'],
                         "img|1":["App/content/images/img1.jpg","App/content/images/img2.jpg","App/content/images/img3.jpg","App/content/images/img4.jpg","App/content/images/img5.jpg","App/content/images/img6.jpg","App/content/images/img7.jpg","App/content/images/img8.jpg","App/content/images/img9.jpg","App/content/images/img10.jpg","App/content/images/img11.jpg","App/content/images/img12.jpg"],
                         "city":'@city(true)',
                         "prc1|1-999":999,
                         "prc2|1-999":999,
                         "prc3|1-999":999
                 }))
               
           }
                res.end(JSON.stringify(arr))


            }   
        }
    }))
})
gulp.task('default',['webserver','ting'])

