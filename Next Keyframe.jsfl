var timeLine = fl.getDocumentDOM().getTimeline();
var curLayer = timeLine.currentLayer;
var curFrame = timeLine.currentFrame;
var frameArray = timeLine.layers[curLayer].frames;
var n = frameArray.length;
var nextKeyFrame;

	
var targetFrame;
for (i=curFrame+1; i<n; i++) 
{
    	if (i==frameArray[i].startFrame) 
	{
		nextKeyFrame = i;
		break;
    	}
}
if(nextKeyFrame==curFrame)
{
	nextKeyFrame = 0;
}
timeLine.currentFrame = nextKeyFrame;

fl.getDocumentDOM().selectNone();