app.factory('fac',function($http,$q){
    return{
        ajax:function(url){
            var defer=$q.defer();
            $http({
                method:"get",
                url:url
            }).success(function(data){
                defer.resolve(data)

            })
            return defer.promise

        }
    }

})