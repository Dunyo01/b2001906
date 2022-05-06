var header = document.getElementById('header');
var gallery = document.getElementById('gallery');
var hCaption = document.createElement('h1');
//<h1> This is the gallery pahe</h1>
hCaption.innterText = "This is the Gallery Page";
header.appendChild(hCaption);

for(var i=0;  i < json.Images.length; i++){
	var img = document.createElement('img');
	img.src = json.Images[i].URL;
	img.alt = json.Images[i].Caption;
	img.style = "width: 100%%";
	img.class = "card-img-top";

	var aImg = document.createElement('a');
	aImg.href = json.Images[i].URL;

	var divCardBody = document.createElement('div');
	divCardBody.class = "card-body";
	
	
	var imgCaption = document.createElement('h4');
	imgCaption.innerText = json.Images[i].Caption;
	imgCaption.class = "card-title";
	imgCaption.style = "text-align: center";
	
	var divCard = document.createElement('div');
	divCard.class = "card";
	divCard.style = "width:100%"
	
	var divCol = document.createElement('div');
	divCol.class = 'col';
	
	
	aImg.appendChild(img);
	divCardBody.appendChild(imgCaption);
	divCard.appendChild(aImg);
	divCard.appendChild(divCardBody);
	divCol.appendChild(divCard);
	gallery.appendChild(divCol);
}
