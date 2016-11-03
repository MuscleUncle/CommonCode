//创建在线预览图片URL
    function createObjectURL(blob) {
        if (window.URL) {
            return window.URL.createObjectURL(blob);
        } else if (window.webkitURL) {
            return window.webkitURL.createObjectURL(blob);
        } else {
            return null;
        }
    }