const myStr = '         Front end dev D          ';

/**
 * remove space in string, all charater uppercase, change dev to Designer, after that repeat 2 times
 */
const myStr = '         Front end dev D          ';
console.log(myStr.trim().replace('dev D', 'Designer ').toUpperCase().repeat(2));
