
    let index = 0;
    let amount = 0;
    let currTransl = []
    let translationComplete = true;
    let transitionCompleted = function(){
        translationComplete = true;
    }
    document.addEventListener("DOMContentLoaded", function(event) 
    {   amount = document.getElementsByClassName('slide').length;
        document.getElementsByTagName('span')[0].innerHTML = amount;
        for(let i = 0; i < amount; i++)
        {
            currTransl[i] = -347;
            document.getElementsByClassName('slide')[i].addEventListener("transitionend", transitionCompleted, true);          
            document.getElementsByClassName('slide')[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);       
            document.getElementsByClassName('slide')[i].addEventListener("oTransitionEnd", transitionCompleted, true);         
            document.getElementsByClassName('slide')[i].addEventListener("MSTransitionEnd", transitionCompleted, true);
        }
        console.log("DOM fully loaded and parsed");
    });

    function right()
    {
        if(translationComplete === true)
        {
            translationComplete = false;
            index--;
            if(index == -1)
            {
                index = amount-1;
            }
            let outerIndex = (index) % amount;
            document.getElementById('index').innerHTML = outerIndex === 0 ? 5 : outerIndex;
            for(let i = 0; i < amount; i++)
            {
                let slide = document.getElementsByClassName("slide")[i];    
                slide.style.opacity = '1';    
                slide.style.transform = 'translate('+(currTransl[i]+347)+'px)';
                currTransl[i] = currTransl[i]+347;
            }
            
            let outerSlide = document.getElementsByClassName("slide")[outerIndex];
            outerSlide.style.transform = 'translate('+(currTransl[outerIndex]-347*(amount))+'px)';
            outerSlide.style.opacity = '0';
            currTransl[outerIndex] = currTransl[outerIndex]-347*(amount);
        }
    }

    function left()
    {
        if(translationComplete === true)
        {
            translationComplete = false;
            index++;
            let outerIndex = (index-1) % amount;
            document.getElementById('index').innerHTML = outerIndex+1;
            for(let i = 0; i < amount; i++)
            {
                let slide = document.getElementsByClassName("slide")[i];    
                slide.style.opacity = '1';    
                slide.style.transform = 'translate('+(currTransl[i]-347)+'px)';
                currTransl[i] = currTransl[i]-347;
            }
            let outerSlide = document.getElementsByClassName("slide")[outerIndex];
            outerSlide.style.transform = 'translate('+(currTransl[outerIndex]+347*(amount))+'px)';
            outerSlide.style.opacity = '0';
            currTransl[outerIndex] = currTransl[outerIndex]+347*(amount);
        }
    }