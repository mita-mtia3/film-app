let state = {};

// Page init event
document.addEventListener('init', function(event) {
  var page = event.target;

// TOPページできたらいいな


// 最初の選択
// (色)
// 色の選択へ
if (page.matches('#select-page')) {

  page.querySelector('#color-btn').onclick = function() {
    document.querySelector('#navigator').pushPage('color-select-page.html');
  };

} else if (page.matches('#color-select-page')) {

  page.querySelector('#top-btn').onclick = function() {
    document.querySelector('#navigator').popPage();
  };

}

// 数字の選択へ(色)
  state.type = "color";

  if (page.matches('#color-select-page')) {
    
    document.querySelectorAll('.color-select-btn').forEach(function (selected) {
     selected.onclick = function() {
       state.color = selected.getAttribute('data-color');
      document.querySelector('#navigator').pushPage('number-color-page.html') ;
    };
  });

  } else if (page.matches('#number-color-page')) {

  page.querySelector('#top-btn').onclick = function() {
    document.querySelector('#navigator').popPage({times: 2});
  };
  }

// 色の中でランダム
// 作品紹介(色)

    if (page.matches('#number-color-page')) {
    
    document.querySelectorAll('.number-color-btn').forEach(function (selected) {
     selected.onclick = function() {
      document.querySelector('#navigator').pushPage('recommend-page.html');
    };
  });
  

    } else if (page.matches('#recommend-page')) {
      
    page.querySelector('#top-btn').onclick = function() {
      document.querySelector('#navigator').popPage({times: 3});

  // とりあえず書いた  
    let infoElementArray = colorList.filter(element => element.color === state.color);
    let infoElement = infoElementArray[Math.floor(Math.random() * infoElementArray.length)];
    };
    }

// (気分)
// 気分の選択へ

if (page.matches('#select-page')) {

  page.querySelector('#mood-btn').onclick = function() {
    document.querySelector('#navigator').pushPage('mood-select-page.html');
  };
  

  } else if (page.matches('#mood-select-page')) {

  page.querySelector('#top-btn').onclick = function() {
    document.querySelector('#navigator').popPage();
  };
}

// 数字の選択へ（気分）
  state.type = "mood";

  if (page.matches('#mood-select-page')) {
    
    document.querySelectorAll('.mood-select-btn').forEach(function (selected) {
     selected.onclick = function() {
      document.querySelector('#navigator').pushPage('number-mood-page.html');
    };
  });

    } else if (page.matches('#number-mood-page')) {

    page.querySelector('#top-btn').onclick = function() {
      document.querySelector('#navigator').popPage({times: 2});
    };
    }

// 気分の中でランダム
// 作品紹介(気分)
  if (page.matches('#number-mood-page')) {
    
    document.querySelectorAll('.number-mood-btn').forEach(function (selected) {
     selected.onclick = function() {
      document.querySelector('#navigator').pushPage('recommend-page.html');
    };
  });

    } else if (page.matches('#recommend-page')) {

    page.querySelector('#top-btn').onclick = function() {
      document.querySelector('#navigator').popPage({times: 3});

  // とりあえず書いた  
    let infoElementArray = moodList.filter(element => element.mood === state.mood);
    let infoElement = infoElementArray[Math.floor(Math.random() * infoElementArray.length)];
    };
    }

// (ジャンル)
// ジャンルの選択へ
  if (page.matches('#select-page')) {

    page.querySelector('#genre-btn').onclick = function() {
      document.querySelector('#navigator').pushPage('genre-select-page.html');
    };

    } else if (page.matches('#genre-select-page')) {

    page.querySelector('#top-btn').onclick = function() {
      document.querySelector('#navigator').popPage();
    };
   }

// 数字の選択へ（ジャンル）
    state.type = "genre";

    if (page.matches('#genre-select-page')) {
      
      document.querySelectorAll('.genre-select-btn').forEach(function (selected) {
      selected.onclick = function() {
        document.querySelector('#navigator').pushPage('number-genre-page.html');
      };
    });
      } else if (page.matches('#number-genre-page')) {

      page.querySelector('#top-btn').onclick = function() {
        document.querySelector('#navigator').popPage({times: 2});
     };
    }
    
// ジャンルの中でランダム
// 作品紹介(ジャンル)
      if (page.matches('#number-genre-page')) {
        
        document.querySelectorAll('.number-genre-btn').forEach(function (selected) {
        selected.onclick = function() {
          document.querySelector('#navigator').pushPage('recommend-page.html');
        };
      });

      } else if (page.matches('#recommend-page')) {

      page.querySelector('#top-btn').onclick = function() {
        document.querySelector('#navigator').popPage({times: 3});

     // とりあえず書いた
      let infoElementArray = genreList.filter(element => element.genre === state.genre);
      let infoElement = infoElementArray[Math.floor(Math.random() * infoElementArray.length)];
      };
      }
   
// baldキャストがいた場合のみ表示したいページ
      if (page.matches('#recommend-page')) {
              
        document.querySelectorAll('.next').forEach(function (selected) {
        selected.onclick = function() {
          document.querySelector('#navigator').pushPage('bald-cast-page.html');
        };
      });

      } else if (page.matches('#bald-cast-page')) {

      page.querySelector('#top-btn').onclick = function() {
        document.querySelector('#navigator').popPage({times: 4});
      };
      }

});

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}
