$('.my').change(function() {
    if ($(this).val() != '') $(this).prev().text($(this).file.name);
    else $(this).prev().text('Выберите файл');
});

function handleFileSelectSingle(evt) {
var file = evt.target.files; // FileList object

var f = file[0]

  // Only process image files.
  if (!f.type.match('image.*')) {
    alert("Только изображения....");
  }

  var reader = new FileReader();

  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      // Render thumbnail.
      var span = document.createElement('span');
      span.innerHTML = ['<img class="thumb_photo" src="', e.target.result,
                        '" title="', escape(theFile.name), '"/>'].join('');
      document.getElementById('output').innerHTML = "";
      document.getElementById('output').insertBefore(span, null);
    };
  })(f);

  // Read in the image file as a data URL.
  reader.readAsDataURL(f);
}
document.getElementById('file').addEventListener('change', handleFileSelectSingle, false);

  
