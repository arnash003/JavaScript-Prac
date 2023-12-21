function debounce(func, delay) {
    let debounceTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}

// Usage example
window.addEventListener('resize', debounce(function () {
    console.log('Resize event handler called after 300ms of resizing stopped');
}, 300));
