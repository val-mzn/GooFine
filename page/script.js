document.querySelectorAll(".form-check-input").forEach(input => {
    input.addEventListener("click", function (e) {
        ShowHide(e.target.id, e.target.checked)
        saveOptions()
    });
})

function ShowHide(id, value) {
    browser.tabs.executeScript({
        code: 'ShowHide("' + id + '",' + value +')'
    }, function () {
        browser.tabs.executeScript({ file: 'display.js' });
    });
}

function saveOptions() {
    var data = [];
    document.querySelectorAll(".form-check-input").forEach(input => {
        data.push({ key: input.id, value: input.checked })
    })
    browser.storage.local.set({ 'options': data })
}

function restoreOptions() {
    browser.storage.local.get(['options'], function (result) {
        result.options.forEach(option => {
           document.getElementById(option.key).checked = option.value
        })
    });
}
document.addEventListener('DOMContentLoaded', restoreOptions());
