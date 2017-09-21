var canvas
var ctx

window.onload = function () {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')

  drawLine()
  drawRect()
  drawEmptyRect()
  drawText()
  drawGradient()
}

function drawLine () {
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(50, 0)
  ctx.lineTo(50, 50)
  ctx.closePath()
  ctx.strokeStyle = 'red'
  ctx.stroke()
}

function drawRect () {
  ctx.fillStyle = 'yellow'
  ctx.fillRect(50, 0, 50, 50)
}

function drawEmptyRect () {
  ctx.strokeStyle = 'blue'
  ctx.strokeRect(100, 0, 50, 50)
}

function drawText () {
  ctx.font = 'Bold 20px Arial'
  ctx.textAlign = 'left'
  ctx.fillStyle = 'black'
  ctx.fillText('Hello!', 0, 80)
  ctx.strokeText('Hello!', 80, 80)
}

function drawGradient () {
  var myGradient = ctx.createLinearGradient(0, 0, 50, 50);

  myGradient.addColorStop(0, "red");
  myGradient.addColorStop(1, "green");

  ctx.fillStyle = myGradient
  ctx.fillRect(0, 100, 100, 100)
}
