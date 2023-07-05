var wordGame = function (p, reshte) {
    var a=p.split("")
    var b=reshte.split(" ")
    var c=new Map();
    if (a.length !=b.length){
        return false}
        for(var i=0 ; i<a.length ; i++){
            if (c.get(a[i])==b[i]){
                
            }
            else if(c.get(a[i])== undefined){
                c.set(a[i],b[i])
            }
            else {return false}
        }
        return true
    };