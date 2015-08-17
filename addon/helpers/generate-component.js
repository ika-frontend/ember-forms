
function generateComponent(wrap, control){
  return wrap.extend({
    controlView: control
  });
}

export default generateComponent;
