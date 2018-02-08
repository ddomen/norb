(function(){
  var superSelf = this;
  function norb(mod){
    this.isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
    this.isBrowser = !this.isNode;
    this.module = mod||null;
    if(this.isNode&&!this.module){this.module = module||null;}
    Object.defineProperty(this,'cache',{enumerable:0,writable:0,configurable:0,value:{}})
    return this
  }

  norb.prototype.export = function(obj,name,mode){
    if(this.isNode){this.module.exports=obj}
    else{
      if(typeof window[name]=='undefined' || this.__proto__.getMode(mode)==1){window[name] = obj;}
      else if(this.__proto__.getMode(mode)==2){Object.assign(window[name],{},obj)}
      if(this.module){this.module.exports = obj;}
    }
    return this;
  };

  norb.prototype.require = function(path,name,mode,callback){
    if(this.isNode){return require(path)}
    else if(this.cache[path]){
      if(typeof name=='string'){
       if(typeof window[name]=='undefined' || this.__proto__.getMode(mode)==1){window[name] = this.cache[path]}
       else if(this.__proto__.getMode(mode)==2){Object.assign(window[name],{},this.cache[path])}
      }
      else if(typeof name=='function'){name(this.cache[path])}
      if(typeof callback=='function'){callback(this.cache[path])}
    }
    else{
      var xhttp = new XMLHttpRequest(), self = this;
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         this.module = eval('(function(_norb){"use strict"\nvar module={},exports,require=function(){return (m)=>new _norb.constructor(m)};\n'+this.responseText+'\nreturn module.exports?module.exports:(exports?exports:this)})(window.norb)');
         self.cache[path] = this.module;
         if(typeof name=='string'){
          if(typeof window[name]=='undefined' || self.__proto__.getMode(mode)==1){window[name] = this.module}
          else if(self.__proto__.getMode(mode)==2){Object.assign(window[name],{},this.module)}
         }
         else if(typeof name=='function'){name(this.module)}
         if(typeof callback=='function'){callback(this.module)}
        }
      };
      xhttp.open("GET", path, true);
      xhttp.send();
      return xhttp
    }
  };

  norb.prototype.import = function(path){
    if(this.isNode){
      path = require.resolve(path);
      if(this.cache[path]){return this.cache[path]}
      var code = require('fs').readFileSync(path).toString(), mod = {};
      require('vm').runInNewContext(code,mod);
      this.cache = mod;
      return mod
    }
    else{
      var script = document.createElement('script');
      script.src = path;
      document.getElementsByTagName('html')[0].append(script);
    }
  };

  norb.getMode = function(mode){
    switch(mode){
      case 'overwrite':case 'w':case 1:return 1;break;
      case 'assign':case 'auto':case 'intelligent':case 'merge':case 2:return 2;break;
      default:return 0;break;
    }
    return 0;
  };


  if(Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]'){module.exports = function(mod){return new norb(mod)};}
  else{
    if(typeof window.norb=='undefined'){window.norb = new norb();}
    else if(window.norb !== norb){console.warn('norb is already declared: the object will not be overwritten')}
  }
})();
