## Async/ Await

`Async` :khai báo một hàm bất đồng bộ
- Tự động biến đổi một hàm thông thường thành một Promise.
- Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
- Async cho phép sử dụng Await.

**Ví dụ**

    async function myFunction() {
        return "Hello";
    }
Tương tự như trên:

    async function myFunction() {
        return Promise.resolve("Hello");
    }

`Await` được sử dụng để chờ một Promise.

- Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
- Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
- Await chỉ có thể được sử dụng bên trong các function async.

**Ví dụ**

        async function myDisplay() {
        let myPromise = new Promise(function(resolve, reject) {
            resolve("I love You !!");
        });
        document.getElementById("demo").innerHTML = await myPromise;
        }

        myDisplay();

### `Xử lí lỗi với Async/Await`
Dùng try…catch để giải quyết các lỗi reject và exception

Ví dụ: 

    async function f() {

    try {
        let response = await fetch('http://no-such-url');
    } catch(err) {
        alert(err); // TypeError: failed to fetch
    }
    }

    f();