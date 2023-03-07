(() => {
  'use strict';
  var t = {
    d: (e, o) => {
      for (var n in o)
        t.o(o, n) &&
          !t.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: o[n] });
    },
    o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
  };
  t.d({}, { Z: () => Mt });
  let e = document.querySelector('.name');
  let o;
  const n = document.querySelector('.date');
  let s = new Date();
  const a = function t(e) {
      const a = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      };
      (o =
        'ru' == e
          ? s.toLocaleDateString('ru-RU', a)
          : s.toLocaleDateString('en-US', a)),
        (n.textContent = o),
        setTimeout(t, 36e5);
    },
    c = function () {
      const t = new Date().getHours();
      let e = ['morning', 'afternoon', 'evening', 'night'],
        o = Math.ceil(t / 6);
      return 1 === o
        ? e[0]
        : 2 === o
        ? e[1]
        : 3 === o
        ? e[2]
        : 4 === o || 0 == o
        ? e[3]
        : void 0;
    };
  let i;
  function l() {
    let t,
      e = new Image(),
      o = c();
    !(function () {
      let t = Math.floor(20 * Math.random()) + 1;
      i = String(t).padStart(2, '0');
    })(),
      (t = `url('https://raw.githubusercontent.com/lidasharova/stage1-tasks/assets/images/${o}/${i}.jpg')`),
      (e.src = `https://raw.githubusercontent.com/lidasharova/stage1-tasks/assets/images/${o}/${i}.jpg`),
      (e.onload = () => {
        document.body.style.backgroundImage = t;
      });
  }
  const r = document.querySelector('.weather-icon'),
    u = document.querySelector('.temperature'),
    d = document.querySelector('.weather-description'),
    m = document.querySelector('.city');
  async function g(t) {
    let e = `https://api.openweathermap.org/data/2.5/weather?q=${m.value}&lang=${t}&appid=165f4afa25f81abcc4f5d808337fd521&units=metric`;
    const o = await fetch(e),
      n = await o.json();
    console.log(n),
      (r.className = 'weather-icon owf'),
      r.classList.add(`owf-${n.weather[0].id}`),
      (u.textContent = `${n.main.temp}°C`),
      (d.textContent = n.weather[0].description);
  }
  const h = document.querySelector('.quote'),
    v = document.querySelector('.author'),
    y = async function (t) {
      const e = await fetch('dist/quotes.json'),
        o = await e.json();
      let n = Math.floor(Math.random() * (o.length - 0 + 0)) + 0;
      'ru' === t &&
        ((h.textContent = o[n].textRu), (v.textContent = o[n].authorRu)),
        'en' === t &&
          ((h.textContent = o[n].textEn), (v.textContent = o[n].authorEn));
    },
    p = function (t) {
      console.log(t), t.classList.toggle('pause');
    },
    L = ['Доброе утро,', 'Добрый день,', 'Добрый вечер,', 'Доброй ночи,'],
    S = ['Good morning,', 'Good afternoon,', 'Good evening,', 'Good night,'],
    f = document.querySelector('.greeting'),
    q = new Date().getHours();
  let b = Math.ceil(q / 6);
  const w = function t(e) {
      'en' != e || (0 !== b && 1 !== b)
        ? 'en' == e && 2 === b
          ? (f.textContent = S[0])
          : 'en' == e && 3 === b
          ? (f.textContent = S[1])
          : 'en' == e && 4 === b
          ? (f.textContent = S[2])
          : 'ru' != e || (0 !== b && 1 !== b)
          ? 'ru' == e && 2 === b
            ? (f.textContent = L[0])
            : 'ru' == e && 3 === b
            ? (f.textContent = L[1])
            : 'ru' == e &&
              4 === b &&
              ((f.textContent = L[2]), setTimeout(t, 36e5))
          : (f.textContent = L[3])
        : (f.textContent = S[3]);
    },
    k = [
      {
        title: 'Aqua Caelestis',
        src: '../assets/sounds/Aqua Caelestis.mp3',
        duration: '00:40',
      },
      {
        title: 'Bad boys blue-You`re a woman',
        src: '../assets/sounds/Bad boys blue-You`re a woman.mp3',
        duration: '00:40',
      },
      {
        title: 'Bethoven-Lunnaja sonata',
        src: '../assets/sounds/Bethoven-Lunnaja sonata.mp3',
        duration: '05:43',
      },
      {
        title: 'Bethoven-tishina',
        src: '../assets/sounds/Bethoven-tishina.mp3',
        duration: '02:38',
      },
      {
        title: 'Bethoven',
        src: '../assets/sounds/Bethoven.mp3',
        duration: '02:33',
      },
      {
        title: 'Ennio Morricone',
        src: '../assets/sounds/Ennio Morricone.mp3',
        duration: '01:37',
      },
      {
        title: 'Lunnaja sonata',
        src: '../assets/sounds/Lunnaja sonata.mp3',
        duration: '03:10',
      },
      {
        title: 'Mocart-Muzika angelov',
        src: '../assets/sounds/Mocart-muzika angelov.mp3',
        duration: '09:06',
      },
      {
        title: 'Mocart-Polet pechali',
        src: '../assets/sounds/Mocart-Polet pechali.mp3',
        duration: '03:22',
      },
      {
        title: 'Mocart-Simfonija ',
        src: '../assets/sounds/Mocart-Simfonija.mp3',
        duration: '00:30',
      },
      {
        title: 'Mocart-Vals',
        src: '../assets/sounds/Mocart-vals.mp3',
        duration: '00:40',
      },
      {
        title: 'Mocart-Vivaldi',
        src: '../assets/sounds/Mocart-vivaldi.mp3',
        duration: '00:30',
      },
      {
        title: 'Moonson',
        src: '../assets/sounds/Moonson.mp3',
        duration: '00:40',
      },
      {
        title: 'River Flows In You',
        src: '../assets/sounds/River Flows In You.mp3',
        duration: '01:35',
      },
      {
        title: 'Shostakovich-nezhnost',
        src: '../assets/sounds/Shostakovich-nezhnost.mp3',
        duration: '00:58',
      },
      {
        title: 'Vals dozhdja',
        src: '../assets/sounds/Vals dozhdja.mp3',
        duration: '00:58',
      },
      {
        title: 'Vivaldi-zima',
        src: '../assets/sounds/Vivaldi-zima.mp3',
        duration: '00:58',
      },
      {
        title: 'Yaponskaja muzika',
        src: '../assets/sounds/Yaponskaja muzika.mp3',
        duration: '00:58',
      },
    ],
    E = function () {
      document.querySelectorAll('.item-song').forEach((t) => {
        t.textContent == k[I].title
          ? t.classList.add('item-active')
          : t.classList.remove('item-active');
      });
    };
  let M = [];
  const x = document.querySelector('.play-list');
  k.forEach((t) => {
    M.push(t.title);
  });
  let j = [];
  const C = function () {
      !(function () {
        j = [];
        for (let t = 0; t < 4; t++) {
          let e = I + t;
          void 0 !== M[e] ? j.push(M[e]) : (e = 0);
        }
      })(),
        (x.innerHTML = ''),
        j.forEach((t) => {
          let e = `\n    <div class="play-item">\n    <div class="play-item-img"></div>\n    <div class="item-song">${t}</div>\n    </div>\n      `;
          x.insertAdjacentHTML('beforeend', e);
        });
    },
    $ = function () {
      document.querySelector('.item-active').classList.remove('item-active');
    };
  document.querySelector('.play');
  let z = document.querySelector('.time-song'),
    I = 0;
  function T() {
    (Mt.src = k[I].src), Mt.play(), C(), E();
  }
  function B() {
    Mt.pause(), $();
  }
  function G() {
    I < k.length ? (I++, C(), E(), T()) : ((I = 0), C(), E(), T());
  }
  function D() {
    I > 0 ? (I--, C(), E(), T()) : ((I = k.length), C(), E(), T());
  }
  let A = document.querySelector('.settings');
  let P,
    V,
    Y = document.querySelector('.player'),
    H = document.querySelector('.weather'),
    R = document.querySelector('.time'),
    U = document.querySelector('.date'),
    _ = document.querySelector('.quote-container'),
    F = document.querySelector('.greeting-container'),
    O = document.querySelector('.Time'),
    Q = document.querySelector('.Date'),
    N = document.querySelector('.Weather'),
    W = document.querySelector('.Greeting'),
    X = document.querySelector('.Player'),
    Z = document.querySelector('.Quote'),
    J = document.querySelector('.GitHub'),
    K = document.querySelector('.Unsplash'),
    tt = document.querySelector('.Flickr');
  function et() {
    J.classList.toggle('button-active');
  }
  function ot() {
    K.classList.toggle('button-active');
  }
  function nt() {
    tt.classList.toggle('button-active');
  }
  let st = new Image();
  const at = async function () {
    const t = await fetch(
        'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=hhPlBGedeO_U6VRYuu0X4zM6E2f7k68TCN46p3x7gUM'
      ),
      e = await t.json();
    console.log(e.urls.regular),
      (V = e.urls.regular),
      console.log(V),
      (P = `url('${V}')`),
      console.log(P),
      (st.src = V),
      (st.onload = () => {
        document.body.style.backgroundImage = P;
      });
  };
  let ct;
  const it = async function () {
    let t = '',
      e = '',
      o = new Image();
    ct = Math.floor(20 * Math.random()) + 1;
    const n = await fetch(
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8bbd7282d3a76766c8fb0b458dfd3a5c&tags=nature&extras=url_l&format=json&nojsoncallback=1'
    );
    let s = await n.json();
    console.log(s),
      console.log(s.photos.photo[ct].url_l),
      (e = s.photos.photo[ct].url_l),
      console.log(e),
      (t = `url('${e}')`),
      console.log(t),
      (o.src = e),
      (o.onload = () => {
        document.body.style.backgroundImage = t;
      });
  };
  let lt = 'en',
    rt = document.querySelector('.play');
  console.log(rt),
    (function t() {
      const e = document.querySelector('.time');
      let o;
      (o = new Date().toLocaleTimeString()),
        (e.textContent = o),
        setTimeout(t, 1e3);
    })(),
    a(lt),
    w(lt),
    y(lt),
    l(),
    window.addEventListener('beforeunload', function () {
      localStorageName.setItem('name', e.value);
    }),
    window.addEventListener('load', function () {
      localStorageName.getItem('name') &&
        (e.value = localStorageName.getItem('name'));
    });
  let ut = document.querySelector('.slide-next'),
    dt = document.querySelector('.slide-prev');
  ut.addEventListener('click', () => {
    i < 20 ? (i++, l()) : ((i = 1), l()), y(lt);
  }),
    dt.addEventListener('click', () => {
      i > 1 ? (i--, l()) : ((i = 20), l()), y(lt);
    }),
    m.addEventListener('change', () => {
      g(lt);
    }),
    document.querySelector('.change-quote').addEventListener('click', () => {
      'en' === lt ? y('en') : 'ru' === lt && y('ru');
    });
  const mt = new Audio();
  let gt = !1;
  rt.addEventListener('click', p(rt)),
    C(),
    rt.addEventListener('click', () => {
      0 == gt ? (T(), (gt = !0)) : (B(), (gt = !1));
    });
  let ht = document.querySelectorAll('.play-item-img');
  console.log(ht),
    ht.forEach((t) => {
      t.addEventListener('click', (t) => {
        let e = t.target;
        0 == gt
          ? (console.log(e), p(e), p(rt), (gt = !0), T())
          : 1 == gt && (p(e), p(rt), (gt = !1), B());
      });
    }),
    mt.addEventListener('timeupdate', function (t) {
      const { duration: e, currentTime: o } = t.srcElement;
      let n = Math.round(o),
        s = Math.round(e);
      console.log(s), console.log(n);
      let a = (n / s) * 100;
      console.log(a),
        (z.style.width = `${a}%`),
        n == s && I < k.length
          ? (I++, T())
          : n == s && I >= k.length && ((I = 0), T());
    });
  const vt = document.querySelector('.play-prev'),
    yt = document.querySelector('.play-next');
  vt.addEventListener('click', () => {
    gt ? D() : ((gt = !0), D(), p(rt));
  }),
    yt.addEventListener('click', () => {
      gt ? G() : ((gt = !0), G(), p(rt));
    }),
    document
      .querySelector('.setting-img ')
      .addEventListener('click', function () {
        A.classList.toggle('open-settings');
      });
  let pt = document.querySelector('.Time '),
    Lt = document.querySelector('.Date'),
    St = document.querySelector('.Weather '),
    ft = document.querySelector('.Greeting '),
    qt = document.querySelector('.Player '),
    bt = document.querySelector('.Quote ');
  pt.addEventListener('click', () => {
    R.classList.toggle('hide'), O.classList.toggle('button-active');
  }),
    Lt.addEventListener('click', () => {
      U.classList.toggle('hide'), Q.classList.toggle('button-active');
    }),
    St.addEventListener('click', () => {
      H.classList.toggle('hide'), N.classList.toggle('button-active');
    }),
    ft.addEventListener('click', () => {
      F.classList.toggle('hide'), W.classList.toggle('button-active');
    }),
    qt.addEventListener('click', () => {
      Y.classList.toggle('hide'), X.classList.toggle('button-active');
    }),
    bt.addEventListener('click', () => {
      _.classList.toggle('hideQuote'), Z.classList.toggle('button-active');
    }),
    document
      .querySelectorAll('input[type=radio][name="language"]')
      .forEach((t) =>
        t.addEventListener('change', () => {
          console.log(t.value), (lt = t.value), g(lt), a(lt), w(lt), y(lt);
        })
      );
  let wt = document.querySelector('.GitHub'),
    kt = document.querySelector('.Unsplash'),
    Et = document.querySelector('.Flickr');
  wt.addEventListener('click', () => {
    l(),
      et(),
      kt.classList.contains('button-active') &&
      Et.classList.contains('button-active')
        ? (nt(), ot())
        : kt.classList.contains('button-active')
        ? ot()
        : Et.classList.contains('button-active') && nt();
  }),
    kt.addEventListener('click', () => {
      at(),
        ot(),
        wt.classList.contains('button-active') &&
        Et.classList.contains('button-active')
          ? (nt(), et())
          : wt.classList.contains('button-active')
          ? et()
          : Et.classList.contains('button-active') && nt();
    }),
    Et.addEventListener('click', () => {
      it(),
        nt(),
        wt.classList.contains('button-active') &&
        kt.classList.contains('button-active')
          ? (ot(), et())
          : wt.classList.contains('button-active')
          ? et()
          : kt.classList.contains('button-active') && ot();
    });
  const Mt = mt;
})();
