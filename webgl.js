var VSHADER_SOURCE =
  'attribute vec4 a_Position;\n' +
  'attribute vec4 a_Color;\n' +
  'varying vec4 v_Color;\n' +
  'uniform mat4 m_Matrix;\n' +
  'uniform mat4 v_Matrix;\n' +
  'uniform mat4 p_Matrix;\n' +
  'void main() {\n' +
  '  gl_Position = p_Matrix * v_Matrix * m_Matrix * a_Position;\n' +
  '  v_Color = a_Color;\n' +
  '}\n';

// 片元着色器源码
var FSHADER_SOURCE =
  'precision mediump float;\n'+
  'varying vec4 v_Color;\n' +
  'void main() {\n' +
  '  gl_FragColor = v_Color;\n' +
  '}\n';

window.onload = function () {
  main()
}

function main() {

  // Part 1
  var canvas = document.getElementById('webgl');
  var gl = canvas.getContext('experimental-webgl');
  if (!gl) {
    console.warn('获取WebGL上下文失败');
    return;
  }
  // 至此获取了webgl上下文gl

  // Part2
  var vshader = gl.createShader(gl.VERTEX_SHADER),
    fshader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(vshader, VSHADER_SOURCE);
  gl.shaderSource(fshader, FSHADER_SOURCE);
  gl.compileShader(vshader);
  gl.compileShader(fshader);
  var program = gl.createProgram();
  gl.attachShader(program, vshader);
  gl.attachShader(program, fshader);
  gl.linkProgram(program);
  // 至此将着色器源码编译为了着色器程序program

  gl.useProgram(program);

  // Par3
  var varray = new Float32Array([-1, -1, 0, 1, -1, 0, 0, 1, 0])
  var vbuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
  gl.bufferData(gl.ARRAY_BUFFER, varray, gl.STATIC_DRAW);
  // 至此将三个顶点数据填入gl.ARRAY_BUFFER中
  var aloc = gl.getAttribLocation(program, 'a_Position');
  gl.vertexAttribPointer(aloc, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aloc);
  // 至此将gl.ARRAY_BUFFER中的数据分配给了着色器中的attribute变量a_Position

  var carray = new Float32Array([1,1,0,0,1,1,1,0,1]);
  var cbuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cbuffer);
  gl.bufferData(gl.ARRAY_BUFFER, carray, gl.STATIC_DRAW);
  // 至此将三个顶点的颜色填入gl.ARRAY_BUFFER中
  var cloc = gl.getAttribLocation(program, 'a_Color');
  gl.vertexAttribPointer(cloc, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(cloc);
  // 至此将gl.ARRAY_BUFFER中的数据分配给了着色器中的attribute变量a_Color

  var mloc = gl.getUniformLocation(program, 'm_Matrix');
  var vloc = gl.getUniformLocation(program, 'v_Matrix');
  var ploc = gl.getUniformLocation(program, 'p_Matrix');
  var mmatrix = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1, 1]);
  var vmatrix = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1, 1]);
  var pmatrix = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -2, -1, 0, 0, -3, 0]);
  gl.uniformMatrix4fv(mloc, false, mmatrix);
  gl.uniformMatrix4fv(vloc, false, vmatrix);
  gl.uniformMatrix4fv(ploc, false, pmatrix);
  // 至此设置好着色器中三个uniform变量的值

  // Part4
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  // 至此画出了三角形
}
