- [1회독 storytelling](#1회독-storytelling)
  - [01 [마크업] 다양한 스타일링이 들어가는 배경화면 위에 텍스트를 두는 방법은 무엇인가?](#01-마크업-다양한-스타일링이-들어가는-배경화면-위에-텍스트를-두는-방법은-무엇인가)
  - [pre02 [스타일링] 디폴트 세팅](#pre02-스타일링-디폴트-세팅)
  - [02 [스타일링] 배경화면 이미지를 컨테이너에 꽉 차게 만드는 가장 적절한 방법은 무엇인가?](#02-스타일링-배경화면-이미지를-컨테이너에-꽉-차게-만드는-가장-적절한-방법은-무엇인가)
  - [03 [스타일링] 배경화면 이미지에 블러 효과를 넣는 방법은 무엇인가?](#03-스타일링-배경화면-이미지에-블러-효과를-넣는-방법은-무엇인가)
  - [04 [스타일링] 블러 가장자리에 에지가 생기는 것을 방지하는 방법은 무엇인가?](#04-스타일링-블러-가장자리에-에지가-생기는-것을-방지하는-방법은-무엇인가)
  - [05 [스타일링] 배경화면 위로 텍스트를 띄우는 방법은 무엇인가?](#05-스타일링-배경화면-위로-텍스트를-띄우는-방법은-무엇인가)
  - [06 [인터랙션] 텍스트 엘리먼트에 써 있는 숫자가 0부터 100까지 증가하는 효과를 넣으려면 어떻게 해야 하는가?](#06-인터랙션-텍스트-엘리먼트에-써-있는-숫자가-0부터-100까지-증가하는-효과를-넣으려면-어떻게-해야-하는가)
  - [07 [인터랙션] 텍스트 엘리먼트의 숫자 값이 0에서 100으로 증가하는 만큼 배경화면의 블러를 30에서 0으로 없애는 효과를 넣으려면 어떻게 해야 하는가?](#07-인터랙션-텍스트-엘리먼트의-숫자-값이-0에서-100으로-증가하는-만큼-배경화면의-블러를-30에서-0으로-없애는-효과를-넣으려면-어떻게-해야-하는가)
  - [08 [인터랙션] 텍스트 엘리먼트의 숫자 값이 0에서 100으로 증가하는 만큼 텍스트 엘리먼트의 선명도를 1에서 0으로 사라지는 효과를 넣으려면 어떻게 해야 하는가?](#08-인터랙션-텍스트-엘리먼트의-숫자-값이-0에서-100으로-증가하는-만큼-텍스트-엘리먼트의-선명도를-1에서-0으로-사라지는-효과를-넣으려면-어떻게-해야-하는가)
- [2W1H](#2w1h)
  - [07 [인터랙션] 텍스트 엘리먼트의 숫자 값이 0에서 100으로 증가하는 만큼 배경화면의 블러를 30에서 0으로 없애는 효과를 넣으려면 어떻게 해야 하는가?](#07-인터랙션-텍스트-엘리먼트의-숫자-값이-0에서-100으로-증가하는-만큼-배경화면의-블러를-30에서-0으로-없애는-효과를-넣으려면-어떻게-해야-하는가-1)

# 1회독 storytelling

## 01 [마크업] 다양한 스타일링이 들어가는 배경화면 위에 텍스트를 두는 방법은 무엇인가?

배경화면에 다양한 스타일링을 할 것이라면 배경화면과 텍스트를 분리해서 마크업을 하는 게 낫다:

```html
<div class="bg"></div>
<div class="loading-text">0%</div>
```

## pre02 [스타일링] 디폴트 세팅

앞으로 진행할 내용은 아래 css가 기본적으로 적용된 것을 전제로 진행한다.

```css
@import url("https://fonts.googleapis.com/css?family=Ubuntu");

* {
  box-sizing: border-box;
}

body {
  font-family: "Ubuntu", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
```

## 02 [스타일링] 배경화면 이미지를 컨테이너에 꽉 차게 만드는 가장 적절한 방법은 무엇인가?

1. 배경화면 이미지로 url을 불러온다.
2. 배경화면이 반복되지 않도록 no-repeat을 설정한다.
3. 배경화면이 전체 컨테이너를 감싸도록 사이즈를 cover로 설정한다.
4. 배경화면의 상하좌우 정렬을 center로 한다.
5. 배경화면이 나타나도록 해당 셀렉터의 너비와 높이를 100vw, 100vh로 설정한다.

```css
.bg {
  background-image: url("https://images.unsplash.com/photo-1606213066431-da7b293f449a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc2NzF8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100vw;
  height: 100vh;
}
```

## 03 [스타일링] 배경화면 이미지에 블러 효과를 넣는 방법은 무엇인가?


filter property를 사용해서 blur() value를 사용한다.

```css
.bg {
  background-image: url("https://images.unsplash.com/photo-1606213066431-da7b293f449a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc2NzF8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100vw;
  height: 100vh;

  filter: blur(0px);
}
```

## 04 [스타일링] 블러 가장자리에 에지가 생기는 것을 방지하는 방법은 무엇인가?

엘리먼트의 너비와 높이를 100% 뷰포트보다 크게 한다. 단, 이미지도 그만큼 확대되는 사이드 이펙트가 생긴다.

```css
.bg {
  background-image: url("https://images.unsplash.com/photo-1606213066431-da7b293f449a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc2NzF8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: calc(100vw + 60px);
  height: calc(100vh + 60px);

  filter: blur(0px);
}
```

## 05 [스타일링] 배경화면 위로 텍스트를 띄우는 방법은 무엇인가?

현재 배경화면으로 쓰이는 엘리먼트가 텍스트 엘리먼트와 flow가 달라지도록 배경화면 엘리먼트의 position을 absolute로 설정한다:

```css
.bg {
  background-image: url("https://images.unsplash.com/photo-1606213066431-da7b293f449a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc2NzF8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: calc(100vw + 60px);
  height: calc(100vh + 60px);

  position: absolute; /* Add this */
  filter: blur(0px);
}
```

그리고 텍스트가 배경화면보다 앞으로 나오도록 z-index를 조정한다:

```css
.bg {
  background-image: url("https://images.unsplash.com/photo-1606213066431-da7b293f449a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc2NzF8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: calc(100vw + 60px);
  height: calc(100vh + 60px);

  position: absolute;
  z-index: -1;
  filter: blur(0px);
}
```

마지막으로 텍스트가 잘 보이도록 스타일링을 한다:

```css
.loading-text {
  font-size: 50px;
  color: white;
}
```

## 06 [인터랙션] 텍스트 엘리먼트에 써 있는 숫자가 0부터 100까지 증가하는 효과를 넣으려면 어떻게 해야 하는가?

```js
const loadText = document.querySelector(".loading-text");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
}
```

## 07 [인터랙션] 텍스트 엘리먼트의 숫자 값이 0에서 100으로 증가하는 만큼 배경화면의 블러를 30에서 0으로 없애는 효과를 넣으려면 어떻게 해야 하는가?

```js
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
```

## 08 [인터랙션] 텍스트 엘리먼트의 숫자 값이 0에서 100으로 증가하는 만큼 텍스트 엘리먼트의 선명도를 1에서 0으로 사라지는 효과를 넣으려면 어떻게 해야 하는가?

```js
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
```

# 2W1H

## 07 [인터랙션] 텍스트 엘리먼트의 숫자 값이 0에서 100으로 증가하는 만큼 배경화면의 블러를 30에서 0으로 없애는 효과를 넣으려면 어떻게 해야 하는가?

현재 load의 값이 0일 때, 0에서 100으로 변화하는 비율만큼 30에서 0으로 변화해야 한다. 예를 들어 보자.

* if load goes from `0` to `1`:
  * delta is `(1 - 0) / 100 = 0.01`
  * cause, delta can be calculated by `(final_val - starting_val) / total`
  * so, in the same way, `(x - 30) / (0 - 30) = 0.01`
  * `x - 30 = 0.01 * -30`
  * `x = 0.01 * -30 + 30`
  * `x = 29.7`

일반화해보자:

* if load goes from `0` to `1` &&
* load's range is from `in_min` to `in_max`:
  * delta is `(1 - in_min) / (in_max - in_min) = delta`
  * so, in the same way, `(x - out_min) / (out_max - out_min) = delta`
  * `x - out_min = delta * (out_max - out_min)`
  * `x = delta * (out_max - out_min) + out_min`
* as above, `delta = (1 - in_min) / (in_max - in_min)`:
  * but we can replace `1` to `num`
  * so, `delta = (num - in_min) / (in_max - in_min)`
* finally:
  * `x = delta * (out_max - out_min) + out_min`
  * `x = (num - in_min) / (in_max - in_min) * (out_max - out_min) + out_min`