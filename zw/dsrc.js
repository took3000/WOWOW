start()
$(window).on('scroll', function(){
 start()
})

function start(){
  //.not('[data-isLoaded]')选中已加载的图片不需要重新加载
 $('.container img').not('[data-isLoaded]').each(function(){
   var $node = $(this)
   if( isShow($node) ){
     loadImg($node)
   }
 })
 }

//判断一个元素是不是出现在窗口(视野)
function isShow($node){
 return $node.offset().top <= $(window).height() + $(window).scrollTop()
 }
//加载图片
 function loadImg($img){
//.attr(值)
//.attr(属性名称,值)
$img.attr('src', $img.attr('data-src')) //把data-src的值 赋值给src
$img.attr('data-isLoaded', 1)//已加载的图片做标记
}

</script>