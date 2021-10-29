//fetch trả về 1 promise => có thể then then then...  catch
// => 2 trạng thái của promise: fulfilled, reject

const url = 'https://js-post-api.herokuapp.com/api/student?_page=1';

const init = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_TOKEN_HERE',
  },

  body: JSON.stringify({ name: 'Luu quang tri' }),
};

fetch('https://js-post-api.herokuapp.com/api/student?_page=1')
  .then((res) => res.json())
  .then((data) => console.log(data));

/** Common status code
 * status code    Name                      desc
 * 200            ok
 * 201            created                   tạo thành công
 * 301            moved permanently         redirect web sang 1 web khác
 * 400            bad request               gửi thông tin không đúng
 * 401            unauthorized              chưa đăng nhập
 * 403            forbidden                 đăng nhập rồi nhưng không có quyềns
 * 404            not found                 không tồn tại url
 * 429            too many requests         gọi quá nhìu request
 * 500            internal server error     lỗi bên phía server
 * 502            bad gateway               truy cập server không được
 */

fetch('https://js-post-api.herokuapp.com/api/student?_page=1', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => {
    if (res.ok) return res.json();

    return res.json().then((data) => {
      throw new Error(data?.message || 'something went wrong !!');
    });
  })
  .catch((err) => {
    console.log(err);
  });

//add new Student

fetch('https://js-post-api.herokuapp.com/api/student?_page=1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'tri',
    age: 12,
  }),
}).then(...).catch(...);
