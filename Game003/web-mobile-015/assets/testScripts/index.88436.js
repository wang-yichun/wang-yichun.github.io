System.register("chunks:///_virtual/detectorTest.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DetectorEx.ts"],(function(t){"use strict";var e,o,i,r,s,n,c,a,l,d,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){s=t.cclegacy,n=t._decorator,c=t.v3,a=t.quat,l=t.Vec3,d=t.Component},function(t){u=t.DetectorEx}],execute:function(){var h,p,f,x,y;s._RF.push({},"ad4433ihyJElIOS+x0zEw2T","detectorTest",void 0);var E=n.ccclass,P=n.property,_=c();a(),a(),t("detectorTest",(h=E("detectorTest"),p=P(u),h((y=e((x=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return e=t.call.apply(t,[this].concat(s))||this,i(e,"detectorEx",y,r(e)),e.theta=0,e._lastPosition=c(),e}return o(e,t),e.prototype.update=function(t){this.theta+=.5*t,_.y=0,_.z=2*Math.cos(this.theta),_.x=2*Math.sin(this.theta),this.detectorEx.node.setWorldPosition(_),l.equals(this._lastPosition,this.detectorEx.node.worldPosition)||(this.detectorEx.node.forward=_.set(this._lastPosition).subtract(this.detectorEx.node.worldPosition).normalize()),this._lastPosition.set(this.detectorEx.node.worldPosition)},e}(d)).prototype,"detectorEx",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=x))||f));s._RF.pop()}}}));

System.register("chunks:///_virtual/testScripts",["./detectorTest.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));
