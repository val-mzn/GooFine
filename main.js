browser.storage.local.get(['options'], function (result) {
    result.options.forEach(option => {
        ShowHide(option.key, option.value)
    })
});