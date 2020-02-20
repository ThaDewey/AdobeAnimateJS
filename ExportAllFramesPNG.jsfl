var document = fl.getDocumentDOM();
var currTimeline = document.getTimeline();
var filePathURI = flash.documents[0].pathURI; 
var fileName = fl.documents[0].name;


function getKeyFrames(tml) {

	this.isKeyFrame = function (timeline, layerNum, frameNum) {
		if (!timeline.layers[layerNum].frames[frameNum]) {
			return false;
		}
		return (timeline.layers[layerNum].frames[frameNum].startFrame === frameNum);
	};

	var retval = [];

	for (var i = 0; i < tml.layers.length; i++) {
		var layerKeyFrames = [];
		for (var j = 0; j < tml.layers[i].frames.length; j++) {
			if (this.isKeyFrame(tml, i, j)) {
				layerKeyFrames.push(j);
			}
		}
		retval.push(layerKeyFrames);
	}
	return retval;
}

var toast = getKeyFrames(currTimeline);
toast[0].forEach(exportPNG);


function exportPNG(element, i, array) {
	fl.trace(element + ","+ i);
	currTimeline.currentFrame = element;
	fl.getDocumentDOM().exportPNG(filePathURI.slice(0,-fileName.length)+"thumbs_"+element+".png", true, true);
	
}