const accessToken = pm.environment.get("accessToken") ;
const url = pm.environment.get("baseURL v2");
const admin = pm.environment.get("admin");
const password = pm.environment.get("password");
if(!accessToken){
    pm.sendRequest({        
        url: url + "/admin/auth/login" ,
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: {
            mode: "raw",
            raw: JSON.stringify({
                "username": admin,
                "password": password
            })
        }    
    }, function (err, res) {      
        console.log("res" , res);  
        if(!err){
            pm.environment.set("accessToken", res.json().data.accessToken);
        }else {
            console.log(err);
        }
    })
};