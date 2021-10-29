const student = {
  name: 'trie',

  sayHello() {
    console.log('name:', this.name);
    console.log('this:', this);
  },
};

setTimeout(student.sayHello); // tương đương setTimeout(()=>{}) =>  this sẽ là global obj

setTimeout(() => {
  console.log('this', this);

  student.sayHello();
});

setTimeout(student.sayHello.bind(student));

//**********************/

const student = {
  name: 'Easy Frontend',

  normal() {
    console.log('NAME', this.name);
    console.log('THIS', this);
  },

  arrow: () => {
    console.log('NAME', this.nFame);
    console.log('THIS', this);
  },

  timeoutNormal() {
    console.log('OUTER THIS', this);

    setTimeout(function () {
      console.log('NAME', this.name);
      console.log('THIS', this);
    });
  },

  timeoutArrow() {
    console.log('OUTER THIS', this);

    setTimeout(() => {
      console.log('NAME', this.name);
      console.log('THIS', this);
    });
  },
};

console.log(student.normal());
