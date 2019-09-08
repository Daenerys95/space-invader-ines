var app = 
{

  init: function() 
  {
    console.log("So far it's working");
    app.createModelsButtons();
  },

  createModelsButtons: function()
  {
    var modelsName = Object.keys(map.models);
    modelsName.forEach(currentModelName => {
      var nav = document.querySelector('.select-model');
      var navBtn = document.createElement('button');
      navBtn.innerHTML = currentModelName;
      navBtn.classList.add('modelButton', `model-${currentModelName}`);
      navBtn.dataset.model = currentModelName;
      nav.appendChild(navBtn);
    });

    app.handleModelsButtons();
  },

  handleModelsButtons: function()
  {
    var modelButtons = document.querySelectorAll('.modelButton');
    modelButtons.forEach(modelButton => modelButton.addEventListener('click', app.createModels));
  },

  createModels: function(e)
  {
    var container = document.getElementById('invader');
    container.innerHTML = "";
       
    var currentModelName = e.target.dataset.model;
    var currentModel = map.models[currentModelName];
    var currentModelLine = currentModel.map(currentModelLine => currentModelLine.split(''));
    currentModelLine.map(currentModelType => 
      currentModelType.map(currentModelChar => 
      {
        container.style.width = `${20 * currentModelType.length}px`;
        var pixel = document.createElement('div');
        pixel.classList.add('pixel', map.types[currentModelChar] );
        container.appendChild(pixel);
      }
    ));
  }

}

document.addEventListener('DOMContentLoaded', app.init);

