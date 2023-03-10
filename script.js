document.addEventListener('DOMContentLoaded', function() {
  const langs = [
    'danish-text',
    'english-text',
    'chinese-text',
    'hindi-text',
    'french-text',
    'spanish-text',
    'arabic-text'
  ];
  let currentLang = langs[0];

  // function to toggle language
  function toggleLang() {
    // hide current language
    document.getElementById(currentLang).classList.add('hidden');

    // find index of current language and select next language
    const currentIndex = langs.indexOf(currentLang);
    currentLang = langs[(currentIndex + 1) % langs.length];

    // show next language
    document.getElementById(currentLang).classList.remove('hidden');

    // add blink animation to button
    const button = document.getElementById('toggle-button');
    button.classList.add('blink');
    setTimeout(() => button.classList.remove('blink'), 170);
  }

  // add click event listener to toggle button
  document.getElementById('toggle-button').addEventListener('click', toggleLang);

  // show default language (danish-text)
  document.getElementById('danish-text').classList.remove('hidden');
});


const addButtons = document.querySelectorAll('.add a');
const contents = document.querySelectorAll('#file, #image, #mail, #chat');

addButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    addButtons.forEach((b) => {
      b.classList.remove('active');
    });
    contents.forEach((content) => {
      content.classList.remove('active');
    });

    button.classList.add('active');
    contents[index].classList.add('active');
  });
});




// // JavaScript code
// document.addEventListener('DOMContentLoaded', function() {
//     const langs = [
//       'danish-text',
//       'english-text',
//       'chinese-text',
//       'hindi-text',
//       'french-text',
//       'spanish-text',
//       'arabic-text'
//     ];
//     let currentLang = langs[0];
  
//     // function to toggle language
//     function toggleLang() {
//       // hide current language
//       document.getElementById(currentLang).classList.add('hidden');
  
//       // find index of current language and select next language
//       const currentIndex = langs.indexOf(currentLang);
//       currentLang = langs[(currentIndex + 1) % langs.length];
  
//       // show next language
//       document.getElementById(currentLang).classList.remove('hidden');
//     }
  
//     // add click event listener to toggle button
//     document.getElementById('toggle-button').addEventListener('click', toggleLang);
  
//     // show default language (danish-text)
//     document.getElementById('danish-text').classList.remove('hidden');
//   });
  