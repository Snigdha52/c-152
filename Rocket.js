// Registering component in box-component.js
AFRAME.registerComponent("move-rocket", {
    schema: {
      moveY: { type: "number", default: 1 },
    },
  
    tick: function () {
  
      this.data.moveY = this.data.moveY + 0.01;
  
      var pos = this.el.getAttribute("position");
  
      pos.y = this.data.moveY;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });

// Registering component in box-component.js
AFRAME.registerComponent("drop", {
    schema: {
      moveY: { type: "number", default: 1 },
    },
  
    tick: function () {
  window.addEventListener("click",(e)=>{
    this.data.moveY = this.data.moveY - 0.01;
   
  })
    
      var pos = this.el.getAttribute("position");
  
      pos.y = this.data.moveY;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });
  