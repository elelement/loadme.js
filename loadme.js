var Loader = {
    loadSync: function (libArray, tag, callback) {
        function loadLibrary (libArray, index, tag, callback) {
            if (index < libArray.length) {
                var imported = document.createElement('script');
                imported.type = 'text/javascript';
                imported.onload  = function() {
                    loadLibrary(libArray, index + 1, tag, callback);
                }
                imported.src = libArray[index];
                document.getElementsByTagName(tag)[0].appendChild(imported);
                console.log('Loaded: ' + imported.src);
            } else {
                if(callback) callback();
            }
        }
        
        if (libArray && libArray.length > 0) {
            loadLibrary(libArray, 0, tag, callback);
        }
    },

    loadAsync: function (libArray, tag) {
        for (var i = 0; i < libArray.length; i ++) {
            var imported = document.createElement('script');
            imported.type = 'text/javascript';
            imported.src = libArray[i];
            document.getElementsByTagName(tag)[0].appendChild(imported);
            console.log(imported.src);    
        }
    },

    loadSingle: function (src, tag) {
        var imported = document.createElement('script');
        imported.type = 'text/javascript';
        imported.src = src;
        document.getElementsByTagName(tag)[0].appendChild(imported);
        console.log(imported.src); 
    }
}