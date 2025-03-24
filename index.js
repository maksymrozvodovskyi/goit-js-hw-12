import{a as y,S as v,i as u}from"./assets/vendor-BH9GyP-n.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=a=>a.map(r=>{const{webformatURL:o,largeImageURL:n,tags:e,likes:t,views:l,comments:f,downloads:h}=r;return`<li class="gallery-item">
      <div>
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}" 
            title="${e}"
            width="360"
            height="152"
          />
          </a>
          <div class="img-descr">
            <ul class="list-descr">
              <li class="item-descr">
                <p class="descr-name">Likes</p>
                <p class="descr-value">${t}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Views</p>
                <p class="descr-value">${l}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Comments</p>
                <p class="descr-value">${f}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Downloads</p>
                <p class="descr-value">${h}</p>
              </li>
            </ul>          
          </div>
          </div>
      </li>
      `}).join(""),L="49388465-88aa64a30b18d669aa90a58a7",w="https://pixabay.com/api/";async function g(a,r=1){try{return(await y.get(w,{params:{key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r}})).data}catch(o){throw console.error("Error fetching data:",o),o}}const E="/goit-js-hw-12/assets/error-DTVyw_U3.png",s={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),searchInput:document.querySelector(".form-input"),loadMoreBtn:document.querySelector(".load-btn")};let c="",i=1,d=0,p=new v(".gallery a",{captionsData:"title",captionDelay:250,scrollZoom:!1});s.formEl.addEventListener("submit",b);s.loadMoreBtn.addEventListener("click",S);async function b(a){if(a.preventDefault(),c=s.searchInput.value.trim(),!c)return u.warning({position:"topRight",message:"Please enter a search term!"});i=1,d=0,s.galleryEl.innerHTML="",s.loadMoreBtn.classList.add("visually-hidden"),s.loaderEl.classList.remove("visually-hidden");try{const r=await g(c,i);if(d=r.totalHits,r.hits.length===0){u.error({position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:E,message:"Sorry, there are no images matching your search query. Please try again!"});return}s.galleryEl.insertAdjacentHTML("beforeend",m(r.hits)),p.refresh(),r.hits.length===15&&d>15&&s.loadMoreBtn.classList.remove("visually-hidden")}catch(r){console.log(r)}finally{s.loaderEl.classList.add("visually-hidden")}}async function S(){i+=1,s.loaderEl.classList.remove("visually-hidden");try{const a=await g(c,i);s.galleryEl.insertAdjacentHTML("beforeend",m(a.hits)),p.refresh(),M(),i*15>=d&&(s.loadMoreBtn.classList.add("visually-hidden"),u.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch{u.error({message:"Something went wrong!"})}finally{s.loaderEl.classList.add("visually-hidden")}}function M(){const a=document.querySelector(".gallery-item");if(a){const r=a.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
