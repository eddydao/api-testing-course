# REST API
- Là bộ quy tắc cho phép 2 hệ thống giao tiếp qua HTTP
- Ưu điểm:
    - Dễ tích hợp với các hệ thống khác nhau
    - Đơn giản hơn SOAP/ RPC
    - Tận dụng giao thức HTTP
    - Dễ học

## Thành phần của REST API

### API Header
- Chứa các thông tin bổ sung truyền đi trong mỗi request/response HTTP giữa client/server
- Mục đích: giúp server phân loại, xử lý request gửi từ client
- Gồm 4 nhóm chính: 
    - General header: chứa các thông tin chung, có mặt trong req/res
    - Request header: có mặt trong request header, chứa thông tin về resource được yêu cầu hoặc về thông tin client
    - Response header: có mặt trong response header, chứa thông tin bổ sung về response
    - Entity header: miêu tả nội dung body của req/res

Header phổ biến:
    - Authentication header
        - Authorization header: chứa thông tin xác thực của client, cấu trúc `<type> <credentials>`
        VD: Bearer sadXCKJbqlkwe
        - www-Authenticate: server yêu cầu client xác thực, chỉ đưa ra phương thức được chấp nhận
    - Content header: 
        - Content-type: định dạng dữ liệu body. VD: `content-type: application/json`
        - Content-length: kích thước body tính bằng bytes
        - Content-encoding: kiểu nén được áp dụng
    - Caching Header: thông tin về thông tin bổ sung cho cache

## Request

### Cấu trúc của một URL
`scheme://www.subdomain.domain/path?firstQueryParam&secondParam&thirdParam#Fragment`

- scheme: định nghĩa phương thức giao tiếp, HTTP hoặc HTTPS
- subdomain: tên miền phụ
- domain: tên miền
- path: đường dẫn tới resource
- query param: cấu trúc `<key>=<value>`
    - query param đầu tiên đứng sau dấu `?`
    - các query param sau: đứng sau dấu `&`
- fragment: điểm đánh dấu vị trí trong 1 page của website

### HTTP Method
- Phương thức của request, nhằm thông báo cho server biết request muốn thực hiện hành vi nào.
- Các method cơ bản:
    - GET: lấy dữ liệu từ server
    - POST: tạo dữ liệu mới trong server
    - PUT: cập nhật toàn bộ dữ liệu
    - PATCH: cập nhật một phần dữ liệu
    - DELETE: xoá
    - HEAD: req sẽ chỉ gửi header
    - OPTIONS: lấy thông tin về các phương thức được hỗ trợ bởi server

## Response
- Header trong response chứa các thông tin chỉ dẫn cho client xử lý dữ liệu trong body

### Status code
- Giúp client biết kết quả của request được gửi đến server
- Có 3 chữ số
- Có 5 nhóm:
    - 1xx: cho biết request đã được tiếp nhận và xử lý, eg: 100, 101
    - 2xx: cho biết req đã được xử lý thành công, eg: 200, 201, 204
    - 3xx: cho biết hành động bổ sung cần có từ client để hoàn thành req
    - 4xx: cho biết lỗi từ phía client, eg: 400, 403, 404
    - 5xx: cho biết lỗi xảy ra tại server, eg: 500, 502, 503, 504

# Javascript 101
- Khai báo biến: `const <tên biến> = <giá trị dữ liệu>;`