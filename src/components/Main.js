require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

//获取图片相关资源
let imageDatas =  require('../data/imageDatas.json');
//利用函数，获取图片信息
imageDatas = (function getImageURL(imageDataArr) {
  for (var i=0,len=imageDataArr.length; i<len; i++) {
    let singleImageData = imageDataArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
})(imageDatas);



class AppComponent extends React.Component {
  render() {
    let singelImg = imageDatas[0].fileName;
    return <section className="stage">
      <section className="img-sec">

      </section>
      <nav className="controller-nav"/>
    </section>;
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
