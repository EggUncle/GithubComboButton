var watchTypeForm = document.getElementById("watch_type_id");
var backgroundPage = chrome.extension.getBackgroundPage();
var config = JSON.parse(backgroundPage.getLocalStorage())
var watchType = config.watchType
var starCombo = config.starCombo
var watchCombo = config.watchCombo
var forkCombo = config.forkCombo

var watchTypeRadios = watchTypeForm.getElementsByTagName('input')
for (var i = 0; i < watchTypeRadios.length; i++) {
  var watchTypeRadio = watchTypeRadios[i]
  var watchValue = watchTypeRadio.getAttribute('value')
  if (watchValue == watchType) {
    watchTypeRadio.checked = true
  }
}
watchTypeForm.addEventListener('click', function() {
  var e = event || window.event;
  if (e.target && e.target.nodeName.toUpperCase() == "INPUT") {
    //localStorage['watch_type'] = e.target.value
    watchType = e.target.value
    backgroundPage.setLocalStorage(watchType, starCombo, watchCombo, watchCombo)
  }
}, false);

var combosActionForm = document.getElementById('combo_action_id');
var combosActionCheckboxs = combosActionForm.getElementsByTagName('input')
for (var i = 0; i < combosActionCheckboxs.length; i++) {
  var combosActionCheckbox = combosActionCheckboxs[i]
  var combosActionBoxValue = combosActionCheckbox.getAttribute('value')
  if (combosActionBoxValue == 'watch' && watchCombo == 1) {
    combosActionCheckbox.checked = true
  } else if (combosActionBoxValue == 'star' && starCombo == 1) {
    combosActionCheckbox.checked = true
  } else if (combosActionBoxValue == 'fork' && forkCombo == 1) {
    combosActionCheckbox.checked = true
  }
}
combosActionForm.addEventListener('click', function() {
  var e = event || window.event;
  if (e.target && e.target.nodeName.toUpperCase() == "INPUT") {
    var checkboxValue = e.target.value
    if (checkboxValue == 'watch' && e.target.checked) {
      watchCombo = 1
    } else if (checkboxValue == 'watch' && !e.target.checked) {
      watchCombo = 0
    } else if (checkboxValue == 'star' && e.target.checked) {
      starCombo = 1
    } else if (checkboxValue == 'star' && !e.target.checked) {
      starCombo = 0
    } else if (checkboxValue == 'fork' && e.target.checked) {
      forkCombo = 1
    } else if (checkboxValue == 'fork' && !e.target.checked) {
      forkCombo = 0
    }
    backgroundPage.setLocalStorage(watchType, starCombo, watchCombo, forkCombo)
  }
}, false);
