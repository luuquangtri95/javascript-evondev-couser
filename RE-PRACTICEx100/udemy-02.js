// please use these constants in your code
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

function getLanguageCodeFromURL(str) {
  const strArrList = str.split('.').slice(1);
  const languageUrl = strArrList.join('').split('/');

  for (let value of languageUrl) {
    if (value === ' ' || value === 'com') {
      return DEFAULT_LANGUAGE;
    }
    if (SUPPORTED_LANGUAGE_LIST.includes(value)) {
      return value;
    }
  }

  return DEFAULT_LANGUAGE;
}

console.log(getLanguageCodeFromURL('https://abc.com/'));
console.log(getLanguageCodeFromURL('https://abc.com/en'));
console.log(getLanguageCodeFromURL('https://abc.com/vi'));
console.log(getLanguageCodeFromURL('https://abc.com/cn'));
console.log(getLanguageCodeFromURL('https://abc.com/abc'));
