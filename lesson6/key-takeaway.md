# Kết nối CSDL, kiểm tra dữ liệu trong CSDL
## Khái niệm về CSDL
Là một tập hợp dữ liệu có tổ chức.
Tập hợp dữ liệu có thể được xây dựng thành mô hình quan hệ hoặc không quan hệ.

Các loại DB: Postgresql, MySQL, SQL Server, Oracle,...

## Lí do sử dụng
Sử dụng CSDL giúp tổ chức dữ liệu, truy vấn, chỉnh sửa dễ dàng
- Verify data sau khi gọi API
- Kiểm tra toàn vẹn dữ liệu
- So sánh dữ liệu API trả về và dữ liệu trong DB
- Chuẩn bị dữ liệu trước khi test
- Clean up sau khi test

## Kết nối CSDL
 Sử dụng plugin Database Client JDBC của VSCode

## Truy vấn thường dùng
- Lấy dữ liệu: SELECT * FROM <table> WHERE <condition>
- Đếm số bản ghi: SELECT COUNT(*) FROM <table> WHERE <condition>

- Sắp xếp dữ liệu: ORDER BY <field> ASC/DESC
- Giới hạn số bản ghi lấy ra: LIMIT <number>

# API documentation
Là tài liệu mô tả cách sử dụng API, bao gồm:
- API endpoint
- Phương thức HTTP sử dụng
- Request/Response format ( XML / JSON) 
- Tham số của API (header, body, params)

Mục đích sử dụng:
- Giúp developer/tester hiểu cách giao tiếp với API
- Tiết kiệm thời gian trao đổi giữa các team/ cá nhân
- Đảm bảo tính nhất quán trong quá trình phát triển và kiểm thử

Công cụ API Documentation phổ biến:
- Văn bản thuần: Word / Excel ( hoặc các biến thể của 2 loại file này)
- Phần mềm/ extension chuyên dụng: OpenAPI docs, ...

# Postman advanced features
- Flow
- API
- Mock server
- Monitor

# WebSocket
Giao thức truyền thông tin hai chiều ( bidirectional) qua một kết nối TCP duy nhất.

## Đặc điểm chính
- Giữ giao tiếp liên tục
- Giảm độ trễ so với các giao thức truyền thống
- Hỗ trợ giao tiếp real-time

## Cách thức hoạt động
- Handshake ban đầu thông qua HTTP (HTTP Upgrade)
- Chuyển qua giao thức ws:// hoặc wss:// (WebSocket Secure)

## So sánh HTTP vs WebSocket
| HTTP         | WebSocket                     |
|-----------------|-------------------------------|
| Request-response model ( Mô hình yêu cầu- phản hồi)   | Kết nối liên tục, không gửi header cho mỗi message                 |
| Kết nối không liên tục, mỗi request mở một kết nối mới         | Giữ kết nối liên tục        |
| Phù hơp cho các ứng dụng không yêu cầu real-time | Phù hợp cho các ứng dụng realtime (game, chat, notification)                    |
| | Tốn tài nguyên server để giữ kết nối |


