const cartItems = document.querySelectorAll('.card') //selected dom card
window.onload = function () {
  for (let i = 0; i < cartItems.length; i++) {
    const img = document.createElement('img')
    const title = document.createElement('h5')
    const link = document.createElement('a')
    link.classList.add('btn', 'btn-primary', 'gotoFirst')
    title.classList.add('card-title')
    cartItems[i].appendChild(img) //增加子元素
    cartItems[i].appendChild(title)
    cartItems[i].appendChild(link)
    img.src = `./img/${cartData[i].img}` //透過下面的json檔案 渲染的
    title.textContent = cartData[i].name
    link.textContent = '詳細'
  }
  const cartItemsTitle = document.querySelectorAll('.card-title')
  document.querySelectorAll('.gotoFirst').forEach((element, idx) =>
    element.addEventListener('click', function () {
      //點擊詳細按鈕要做的事情
      const cartItemsImg = cartData[idx].img
      autoSwal(cartItemsImg, cartItemsTitle[idx], idx)
    })
  )
}

let autoSwal = (img, title, number) => {
  Swal.fire({
    imageUrl: `./img/${img}`,
    imageWidth: 280,
    imageHeight: 280,
    imageAlt: 'Custom image',
    title: `${title.textContent}`,
    text: "You won't be able to revert this!",
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonColor: '#d33',
    html:
      '<button class="btn btn-primary button-click">' + '詳細' + '</button>',
  }).then(
    document.querySelectorAll('.button-click').forEach((element, idx) =>
      element.addEventListener('click', function () {
        gotoDetail(title.textContent, number)
      })
    )
  )
}

function gotoDetail(title, number) {
  let welcome =
    number === 0 || number === 1 ? '是非 飲んでください' : '是非 食べてください'
  Swal.fire({
    title: welcome,
    html: `<h5>${title}</h5>`,
    timer: 1500,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        const content = Swal.getContent()
        if (content) {
          const b = content.querySelector('b')
          if (b) {
            b.textContent = Swal.getTimerLeft()
          }
        }
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
}

const cartData = [
  {
    name: '日本酒',
    img: '日本酒.png',
  },
  {
    name: '日本酒',
    img: '日本酒進め.png',
  },
  {
    name: '牛ステ_キ',
    img: '牛ステ_キ.png',
  },
  {
    name: '生牡蠣でかい',
    img: '生牡蠣でかい.png',
  },
  {
    name: '刺身盛り合わせ',
    img: '刺身盛り合わせ.png',
  },
  {
    name: '盛り合わせクジラ',
    img: '盛り合わせクジラ.png',
  },
  {
    name: 'から揚げガチョウの',
    img: 'から揚げガチョウの.png',
  },
  {
    name: '鍋すっぼん',
    img: '鍋すっぼん.png',
  },
  {
    name: '鍋ふぐの',
    img: '鍋ふぐの.png',
  },
  {
    name: 'オｓ牛ステ_キ',
    img: 'オｓ牛ステ_キ.png',
  },
  {
    name: 'がに',
    img: 'がに.png',
  },
  {
    name: 'から揚げガチョウの',
    img: 'から揚げガチョウの.png',
  },
  {
    name: 'しゃぶぶり',
    img: 'しゃぶぶり.png',
  },
  {
    name: 'ナマコ',
    img: 'ナマコ.png',
  },
  {
    name: 'の湯引き鱧',
    img: 'の湯引き鱧.png',
  },
  {
    name: 'ぶりしゃぶ',
    img: 'ぶりしゃぶ.png',
  },
]
