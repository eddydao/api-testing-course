# POSTMAN advanced

## Scope của biến trong POSTMAN

- Biến Global: Cho khả năng truy cập trên toàn bộ postman ( không phân biệt môi trường, collection)

- Biến môi trường: Cho khả năng truy cập trên từng môi trường
![Biến môi trường](image.png)

- Biến Collection: Cho phép truy cập trong cùng một collection

- Biến Data: Biến từ file dữ liệu khi chạy collection

- Biến Local: biến tạm thời, tồn tại trong một script hoặc 1 req cụ thể

Ưu tiên truy cập: local > data > env > Collection > Global

### Chạy batch request từ CSV file

![alt text](image-1.png)

- Ứng dụng:
  - Chạy nhiều request với nhiều dữ liệu một cách nhanh chóng

### Dynamic var

Một số biến có sẵn của postman dùng để sinh ra dữ liệu động
Sử dụng: `{{$var}}`

Tham khảo: variable-list // postman

## POSTMAN scripts - Kịch bản

### Vòng đời của req

- pre-req ->  Client -> Server -> Client -> post res

#### Pre-request

![alt text](pre-req.png)

```javascript
// pre-req
const accessToken = pm.environment.get("accessToken");
if(!accessToken){
    pm.sendRequest({        
        url: "https://api.postman.com/oauth2/token",
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: {
            mode: "raw",
            raw: JSON.stringify({
                "username": "nguyenvanhoa123456789@gmail.com",
                "password": "123456"
            })
        }    
    }, function (err, res) {        
        if(err){
            console.log(err);        
        }
        const data = res.json();
        pm.environment.set("accessToken", data.access_token);
    }
);
```

#### Post-response

![alt text](post-res.png)

pm.response
pm.test
pm.expect
pm.visualizer

## Visualization

Tạo template ( dạng html)
Lấy dữ liệu từ response
Set cho template với pm.visualizer.set('template', data);

## Body

## API document


