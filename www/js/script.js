let state = {};

// Page init event
document.addEventListener('init', function (event) {
  var page = event.target;

  // TOPページ
  if (page.matches('#first-page')) {

    page.querySelector('#tap-btn').onclick = function () {
      document.querySelector('#navigator').pushPage('select-page.html');
    };
  
  // 最初の選択
  } else if (page.matches('#select-page')) {

    // 色の選択（color-select-pageへ）
    page.querySelector('#color-btn').onclick = function () {
      document.querySelector('#navigator').pushPage('color-select-page.html');
    };
    // 気分の選択へ（mood-select-pageへ）
    page.querySelector('#mood-btn').onclick = function () {
      document.querySelector('#navigator').pushPage('mood-select-page.html');
    };
    // ジャンルの選択（genre-select-pageへ）
    page.querySelector('#genre-btn').onclick = function () {
      document.querySelector('#navigator').pushPage('genre-select-page.html');
    };

    // トップボタン押したら戻る（color-select-pageから最初の選択画面へ）
  } else if (page.matches('#color-select-page')) {

    page.querySelector('#top-btn1').onclick = function () {
      document.querySelector('#navigator').popPage({times: 2});
    }

    // 数字の選択（color-select-pageからnumber-colo-pageへ）
    state.type = "color";
    document.querySelectorAll('.color-select-btn').forEach(function (selected) {
      selected.onclick = function () {
        state.color = selected.getAttribute('data-color');
        document.querySelector('#navigator').pushPage('number-color-page.html');
      };
    })

  } else if (page.matches('#number-color-page')) {
    // トップボタン押したら戻る（number-color-pageから最初の選択画面へ）

    page.querySelector('#top-btn4').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 3 });
    }
    // 作品紹介（number-color-pageからrecommend-pageへ）
    document.querySelectorAll('.number-color-btn').forEach(function (selected) {
      selected.onclick = function () {
        document.querySelector('#navigator').pushPage('recommend-page.html');
      };
    })
  ///////////////////////////////////////////
  // トップボタン押したら戻る（mood-select-pageから最初の選択画面へ）
  } else if (page.matches('#mood-select-page')) {
    page.querySelector('#top-btn2').onclick = function () {
      document.querySelector('#navigator').popPage({times: 2});
    }
    // 数字の選択（mood-select-pageからnumber-mood-pegeへ）
    state.type = "mood";
    document.querySelectorAll('.mood-select-btn').forEach(function (selected) {
      selected.onclick = function () {
        state.mood = selected.getAttribute('data-mood');
        document.querySelector('#navigator').pushPage('number-mood-page.html');
      };
    })

    // トップボタン押したら戻る（number-mood-pageから最初の選択画面へ）
  } else if (page.matches('#number-mood-page')) {

    page.querySelector('#top-btn5').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 3 });
    }
    // 作品紹介（number-mood-pageからrecommend-pageへ）
    document.querySelectorAll('.number-mood-btn').forEach(function (selected) {
      selected.onclick = function () {
        document.querySelector('#navigator').pushPage('recommend-page.html');
      };
    })

  /////////////////////////// 
  // トップボタン押したら戻る（genre-select-pageから最初の選択画面へ）
  } else if (page.matches('#genre-select-page')) {
    page.querySelector('#top-btn3').onclick = function () {
      document.querySelector('#navigator').popPage({times: 2});
    }
    // 数字の選択（genre-select-pageからnumber-genre-pageへ）
    state.type = "genre";
    document.querySelectorAll('.genre-select-btn').forEach(function (selected) {
      selected.onclick = function () {
        state.genre = selected.getAttribute('data-genre');
        document.querySelector('#navigator').pushPage('number-genre-page.html');
      };
    })

    // トップボタン押したら戻る（number-genre-pageから最初の選択画面へ）
  } else if (page.matches('#number-genre-page')) {
    page.querySelector('#top-btn6').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 3 });
    }
    // 作品紹介（number-genre-pageからrecommend-pageへ）
    document.querySelectorAll('.number-genre-btn').forEach(function (selected) {
      selected.onclick = function () {
        document.querySelector('#navigator').pushPage('recommend-page.html');
      };
    })

    ////////////////////////////////
    // 作品タイトルと画像を表示
    // （色の中でランダムに作品表示）
  } else if (page.matches('#recommend-page')) {
    let infoElementArray = [];
    let infoElement = {};
    // トップボタン押したら戻る（recommend-pageから最初の選択画面へ）
    page.querySelector('#top-btn7').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 4 });
    }
      
    // actorになにかしらの値があったら
    document.querySelectorAll('.next-btn').forEach(function (selected) {
      selected.onclick = function () {
        document.querySelector('#navigator').pushPage('bald-cast-page.html');
      };

    if (state.type === "color") {
      infoElementArray = colorList.filter(element => element.color === state.color);
      infoElement = infoElementArray[Math.floor(Math.random() * infoElementArray.length)];
    } else if (state.type === "mood") {
      infoElementArray = moodList.filter(element => element.mood === state.mood);
      infoElement = infoElementArray[Math.floor(Math.random() * infoElementArray.length)];
    } else if (state.type === "genre") {
      infoElementArray = genreList.filter(element => element.genre === state.genre);
      infoElement = infoElementArray[Math.floor(Math.random() * infoElementArray.length)];
    };

    let recommend = document.querySelector('#recommend-film-title');
    let srcUrl = `film-img/${infoElement.title}.jpg`;
    let recommendComment = document.querySelector('#recommend-comment');
    let srcUrlActor = `bald-img/${infoElement.title}.jpg`;
    let allFilm = document.querySelector('#film-all');
    recommend.textContent = `『${infoElement.title}』`;
    document.getElementById('recommend-film-img').src = srcUrl;
    recommendComment.textContent = `(${infoElement.comment})`;
    document.getElementById('bald').src = srcUrlActor;
    allFilm.textContent = infoElementArray;
  })

  // baldキャストがいた("actor"に値がある)場合のみ表示したいページ
  // 写真を入れる
} else if (page.matches('#bald-cast-page')) {
  
    // トップボタン押したら戻る（bald-cast-pageから最初の選択画面へ）
    page.querySelector('#top-btn8').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 5 });
    }
    let srcUrlActor = `bald-img/${infoElement.title}.jpg`;
    document.getElementById('bald').src = srcUrlActor;
    ;
  };

})

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}
