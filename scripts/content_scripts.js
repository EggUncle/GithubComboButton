function clickStarBtn() {
  var btnLiTag = document.getElementById('ch_ext_id_star_btn')
  var btnArr = btnLiTag.getElementsByTagName('button')
  var starBtn = btnArr[1]
  starBtn.click()
}

function clickWatchBtn(pWatchType) {
  var btnLiTag = document.getElementById('ch_ext_id_watch_btn')
  var btnArr = btnLiTag.getElementsByTagName('button')
  var releaseOnlyBtn = btnArr[1]
  var subscribedBtn = btnArr[2]
  var ignoreBtn = btnArr[3]

  if (pWatchType == 'ignore') {
    ignoreBtn.click()
  } else if (pWatchType == 'release_only') {
    releaseOnlyBtn.click()
  } else if (pWatchType == 'subscribed') {
    subscribedBtn.click()
  }
}

function clickForkBtn() {
  var btnLiTag = document.getElementById('ch_ext_id_fork_btn')
  var btnArr = btnLiTag.getElementsByTagName('button')
  var forkBtn = btnArr[0]
  forkBtn.click()
}

function initComboBtn() {
  var btnLayoutArr = document.getElementsByClassName('pagehead-actions')
  var btnLayout = btnLayoutArr[0]
  if (btnLayout == undefined) {
    return 0
  }

  var btnArr = btnLayout.getElementsByTagName("li");
  var btn = document.createElement("li");
  btn.setAttribute("id", "combos_3");
  var len = btnArr.length;

  var watchBtn = btnArr[len - 3];
  watchBtn.setAttribute("id", "ch_ext_id_watch_btn");

  var starBtn = btnArr[len - 2];
  starBtn.setAttribute("id", "ch_ext_id_star_btn");

  var forkBtn = btnArr[len - 1];
  forkBtn.setAttribute("id", "ch_ext_id_fork_btn");

  var comboBtnRightId = 'left_btn'
  if (len == 3) {
    comboBtnRightId = "ch_ext_id_watch_btn"
  } else {
    var leftBtn = btnArr[0]
    leftBtn.setAttribute("id", "left_btn");
  }
  //newBtnHtml = '<div class="js-toggler-container js-social-container"><button type="submit"class="btn btn-sm btn-with-count js-toggler-target"aria-label="Unstar this repository"title="Star microsoft/vscode"id="combo_btn"><svg class="octicon octicon-star v-align-text-bottom"viewBox="0 0 14 16"version="1.1"width="14"height="16"aria-hidden="true"><path fill-rule="evenodd"d="M7.85,13.36c3,-3.12 4.99,-5.17 4.99,-7.69c0,-2.05 -1.41,-3.67 -3.21,-3.67c-1.01,0 -1.99,0.54 -2.62,1.39c-0.64,-0.85 -1.61,-1.39 -2.62,-1.39c-1.8,0 -3.21,1.61 -3.21,3.67c0,2.52 1.98,4.57 4.99,7.69l0.85,0.88z"></svg> Combo</button></div>'
  newBtnHtml = '<div class="js-toggler-container js-social-container"><button type="submit"class="btn btn-sm btn-with-count js-toggler-target"aria-label="Unstar this repository"title="Star microsoft/vscode"id="combo_btn"><svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 1024 1024" version="1.1" p-id="1176" width="16" height="16" aria-hidden="true"><path d="M510.671749 348.792894S340.102978 48.827055 134.243447 254.685563C-97.636714 486.565724 510.671749 913.435858 510.671749 913.435858s616.107079-419.070494 376.428301-658.749272c-194.095603-194.096626-376.428302 94.106308-376.428301 94.106308z" fill="#FF713C" p-id="1177"></path><path d="M510.666632 929.674705c-3.267417 0-6.534833-0.983397-9.326413-2.950192-16.924461-11.872399-414.71121-293.557896-435.220312-529.448394-5.170766-59.482743 13.879102-111.319341 56.643068-154.075121 51.043536-51.043536 104.911398-76.930113 160.095231-76.930114 112.524796 0 196.878996 106.48115 228.475622 153.195078 33.611515-45.214784 122.406864-148.20646 234.04343-148.20646 53.930283 0 105.46603 24.205285 153.210428 71.941496 45.063335 45.063335 64.954361 99.200326 59.133795 160.920016C935.306982 641.685641 536.758893 915.327952 519.80271 926.859589a16.205077 16.205077 0 0 1-9.136078 2.815116zM282.857183 198.75574c-46.25344 0-92.396363 22.682605-137.127124 67.413365-36.149315 36.157501-51.614541 78.120218-47.25321 128.291898 17.575284 202.089671 352.199481 455.119525 412.332023 499.049037 60.434417-42.86732 395.406538-289.147446 414.567947-492.458945 4.933359-52.344159-11.341303-96.465029-49.759288-134.88199-41.431621-41.423435-85.24243-62.424748-130.242319-62.424748-122.041544 0-220.005716 152.203494-220.989114 153.742547-3.045359 4.806469-8.53335 7.883551-14.101159 7.534603a16.257266 16.257266 0 0 1-13.736863-8.184403c-0.902556-1.587148-91.569532-158.081365-213.690893-158.081364z" fill="#885F44" p-id="1178"></path></svg> Combo</button></div>'
  btn.insertAdjacentHTML('afterbegin', newBtnHtml);
  var btnTag = btn.getElementsByTagName("button")[0];

  btnTag.style.borderBottomRightRadius = "3px";
  btnTag.style.borderTopRightRadius = "3px";
  var targetBtn = document.getElementById(comboBtnRightId);
  btnLayout.insertBefore(btn, targetBtn);

  var comboBtn = document.getElementById('combo_btn');
  comboBtn.onclick = function() {
    chrome.runtime.sendMessage('', function(response) {
      var responseObj = JSON.parse(response)
      var watchType = responseObj.watchType
      var starCombo = responseObj.starCombo
      var watchCombo = responseObj.watchCombo
      var forkCombo = responseObj.forkCombo
      if (forkCombo == 1) {
        clickForkBtn()
      }
      if (starCombo == 1) {
        clickStarBtn()
      }
      if (watchCombo == 1) {
        clickWatchBtn(watchType)
      }
    });

  }
}

initComboBtn()
