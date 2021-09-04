/**
 *  Hiển thị địa chỉ người dùng
Viết hàm getDisplayedAddress(address) để ghép chuỗi từ các thuộc tính của object address thành một
chuỗi address hoàn chỉnh
Chuỗi trả về có dạng: "address.number address.street, address.ward, address.district, address.city"
Lưu ý object address không phải lúc nào cũng có đầy đủ các thông tin trên.
 */

function getDisplayedAddress(address) {
  if (!Object(address) || address === {}) return {};
  let strList = [];

  for (let key in address) {
    strList.push(address[key]);
  }

  // return string
  if (address.number) {
    // const firstStr = strList.slice(0, 1);
    // const rest = [...strList.slice(1)].join(', ');

    const [firstWord, ...rest] = strList;
    return `${firstWord} ${rest.join(', ')}`;
  }
  return strList.join(', ');
}

console.log(
  getDisplayedAddress({
    number: 123,
    street: 'Nguyen Cong Tru',
    ward: 'Ward 11',
    district: 'Binh Thanh District',
    city: 'HCMC',
  })
);

console.log(
  getDisplayedAddress({
    street: 'Nguyen Cong Tru',
    district: 'Binh Thanh District',
  })
);
