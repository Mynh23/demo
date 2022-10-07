# RESTful API
Definition: 
- Một `tiêu chuẩn` dùng trong việc thiết kế các API cho các ứng dụng web để quản lý các resource. 
- REST API thường vẫn sử dụng giao thức HTTP/1 kèm theo các định nghĩa trước đó mà cả client và server cần tuân thủ. 
- Ví dụ:  server cung cấp một API lấy số dư của một tài khoản, phương thức là GET, cần có Authorization header, response sẽ là đoạn text có phần đầu là account number, phần sau là số dư.

## Methods
- GET: Trả về một Resource hoặc một danh sách Resource.
- POST: Tạo mới một Resource.
- PUT: Cập nhật thông tin cho Resource (toàn bộ resource).
- PATCH: Cật nhật thông tin cho resourse (một phần resource).
- DELETE: Xoá một Resource.

## Header & Content type
Trong REST, nếu một request cần xác thực quyền truy cập, chúng sẽ phải dùng thêm thông tin trong header. Ví dụ như thông tin `Authorization` sẽ mang theo một user token. Hiện có 3 cơ chế Authentication chính:
- HTTP Basic
- JSON Web Token (JWT)
- OAuth2

Header  giúp client chỉ định được `Content type` từ server. Việc này được thực hiện thông qua phần Accept trong header. Giá trị của nó thường là MIME type:

- image — image/png, image/jpeg, image/gif
- audio — audio/wav, audio/mpeg
- video — video/mp4, video/ogg
- application — application/json, application/pdf, application/xml, - - - -  - application/octet-stream

## Status code
- 1XX: Informational 
- 2XX: Success  
    - 200 OK – Trả về thành công cho những phương thức GET, PUT, PATCH hoặc DELETE.
    - 201 Created – Trả về khi một Resouce vừa được tạo thành công.
    - 204 No Content – Trả về khi Resource xoá thành công.
- 3XX: Redirection
    - 304 Not Modified – Client có thể sử dụng dữ liệu cache, resource server không đổi gì.
- 4XX: Client Error
    - 400 Bad Request – Request không hợp lệ
    - 401 Unauthorized – Request cần có xác thực.
    - 403 Forbidden – bị từ chối không cho phép.
    - 404 Not Found – Không tìm thấy resource từ URI
    - 405 Method Not Allowed – Phương thức không cho phép với user hiện tại.
- 5XX: Server Error
## Convention
Ví dụ:
- `POST` /v1/posts (tạo mới một bài viết)
- `GET` /v1/posts (lấy danh sách bài viết)
- `GET` /v1/posts/:post_id (lấy chi tiết bài viết với post_id cụ thể)
- `PUT` /v1/posts/:post_id (update bài viết với post_id cụ thể)
- `DELETE` /posts/:post_id (delete bài viết với post_id cụ thể)


