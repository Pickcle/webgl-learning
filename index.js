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
  // drawShadow()

  // doTransform()

  drawImage()

  doJsAnimation()
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
  var myGradient = ctx.createLinearGradient(0, 100, 50, 150);

  myGradient.addColorStop(0, "red");
  myGradient.addColorStop(1, "green");

  ctx.fillStyle = myGradient
  ctx.fillRect(0, 100, 50, 50)
}

function drawShadow () {
  ctx.shadowOffsetX = 10
  ctx.shadowOffsetY = 10
  ctx.shadowBlur = 10
  ctx.shadowColor = 'orange'

  ctx.fillStyle = 'pink'
  ctx.fillRect(0, 150, 50, 50)
}

function doTransform () {
  ctx.translate(50, 50)
  ctx.rotate(45)
  // ctx.scale(2, 2)
}

function drawImage () {
  var img = new Image()
  img.src = 'head.png'
  // img.setAttribute('crossOrigin', '')
  img.onload = function () {
    ctx.drawImage(img, 300, 0)
  }
}

function doJsAnimation () {
  var x = 0
  var y = 200

  let timer = setInterval(function () {
    ctx.clearRect(-10, 190, 120, 120)
    x += 1
    y += 1

    if (x > 100) {
      clearInterval(timer)
    }

    ctx.beginPath()
    ctx.fillStyle = 'black'

    ctx.arc(x, y, 10, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
  }, 30)
}

function handlePixel () {
  const imageData = ctx.getImageData(300, 0, 256, 234)
  // for (let i = 0; i < imageData.length; i++) {
  //   if (imageData && imageData[i + 1] != 0) {
  //     imageData[i] = 100
  //   }
  // }
  ctx.putImageData(imageData, 300, 300)
  // console.log(imageData)
}
