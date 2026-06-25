// Lock in your exact backend URL with a safety check for trailing slashes
const rawBackend = "https://my-wisp-backend.onrender.com/";
const cleanBackend = rawBackend.endsWith('/') ? rawBackend.slice(0, -1) : rawBackend;
const wispSocketUrl = cleanBackend.replace(/^http/, 'ws') + '/wisp/';

// Automatically calculate your GitHub Pages subfolder repository path
const pathSegments = window.location.pathname.split('/');
const repoNameSegment = pathSegments[1] ? '/' + pathSegments[1] : '';
const basePath = window.location.hostname.includes('github.io') ? repoNameSegment : '';

self.__uv$config = {
    prefix: basePath + '/uv/service/', 
    bare: wispSocketUrl, 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: basePath + '/uv/uv.handler.js', 
    bundle: basePath + '/uv/uv.bundle.js',   
    config: basePath + '/uv/uv.config.js',   
    sw: basePath + '/uv/uv.sw.js',           
};
