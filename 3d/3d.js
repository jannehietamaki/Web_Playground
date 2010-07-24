var G3d = {
    focal_length: 1000,
    scale : 256,
    drawFlat: function(context, p1,p2,p3, color) {	   
	context.fillStyle = 'rgba('+color+', '+color+', '+color+', 255)';
	context.lineWidth = "0.0";
	context.beginPath();
	context.moveTo(p1[0], p1[1]); 
	context.lineTo(p2[0], p2[1]);
	context.lineTo(p3[0], p3[1]);
	context.lineTo(p1[0], p1[1]);
	context.fill();	
	context.closePath();
    },
    drawWire: function(context, p1,p2,p3) {	 
	var color = 100;
	context.fillStyle = 'rgba('+color+', '+color+', '+color+', 100)';
	context.lineWidth = "1.0";
	context.beginPath();
	context.moveTo(p1[0], p1[1]); 
	context.lineTo(p2[0], p2[1]);
	context.lineTo(p3[0], p3[1]);
	context.lineTo(p1[0], p1[1]);
	context.closePath();
	context.fill();
	context.stroke();
    },
    translate: function(points, x, y, z) {
	var result=[];    
	for(var i=0;i<points.length;i++) {	  
	    var p = points[i];
	    var nx=p[0]+x; 
	    var ny=p[1]+y; 
	    var nz=p[2]+z; 
	    result.push([nx, ny, nz]);
	}      
	return result;  
    },
    project: function(points, width, height) {
	var result=[];    
	for(var i=0;i<points.length;i++) {	  
	    var p = points[i];	  
	    var scale = width/2/G3d.scale;
	    var depth = G3d.focal_length/(p[2]+G3d.focal_length);
	    var x= Math.round(p[0] * scale * depth);
	    var y= Math.round(p[1] * scale * depth);
	    var coords = [(width/2)+x, (height/2)+y, depth];
	    result.push(coords);
	}      
	return result;
    }, 
    rotate: function(points, rx, ry, rz) {
	var result=[];    
	for(var i=0;i<points.length;i++) {	  
	    var p = points[i];
	    var x=p[0];
	    var y=p[1];
	    var z=p[2];
	    
	    // rotate around x
	    x1 = x;
	    y1 = Math.cos(rx) * y - Math.sin(rx) * z;
	    z1 = Math.cos(rx) * z + Math.sin(rx) * y;
	    
	    // rotate around y
	    x2 = Math.cos(ry) * x1 - Math.sin(ry) * z1;
	    y2 = y1;
	    z2 = Math.cos(ry) * z1 + Math.sin(ry) * x1;

	    // rotate around z
	    x3 = Math.cos(rz) *x2 + Math.sin(rz) * y2;
	    y3 = Math.cos(rz) *y2 - Math.sin(rz) * x2;
	    z3 = z2;
	    var coords = [x3, y3, z3];
	    result.push(coords);
	}      
	return result;  
    },		
    sort: function(faces, vertices) {
	var results = faces.slice();
	results.sort(function(face1, face2){
		var face1z = vertices[face1[0]][2] + vertices[face1[1]][2] + vertices[face1[2]][2];
		var face2z = vertices[face2[0]][2] + vertices[face2[1]][2] + vertices[face2[2]][2];
		return face2z-face1z;
	    });
	return results;
    },
    calculateBrightness: function(vertex1) {
	return Math.round(vertex1[0]*0.5 + vertex1[1]*0.1 + vertex1[2]*0.5);
    },
    render : function(frame, width, height) {
	var timestamp = new Date().getTime();
	timestamp = Math.floor(timestamp / 4);
	points = G3d.rotate(vertex, timestamp/1000, timestamp/400, timestamp/300);
	points = G3d.translate(points, 0, 100, Math.sin(timestamp/150)*200);    	
	var sortedFaces = G3d.sort(faces, points);
	var projected = G3d.project(points, width, height);
	for(var i=0;i<sortedFaces.length;i++) {
	    var face = sortedFaces[i];
	    var vertex1 = projected[face[0]];
	    var vertex2 = projected[face[1]];
	    var vertex3 = projected[face[2]];
	    //G3d.drawWire(frame, vertex1, vertex2, vertex3);
	    G3d.drawFlat(frame, vertex1, vertex2, vertex3, G3d.calculateBrightness(vertex1));	    
	}
    },
    init : function() {
	var canvas = document.getElementById('demoCanvas');
	this.fb = new Framebuffer( canvas );
	self.setInterval( 'G3d.tick()', 50 );        				
    },
    
    tick : function() {
	this.fb.withCanvas(G3d.render);
    }
};


