exports.install = function(Vue, option){
	Vue.prototype.setData = function(that, key){
		that[key] = '222'
	}

	Vue.prototype.testCallMe = function(str){
		console.log('test call me' + str)
	}

	Vue.prototype.testCallBack = function(func, param){
		func(param)
		this.testCallMe('tetetet')
    }
    Vue.prototype.ConvertToByteArray =function strToUtf16Bytes(str) {
        const bytes = [];
        for (ii = 0; ii < str.length; ii++) {
          const code = str.charCodeAt(ii); // x00-xFFFF
          bytes.push(code & 255, code >> 8); // low, high
        }
        return bytes;
      }
}