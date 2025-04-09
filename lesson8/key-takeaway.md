# GraphQL

## Giới thiệu
Là một ngôn ngữ truy vấn cho API
Phát triển bởi Meta, công bố năm 2015
Cho phép client yêu cầu chính xác dữ liệu cần lấy về từ server

## Đặc điểm
Thường chỉ dùng một endpoint duy nhất
Dữ liệu tổ chức dưới dạng đồ thị
Client quyết định cấu trúc dữ liệu trả về

## Tại sao cần dùng
Linh hoạt: client yêu cầu chính xác dữ liệu cần lấy
Document tự update
Dễ bảo trì, có một endpoint duy nhất
Hỗ trợ Realtime với subscription
Giảm băng tải cần sử dụng

## Một số khái niệm
Schema: định nghĩa cấu trúc dữ liệu. Ví dụ: `type User { id: ID!, name: String!, email: String! }`
Quẻry: Yêu cầu dữ liệu từ server. Ví dụ `query { users { id name email } }`
Mutation: Thay đổi dữ liệu trên server: `mutation { createUser(name: "Eddy", email: "eddy@gmail.com") { id name email } }`
Subscription: lắng nghe dữ liệu real time: `subscription { userCreated { id name email } }`
Resolver: xử lý logic để trả về dữ liệu cho query/mutation: `const resolvers = { Query: { users: () => { return users } } }`
Các kiểu dữ liệu: Scalar(int Float, String, Boolean, ID) và Object, List, Non-null (!) (VD: `id: ID!`)

