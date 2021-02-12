chrome.runtime.onInstalled.addListener(()=>{
    alert('Extension installed')
    localStorage.setItem('firstExtension','installed')
})