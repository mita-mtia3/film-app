let state = {};

// Page init event
document.addEventListener('init', function (event) {
  var page = event.target;

  // TOPページできたらいいな


  // 最初の選択
  // ＜色＞
  if (page.matches('#select-page')) {

    // 色の選択（color-select-pageへ）
    page.querySelector('#color-btn').onclick = function () {
      document.querySelector('#navigator').pushPage('color-select-page.html');
    };
    // トップボタン押したら戻る（color-select-pageから最初の選択画面へ）
  } else if (page.matches('#color-select-page')) {

    page.querySelector('#top-btn').onclick = function () {

      document.querySelector('#navigator').popPage();
    }

    // 数字の選択（color-select-pageからnumber-colo-pageへ）
    state.type = "color";
    document.querySelectorAll('.color-select-btn').forEach(function (selected) {
      selected.onclick = function () {
        state.color = selected.getAttribute('data-color');
        document.querySelector('#navigator').pushPage('number-color-page.html');
      };
    })

    // トップボタン押したら戻る（number-color-pageから最初の選択画面へ）
  } else if (page.matches('#number-color-page')) {

    page.querySelector('#top-btn').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 2 });
    }
    // 作品紹介（number-color-pageからrecommend-pageへ）
    // 作品タイトルと画像を表示
    // 色の中でランダムに作品表示
    document.querySelectorAll('.number-color-btn').forEach(function (selected) {
      selected.onclick = function () {
        document.querySelector('#navigator').pushPage('recommend-page.html');
      };
    })

    // トップボタン押したら戻る（recommend-pageから最初の選択画面へ）
  } else if (page.matches('#recommend-page')) {

    page.querySelector('#top-btn').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 3 });

      // とりあえず書いた (表示はまだ)
      let infoElementArray = colorList.filter(element => element.color === state.color);
      let infoElement = infoElementArray[Math.floor(Math.random() * infoElementArray.length)];
    };
  }




  // <気分>
  if (page.matches('#select-page')) {

    // 気分の選択へ（mood-select-pageへ）
    page.querySelector('#mood-btn').onclick = function () {
      document.querySelector('#navigator').pushPage('mood-select-page.html');
    };

    // トップボタン押したら戻る（mood-select-pageから最初の選択画面へ）
  } else if (page.matches('#mood-select-page')) {
    page.querySelector('#top-btn').onclick = function () {
      document.querySelector('#navigator').popPage();
    }
    // 数字の選択（mood-select-pageからnumber-mood-pegeへ）
    state.type = "mood";
    document.querySelectorAll('.mood-select-btn').forEach(function (selected) {
      selected.onclick = function () {
        document.querySelector('#navigator').pushPage('number-mood-page.html');
      };
    })

    // トップボタン押したら戻る（number-mood-pageから最初の選択画面へ）
  } else if (page.matches('#number-mood-page')) {
    page.querySelector('#top-btn').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 2 });
    }
    // 作品紹介（number-mood-pageからrecommend-pageへ）
    // 作品タイトルと画像を表示
    // 気分の中でランダムに作品表示
    document.querySelectorAll('.number-mood-btn').forEach(function (selected) {
      selected.onclick = function () {
        document.querySelector('#navigator').pushPage('recommend-page.html');
      };
    })

    // トップボタン押したら戻る（recommend-pageから最初の選択画面へ）
  } else if (page.matches('#recommend-page')) {
    page.querySelector('#top-btn').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 3 });

      // とりあえず書いた (表示はまだ)
      let infoElementArray = moodList.filter(element => element.mood === state.mood);
      let infoElement = infoElementArray[Math.floor(Math.random() * infoElementArray.length)];
    };
  }




  // ＜ジャンル＞
  if (page.matches('#select-page')) {

    // ジャンルの選択（genre-select-pageへ）
    page.querySelector('#genre-btn').onclick = function () {
      document.querySelector('#navigator').pushPage('genre-select-page.html');
    };

    // トップボタン押したら戻る（genre-select-pageから最初の選択画面へ）
  } else if (page.matches('#genre-select-page')) {
    page.querySelector('#top-btn').onclick = function () {
      document.querySelector('#navigator').popPage();
    }
    // 数字の選択（genre-select-pageからnumber-genre-pageへ）
    state.type = "genre";
    document.querySelectorAll('.genre-select-btn').forEach(function (selected) {
      selected.onclick = function () {
        document.querySelector('#navigator').pushPage('number-genre-page.html');
      };
    })

    // トップボタン押したら戻る（number-genre-pageから最初の選択画面へ）
  } else if (page.matches('#number-genre-page')) {
    page.querySelector('#top-btn').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 2 });
    }
    // 作品紹介（number-genre-pageからrecommend-pageへ）
    // 作品タイトルと画像を表示
    // ジャンルの中でランダムに作品表示
    document.querySelectorAll('.number-genre-btn').forEach(function (selected) {
      selected.onclick = function () {
        document.querySelector('#navigator').pushPage('recommend-page.html');
      };
    })

    // トップボタン押したら戻る（recommend-pageから最初の選択画面へ）
  } else if (page.matches('#recommend-page')) {
    page.querySelector('#top-btn').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 3 });

      // とりあえず書いた（表示はまだ）
      let infoElementArray = genreList.filter(element => element.genre === state.genre);
      let infoElement = infoElementArray[Math.floor(Math.random() * infoElementArray.length)];
    };
  }

  // baldキャストがいた場合のみ表示したいページ
  // 写真もいれて
  if (page.matches('#recommend-page')) {
    document.querySelectorAll('.next').forEach(function (selected) {
      selected.onclick = function () {
        document.querySelector('#navigator').pushPage('bald-cast-page.html');
      };
    });

    // トップボタン押したら戻る（bald-cast-pageから最初の選択画面へ）
  } else if (page.matches('#bald-cast-page')) {

    page.querySelector('#top-btn').onclick = function () {
      document.querySelector('#navigator').popPage({ times: 4 });
    };
  };

})

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}
