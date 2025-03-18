# Authentication and Authorization
- Authentication là quá trình xác thực danh tính của người dùng hoặc hệ thống
- Authorization là quá trình xác định các quyền truy cập của người dùng hoặc hệ thống

## Terms
- Username, password
- Session cookie: sau khi người dùng đăng nhập vào, server tạo ra một chuỗi mã hoá gửi về client. Sau này khi client thực hiện request, gửi kèm cookie, server kiểm tra và xác thực đăng nhập.

- Token: chuỗi ký tự ngẫu nhiên dùng để xác thực người dùng hoặc ứng dụng
  - Cấu trúc: header.body.signature
  - Body: chứa một số thông tin về tên, quyền hạn,...
  - Có các dạng token phổ biến: 
    - Session-cookie
    - Bearer
    - JWT
  - Validate Bearer token: jwt.io
  - JWT = Bearer + format (header.body.signature)
  - Refresh token: token dùng để cấp mới access token khi access token hết hạn

- API key: chuỗi mã hoá ( hạn dài) cấp cho người dùng hoặc hệ thống để truy cập API
  - Thường dùng để xác định ứng dụng
  - Không chứa thông tin người dùng, thường chỉ xác định ứng dụng nào đang gọi API
  
## Session-cookie auth

## Basic auth
- Xác thực user/pass mã hoá bằng base 64 gửi đi trong mỗi req
- username:password -> mã hoá base64 -> Authorization header: Basic <chuỗi mã hoá base 64>
- 
## 