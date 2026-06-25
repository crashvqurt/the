// This tells Ultraviolet to send traffic to your Render Wisp backend
const backendUrl = "https://onrender.com";
const wispSocketUrl = backendUrl.replace(/^http/, 'ws') + '/wisp/';

self.__uv$config = {
    prefix: '/uv/service/',
    bare: wispSocketUrl, 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
