app.controller('mycontroller',['$scope','fac',function($scope,fac){
   fac.ajax('http://localhost:8080/').then(function(data){
       $scope.data=data

   })
     fac.ajax('http://localhost:8080/data').then(function(data){
       $scope.title=data

   })
  //  $scope.title="全部"
  
    $scope.cr=function(data,dal){
        console.log(data.arr)
        $scope.arr=data.arr
      
       if(data.arr===undefined){
           $scope.pan=false;
       }
        else{
 $scope.pan=true;
        }
   
   

    }
        $scope.cfac=function(file,ind){
             $scope.pan=false;
           
               
            for(var key in ind){
                   
                    if(ind[key]['arr'].indexOf(file)!=-1){
                document.getElementsByClassName('uli')[key].innerHTML=file;
                 var sen=ind[key]['arr'].indexOf(file)
                if(key==0){
                    if(sen==0){
                        $scope.file=''
                    }
                    else{
                         $scope.file=file
                    }
                
                }
                else if(key==2){
                    console.log(file)
                   
                   switch(sen){
                       case 0:
                       $scope.dome='';
                       return;
                       case 1:
                       $scope.dome='prc1';
                       return;
                       case 2:
                       $scope.dome='-prc2';
                       return;
                        case 3:
                       $scope.dome='-prc3';
                       return;
                       
                   }
                  $scope.dome=file
                }
                }
            }
                }
            
             
        
}])