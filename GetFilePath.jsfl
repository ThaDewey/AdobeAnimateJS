var filePathURI = flash.documents[0].pathURI; 


var fileName = fl.documents[0].name;

fl.trace(filePathURI.slice(0,-fileName.length));


fl.trace(fileName);
fl.trace(fileName.length);
fl.trace(filePathURI);



