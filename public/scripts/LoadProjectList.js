/*--------------------
Vars
--------------------*/
var progress = 60
var startX = 0
var active = 0
var isDown = false

/*--------------------
Contants
--------------------*/
var speedWheel = 0.12
var speedDrag = -0.1

/*--------------------
Get Z
--------------------*/
var getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*--------------------
Items
--------------------*/
var $items = document.querySelectorAll('.carousel-item')
var $cursors = document.querySelectorAll('.cursor')

var displayItems = (item, index, active) => {
  var zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--items',$items.length)
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
  if(index === active){
    item.style.setProperty('--activeitemopacity', '100%')
  }else{
    item.style.setProperty('--activeitemopacity', '0%')
  }
}

/*--------------------
Animate
--------------------*/
var animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    if(i === Math.floor(progress/100*($items.length-1))){
        window.open(item.getAttribute('data-repo-url'), '_blank')
    }
    progress = (i/$items.length) * 100 + (100/$items.length)
    animate()
  })
})

/*--------------------
Handlers
--------------------*/
var handleWheel = e => {
    if(e.deltaY > 0){
        progress = progress + 100/$items.length
    }else{
        progress = progress - 100/$items.length
    }  
  animate()
}

// var handleMouseMove = (e) => {
//   if (e.type === 'mousemove') {
//     $cursors.forEach(($cursor) => {
//       $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
//     })
//   }
//   if (!isDown) return
//   var x = e.clientX || (e.touches && e.touches[0].clientX) || 0
//   var mouseProgress = (x - startX) * speedDrag
//   progress = progress + mouseProgress
//   startX = x
//   animate()
// }

// var handleMouseDown = e => {
//   isDown = true
//   startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
// }

// var handleMouseUp = () => {
//   isDown = false
// }

/*--------------------
Listeners
--------------------*/
document.addEventListener('wheel', handleWheel)
// document.addEventListener('mousedown', handleMouseDown)
// document.addEventListener('mousemove', handleMouseMove)
// document.addEventListener('mouseup', handleMouseUp)
// document.addEventListener('touchstart', handleMouseDown)
// document.addEventListener('touchmove', handleMouseMove)
// document.addEventListener('touchend', handleMouseUp)
