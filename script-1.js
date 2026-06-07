// ইমেজের ওপর রাইট ক্লিক বন্ধ করার জন্য
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});