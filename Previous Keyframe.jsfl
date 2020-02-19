var timeLine = fl.getDocumentDOM().getTimeline();
var curLayer = timeLine.currentLayer;
var curFrame = timeLine.currentFrame;
var frameArray = timeLine.layers[curLayer].frames;
var n = frameArray.length;
var nextKeyFrame;

if (curFrame > 0) {
	for (i=curFrame-1; i<n; i--) 
	{
    		if (i==frameArray[i].startFrame) 
		{
        		nextKeyFrame = i;
			break;
    		}
	}
} else {
	for (i=n-1; i>0; i--)
	{
		if (i==frameArray[i].startFrame)
		{
			nextKeyFrame = i;
			break;
		}
	}
}
timeLine.currentFrame = nextKeyFrame;

fl.getDocumentDOM().selectNone();