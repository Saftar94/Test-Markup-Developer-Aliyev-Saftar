import { debounce } from 'lodash'
// import swal from 'sweetalert'
import fotoTpl from '../templates/galerry.hbs'
import fotoBlockTpl from '../templates/galerry-block.hbs'
import NewsApiService from '../js/apiserver'

const refs = {
  listcard: document.querySelector('.js-gallery'),
  serchmoreButton: document.querySelector('.js-button'),
  blockSvg: document.querySelector('.js-block'),
  capaSvgInline: document.querySelector('.js-inline-block'),
  capaSvg: document.querySelector('.capa-svg'),
  capatSvg: document.querySelector('.capat-svg'),
}

const newsApiService = new NewsApiService()

refs.serchmoreButton.addEventListener('click', testCard)
refs.blockSvg.addEventListener('click', fetachMoreCard)
refs.capaSvgInline.addEventListener('click', fetachblockCard)

function testCard() {
  newsApiService.fetchArticles().then(appendf)
}
function appendf() {
  fetachblockCard()
}

function fetachblockCard() {
  newsApiService
    .fetchArticles()
    .then(appendfotoblockTpl)
    .catch((error) => console.log(error))
}

function appendfotoblockTpl(articles) {
  if (articles) {
    refs.listcard.insertAdjacentHTML('beforeend', fotoTpl(articles))
    refs.capatSvg.classList.add('capa-svg-current')
  } else {
    fetachMoreCard()
  }
}

function fetachMoreCard() {
  newsApiService
    .fetchArticles()
    .then(appendfotoTpl)
    .catch((error) => console.log(error))
}

function appendfotoTpl(articles) {
  refs.listcard.insertAdjacentHTML('beforeend', fotoBlockTpl(articles))
  refs.capaSvg.classList.add('capa-svg-current')
}

// function clearArticalse() {
//   refs.listcard.innerHTML = ''
// }

// function errorNotifi() {
//   swal({
//     title: 'Are you sure?',
//     text: 'Please enter text!',
//     type: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#DD6B55',
//     confirmButtonText: 'Ja, Bestellung aufgeben!',
//     closeOnConfirm: false,
//   })
// }
