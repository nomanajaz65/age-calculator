var a = new Date()
var b = a.getTime() 
            
var c = new Date ('7 dec, 2001 ')
var d = c.getTime()

var e = b-d 
var res = e / (1000 * 60 *60 *24 *365)

document.write("your age is "+ Math.floor(res))