function getDisplayedAddress(address) {
  if (!Object(address)) return '';

  let strList = [];

  for (let key in address) {
    strList.push(address[key]);
  }

  let [number, ...rest] = strList;

  return `${number} ${rest.join(', ')}`;
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
