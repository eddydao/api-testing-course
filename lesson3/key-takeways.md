# Authentication and Authorization

# Định nghĩa
- Authentication là quá trình xác thực danh tính của người dùng hoặc hệ thống, trả lời câu hỏi 'bạn là ai?'
- Authorization là quá trình xác định các quyền truy cập của người dùng hoặc hệ thống sau khi xác thực.

# Terms
## Username, password: 
Thông tin đăng nhập vào hệ thống.

## Session cookie: 
Chuỗi mã hoá sinh ra tại server, được gửi cho client sau khi xác thực đăng nhập.
Client đính kèm chuỗi mã hoá này khi thực hiẹn request.
> Chuỗi mã hoá này gọi là cookie
> Khoảng thời gian từ khi người dùng đăng nhập lần đầu tới khi log out hoặc cookie hết hạn được gọi là session
 
Cookie được đi theo cặp key-value, được lưu trữ tại máy của người dùng.
Session được lưu tại máy chủ

Luồng hoạt động
1. User thực hiện login vào server lần đầu
2. Server xác thực dựa vào user/password và tạo ra một chuỗi cookie gửi về cho client trong response
3. Client thực hiện gửi các request tiếp theo và đính kèm cookie vào trong request header
4. Server thực hiện xác thực cookie 
  4.1. Nếu session cookie còn thời hạn, xác thực client
  4.2 Nếu session cookie hết hạn ( hoặc user thực hiện log-out trước đó), server thực hiện logic 

## Base64 encode/decode
- Phương pháp mã hoá thông tin về chuỗi kí tự ASCII
- Quy trình mã hoá: 
  - Chuyển dữ liệu về dạng byte
  - Gộp 3 byte thành 1 nhóm ( 24 bit - 24 chữ số)
    - Nếu số lượng byte không chia hết cho 3, cần mượn thêm byte ( thêm số byte mượn dưới dạng bit '00' vào cuối chuỗi bit)
  - Tách chuỗi bit thành nhóm 6 bit, tra từng nhóm 6 bit với bảng ASCII cho ra ký tự encode
    - Mỗi byte mượn được đánh dấu bởi 1 dấu '=' ở cuối chuỗi mã hoá


## Token: 
Chuỗi ký tự ngẫu nhiên dùng để xác thực người dùng hoặc ứng dụng
Được tạo ra sau khi người dùng đăng nhập thành công

Có các dạng token phổ biến: 
  - Session-cookie
  - Bearer
  - JWT

JWT = Bearer + format base64 (header.body.signature)
Mỗi phần của cấu trúc token đều được mã hoá Base64
  - Header: chứa thông tin về dạng mật mã dùng để mã hoá và loại token
  - Body: chứa một số thông tin về tên, quyền hạn, thời gian hết hạn,...

Access token: là token dùng để xác thực đăng nhập, thường được set thời gian khả dụng ngắn

Refresh token: token dùng để cấp mới access token khi access token hết hạn, có thời gian khả dụng dài hơn access token

## API key
Chuỗi mã hoá ( hạn dài hoặc không hết hạn) cấp cho người dùng hoặc hệ thống để truy cập API
Thường dùng để xác định ứng dụng
Không chứa thông tin người dùng, thường chỉ xác định ứng dụng nào đang gọi API.

# Authentication method
## Session-cookie auth
- Người dùng đăng nhập hệ thống
- Server xác thực và tạo session, gửi cookie về client
- Client gửi kèm cookie trong các request cần xác thực
- Server kiểm tra session và xác thực nguòi dùng
- Đăng xuất - xoá session - xoá cookie

## Basic auth
- Xác thực user/pass mã hoá bằng base 64 gửi đi trong mỗi req

- Client gửi request không có thông tin xác thực
- Server phản hồi với yêu cầu xác thực ( 401)
- Client gửi lại request với thông tin xác thực (username:password -> mã hoá base64 -> gán chuỗi token vào Authorization header: Basic <Chuỗi mã hoá>)
- Server kiểm tra và đăng nhập

# Javascript

## Câu điều kiện
Để thực hiện các hành động khác nhau dựa vào một điều kiện cụ thể
Dùng để kiểm soát luồng xử lý của chương trình
Form:
  - if(<điều kiện>){}
  - if ... else
  - if ... else if
  - switch ... case