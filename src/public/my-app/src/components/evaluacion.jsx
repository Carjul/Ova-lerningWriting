import Nav from './nav';
export default function Evaluacion () {
	//var iframe = document.getElementById("iframeId");
	
	
	//var value = element;
	//console.log(iframe)
	//<div class="questionset-results">  <div class="greeting">Your result:</div>  <div class="feedback-section">    <div class="feedback-scorebar"><div class="h5p-joubelui-score-bar"><div class="h5p-joubelui-score-bar-visuals"><div class="h5p-joubelui-score-bar-progress-wrapper"><div class="h5p-joubelui-score-bar-progress" style="width: 14.7059%;"></div></div><div class="h5p-joubelui-score-bar-star"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.77 53.87" aria-hidden="true" focusable="false"><title>star</title><filter id="h5p-joubelui-score-bar-star-inner-shadow-2" x0="-50%" y0="-50%" width="200%" height="200%"><feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"></feGaussianBlur><feOffset dy="2" dx="4"></feOffset><feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite><feFlood flood-color="#ffe95c" flood-opacity="1"></feFlood><feComposite in2="shadowDiff" operator="in"></feComposite><feComposite in2="SourceGraphic" operator="over" result="firstfilter"></feComposite><feGaussianBlur in="firstfilter" stdDeviation="3" result="blur2"></feGaussianBlur><feOffset dy="-2" dx="-4"></feOffset><feComposite in2="firstfilter" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite><feFlood flood-color="#ffe95c" flood-opacity="1"></feFlood><feComposite in2="shadowDiff" operator="in"></feComposite><feComposite in2="firstfilter" operator="over"></feComposite></filter><path class="h5p-joubelui-score-bar-star-shadow" d="M35.08,43.41V9.16H20.91v0L9.51,10.85,9,10.93C2.8,12.18,0,17,0,21.25a11.22,11.22,0,0,0,3,7.48l8.73,8.53-1.07,6.16Z"></path><g><path class="h5p-joubelui-score-bar-star-border" d="M61.36,22.8,49.72,34.11l2.78,16a2.6,2.6,0,0,1,.05.64c0,.85-.37,1.6-1.33,1.6A2.74,2.74,0,0,1,49.94,52L35.58,44.41,21.22,52a2.93,2.93,0,0,1-1.28.37c-.91,0-1.33-.75-1.33-1.6,0-.21.05-.43.05-.64l2.78-16L9.8,22.8A2.57,2.57,0,0,1,9,21.25c0-1,1-1.33,1.81-1.49l16.07-2.35L34.09,2.83c.27-.59.85-1.33,1.55-1.33s1.28.69,1.55,1.33l7.21,14.57,16.07,2.35c.75.11,1.81.53,1.81,1.49A3.07,3.07,0,0,1,61.36,22.8Z"></path><path class="h5p-joubelui-score-bar-star-fill" d="M61.36,22.8,49.72,34.11l2.78,16a2.6,2.6,0,0,1,.05.64c0,.85-.37,1.6-1.33,1.6A2.74,2.74,0,0,1,49.94,52L35.58,44.41,21.22,52a2.93,2.93,0,0,1-1.28.37c-.91,0-1.33-.75-1.33-1.6,0-.21.05-.43.05-.64l2.78-16L9.8,22.8A2.57,2.57,0,0,1,9,21.25c0-1,1-1.33,1.81-1.49l16.07-2.35L34.09,2.83c.27-.59.85-1.33,1.55-1.33s1.28.69,1.55,1.33l7.21,14.57,16.07,2.35c.75.11,1.81.53,1.81,1.49A3.07,3.07,0,0,1,61.36,22.8Z"></path><path filter="url(#h5p-joubelui-score-bar-star-inner-shadow-2)" class="h5p-joubelui-score-bar-star-fill-full-score" d="M61.36,22.8,49.72,34.11l2.78,16a2.6,2.6,0,0,1,.05.64c0,.85-.37,1.6-1.33,1.6A2.74,2.74,0,0,1,49.94,52L35.58,44.41,21.22,52a2.93,2.93,0,0,1-1.28.37c-.91,0-1.33-.75-1.33-1.6,0-.21.05-.43.05-.64l2.78-16L9.8,22.8A2.57,2.57,0,0,1,9,21.25c0-1,1-1.33,1.81-1.49l16.07-2.35L34.09,2.83c.27-.59.85-1.33,1.55-1.33s1.28.69,1.55,1.33l7.21,14.57,16.07,2.35c.75.11,1.81.53,1.81,1.49A3.07,3.07,0,0,1,61.36,22.8Z"></path></g></svg></div></div><div class="h5p-joubelui-score-numeric" aria-hidden="true"><span class="h5p-joubelui-score-number h5p-joubelui-score-number-counter">5</span><span class="h5p-joubelui-score-number-separator">/</span><span class="h5p-joubelui-score-number h5p-joubelui-score-max">34</span></div></div></div>    <div class="feedback-text"></div>  </div>      <div class="buttons">    <button type="button" class="h5p-joubelui-button h5p-button qs-solutionbutton">Show solution</button>    <button type="button" class="h5p-joubelui-button h5p-button qs-retrybutton">Retry</button>  </div></div>
    return (
        <section>
        <Nav props={3} />
        <div className="flex flex-col items-center w-full h-full" id="contenedor">

            <div className='p-5'>
				<h1 className="card-title">Evalua tus conocimientos</h1>
             </div>
            
            <div className='p-5  w-full h-full'>
                <iframe id="iframeId" src="https://h5p.org/h5p/embed/1341115" width="100%" height="100%" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="evalucion"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8">
				</script>
            </div>
        </div>
    </section>
    )
} 