
function getTag(value,pageNum) {
    if (pageNum === '0'){
        location.href="../description/list.html";
        return
    }
    if (value){
        const currentTags = sessionStorage.getItem('tag') || '';
        sessionStorage.setItem('tag', currentTags +"#"+ value);
        console.log('세션 저장 완료');
        location.href="questions"+pageNum+".html";
    
    }
    else{
        location.href="questions"+pageNum+".html";
    }
}
  